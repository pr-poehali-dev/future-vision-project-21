import { useState } from "react"

const LEADS_URL = "https://functions.poehali.dev/c3e1e068-7fa2-4061-a06b-0fa37484232f"
const PASSWORD = "Kfks42334msmdf"

interface Lead {
  id: number
  name: string
  contact: string
  created_at: string
}

export default function Admin() {
  const [password, setPassword] = useState("")
  const [authed, setAuthed] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password !== PASSWORD) {
      setError("Неверный пароль")
      return
    }
    setLoading(true)
    setError("")
    const res = await fetch(`${LEADS_URL}?password=${encodeURIComponent(password)}`)
    const data = await res.json()
    if (res.ok) {
      setLeads(data.leads)
      setAuthed(true)
    } else {
      setError("Ошибка загрузки")
    }
    setLoading(false)
  }

  function formatDate(iso: string) {
    const d = new Date(iso)
    return d.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-card border border-border rounded-2xl p-8 shadow-xl">
          <h1 className="text-xl font-black text-foreground mb-6">Вход в админку</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              className="bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white rounded-xl py-3 font-bold text-sm hover:bg-primary/90 transition disabled:opacity-60"
            >
              {loading ? "Загрузка..." : "Войти"}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-black text-foreground">Заявки</h1>
          <span className="text-muted-foreground text-sm">{leads.length} шт.</span>
        </div>

        {leads.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground text-sm">Заявок пока нет</div>
        ) : (
          <div className="flex flex-col gap-3">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-card border border-border rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-bold text-foreground">{lead.name}</p>
                  <p className="text-primary text-sm mt-0.5">{lead.contact}</p>
                </div>
                <p className="text-muted-foreground text-xs shrink-0">{formatDate(lead.created_at)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
