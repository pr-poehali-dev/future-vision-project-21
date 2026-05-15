import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const LEADS_URL = "https://functions.poehali.dev/c3e1e068-7fa2-4061-a06b-0fa37484232f"

export function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !contact.trim()) return
    setLoading(true)
    await fetch(LEADS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, contact }),
    })
    setLoading(false)
    setSent(true)
    if (typeof window !== "undefined" && (window as unknown as { ym?: (id: number, action: string, goal: string) => void }).ym) {
      (window as unknown as { ym: (id: number, action: string, goal: string) => void }).ym(109234883, "reachGoal", "lead_form_submit")
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-md bg-card rounded-3xl p-8 shadow-2xl border border-border/40 relative"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-accent transition-colors"
                data-clickable
              >
                <Icon name="X" size={16} className="text-muted-foreground" />
              </button>

              <div className="mb-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Бесплатно</p>
                <h2 className="text-2xl font-black text-foreground tracking-tight">Получите бесплатный разбор</h2>
                <p className="text-muted-foreground text-sm mt-2 font-medium">
                  Отвечу лично и скажу, есть ли смысл заходить в вашу нишу
                </p>
              </div>

              {sent ? (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-foreground">Заявка отправлена!</h3>
                  <p className="text-muted-foreground text-sm font-medium">Я свяжусь с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      className="bg-secondary border-0 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary font-medium text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Telegram или WhatsApp
                    </label>
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="@username или +7 900 000 00 00"
                      className="bg-secondary border-0 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary font-medium text-sm"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full text-white py-4 rounded-2xl font-bold text-base mt-1 flex items-center justify-center gap-2 disabled:opacity-60"
                    style={{
                      background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                      boxShadow: "0 8px 24px rgba(33,150,243,0.30)",
                    }}
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    data-clickable
                  >
                    <Icon name={loading ? "Loader" : "Rocket"} size={18} />
                    {loading ? "Отправляю..." : "Получить разбор"}
                  </motion.button>
                </form>
              )}

              <div className="flex items-center gap-3 mt-5 p-4 bg-primary/8 rounded-2xl">
                <Icon name="Shield" size={15} className="text-primary flex-shrink-0" />
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                  Без спама. Отвечу лично и честно скажу, подойдёт ли Авито для вашей ниши.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}