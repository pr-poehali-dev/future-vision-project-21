import json
import os

import psycopg2
import psycopg2.extras

ADMIN_PASSWORD = "Kfks42334msmdf"
VALID_STATUSES = {"lead", "contact", "rejected", "deal"}


def get_conn():
    dsn = os.environ["DATABASE_URL"]
    if "sslmode" not in dsn:
        dsn += ("&" if "?" in dsn else "?") + "sslmode=disable"
    return psycopg2.connect(dsn)


def handler(event: dict, context) -> dict:
    """Сохранение, получение, обновление статуса и удаление заявок."""
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    method = event.get("httpMethod", "GET")
    headers = {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"}

    if method == "POST":
        body = json.loads(event.get("body") or "{}")
        name = (body.get("name") or "").strip()
        contact = (body.get("contact") or "").strip()

        if not name or not contact:
            return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "name and contact required"})}

        conn = get_conn()
        cur = conn.cursor()
        cur.execute("INSERT INTO leads (name, contact) VALUES (%s, %s)", (name, contact))
        conn.commit()
        cur.close()
        conn.close()
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"ok": True})}

    if method == "GET":
        params = event.get("queryStringParameters") or {}
        password = params.get("password", "")
        if password != ADMIN_PASSWORD:
            return {"statusCode": 403, "headers": headers, "body": json.dumps({"error": "forbidden"})}

        conn = get_conn()
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cur.execute("SELECT id, name, contact, status, created_at FROM leads ORDER BY created_at DESC")
        rows = cur.fetchall()
        cur.close()
        conn.close()
        leads = [{"id": r["id"], "name": r["name"], "contact": r["contact"], "status": r["status"], "created_at": str(r["created_at"])} for r in rows]
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"leads": leads})}

    if method == "PATCH":
        params = event.get("queryStringParameters") or {}
        password = params.get("password", "")
        if password != ADMIN_PASSWORD:
            return {"statusCode": 403, "headers": headers, "body": json.dumps({"error": "forbidden"})}

        body = json.loads(event.get("body") or "{}")
        lead_id = body.get("id")
        status = body.get("status", "")

        if not lead_id:
            return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "id required"})}
        if status not in VALID_STATUSES:
            return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "invalid status"})}

        conn = get_conn()
        cur = conn.cursor()
        cur.execute("UPDATE leads SET status = %s WHERE id = %s", (status, int(lead_id)))
        conn.commit()
        cur.close()
        conn.close()
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"ok": True})}

    if method == "DELETE":
        params = event.get("queryStringParameters") or {}
        password = params.get("password", "")
        lead_id = params.get("id", "")
        if password != ADMIN_PASSWORD:
            return {"statusCode": 403, "headers": headers, "body": json.dumps({"error": "forbidden"})}
        if not lead_id:
            return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "id required"})}

        conn = get_conn()
        cur = conn.cursor()
        cur.execute("DELETE FROM leads WHERE id = %s", (int(lead_id),))
        conn.commit()
        cur.close()
        conn.close()
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"ok": True})}

    return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "method not allowed"})}
