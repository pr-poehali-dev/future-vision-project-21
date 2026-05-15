import { useState } from "react"
import Icon from "@/components/ui/icon"

const LEADS_URL = "https://functions.poehali.dev/c3e1e068-7fa2-4061-a06b-0fa37484232f"
const PASSWORD = "Kfks42334msmdf"
const DEAL_PRICE = 12500

interface Lead {
  id: number
  name: string
  contact: string
  status: string
  created_at: string
}

const COLUMNS = [
  { key: "lead",     label: "Заявка",   color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
  { key: "contact",  label: "Контакт",  color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" },
  { key: "rejected", label: "Отказ",    color: "bg-red-500/10 border-red-500/30 text-red-400" },
  { key: "deal",     label: "Сделка",   color: "bg-green-500/10 border-green-500/30 text-green-400" },
]

export default function Admin() {
  const [password, setPassword] = useState("")
  const [authed, setAuthed] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [movingId, setMovingId] = useState<number | null>(null)
  const [deletingId, setDeletingId] = useState<number | null>(null)

  async function fetchLeads() {
    const res = await fetch(`${LEADS_URL}?password=${encodeURIComponent(PASSWORD)}`)
    const data = await res.json()
    if (res.ok) setLeads(data.leads)
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password !== PASSWORD) { setError("Неверный пароль"); return }
    setLoading(true)
    setError("")
    await fetchLeads()
    setAuthed(true)
    setLoading(false)
  }

  async function handleStatus(id: number, status: string) {
    setMovingId(id)
    await fetch(`${LEADS_URL}?password=${encodeURIComponent(PASSWORD)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })
    setLeads((prev) => prev.map((l) => l.id === id ? { ...l, status } : l))
    setMovingId(null)
  }

  async function handleDelete(id: number) {
    setDeletingId(id)
    await fetch(`${LEADS_URL}?password=${encodeURIComponent(PASSWORD)}&id=${id}`, { method: "DELETE" })
    setLeads((prev) => prev.filter((l) => l.id !== id))
    setDeletingId(null)
  }

  function formatDate(iso: string) {
    const d = new Date(iso)
    return d.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })
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

  const dealCount = leads.filter((l) => l.status === "deal").length
  const totalRevenue = dealCount * DEAL_PRICE

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-black text-foreground">Канбан</h1>
            <p className="text-muted-foreground text-sm mt-0.5">{leads.length} заявок всего</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Revenue */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl px-5 py-3 flex items-center gap-3">
              <Icon name="TrendingUp" size={18} className="text-green-400" />
              <div>
                <p className="text-xs text-green-400/70 font-semibold uppercase tracking-wider">Прибыль</p>
                <p className="text-green-400 font-black text-lg leading-tight">
                  {totalRevenue.toLocaleString("ru-RU")} ₽
                </p>
                <p className="text-green-400/60 text-xs">{dealCount} сделок × {DEAL_PRICE.toLocaleString("ru-RU")} ₽</p>
              </div>
            </div>
            <button
              onClick={() => { fetchLeads() }}
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground text-sm font-semibold px-4 py-2.5 rounded-xl transition"
            >
              <Icon name="RefreshCw" size={14} />
              Обновить
            </button>
          </div>
        </div>

        {/* Kanban */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {COLUMNS.map((col) => {
            const colLeads = leads.filter((l) => l.status === col.key)
            return (
              <div key={col.key} className={`rounded-2xl border p-4 ${col.color} flex flex-col gap-3 min-h-[200px]`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm">{col.label}</span>
                  <span className="text-xs font-bold opacity-60 bg-white/10 rounded-full px-2 py-0.5">{colLeads.length}</span>
                </div>

                {colLeads.length === 0 && (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-xs opacity-40 font-medium">Пусто</p>
                  </div>
                )}

                {colLeads.map((lead) => (
                  <div key={lead.id} className="bg-card border border-border/40 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-foreground text-sm truncate">{lead.name}</p>
                        <p className="text-primary text-xs mt-0.5 truncate">{lead.contact}</p>
                        <p className="text-muted-foreground text-xs mt-1">{formatDate(lead.created_at)}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(lead.id)}
                        disabled={deletingId === lead.id}
                        className="text-muted-foreground/40 hover:text-red-400 transition flex-shrink-0 mt-0.5"
                      >
                        <Icon name="X" size={14} />
                      </button>
                    </div>

                    {/* Move buttons */}
                    <div className="flex gap-1 flex-wrap mt-1">
                      {COLUMNS.filter((c) => c.key !== col.key).map((target) => (
                        <button
                          key={target.key}
                          onClick={() => handleStatus(lead.id, target.key)}
                          disabled={movingId === lead.id}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-secondary hover:bg-secondary/70 text-muted-foreground hover:text-foreground transition disabled:opacity-40"
                        >
                          → {target.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
