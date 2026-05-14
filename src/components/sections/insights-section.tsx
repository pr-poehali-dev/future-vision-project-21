import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function InsightsSection() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4 font-semibold">Обратная связь</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
            Получите бесплатный разбор
          </h2>
          <p className="text-muted-foreground mt-3 font-medium">
            Отвечу лично и скажу, есть ли смысл заходить в вашу нишу
          </p>
        </motion.div>

        <motion.div
          className="bg-background rounded-3xl p-8 shadow-xl shadow-foreground/5 border border-border/40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                className="bg-secondary border-0 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary font-medium text-sm"
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
                className="bg-secondary border-0 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary font-medium text-sm"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-base mt-2 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.98 }}
              data-clickable
            >
              <Icon name="Rocket" size={18} />
              Получить разбор
            </motion.button>
          </form>

          <div className="flex items-center gap-3 mt-6 p-4 bg-primary/5 rounded-2xl">
            <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="Shield" size={16} className="text-primary" />
            </div>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed">
              Без спама. Отвечу лично и честно скажу, подойдёт ли Авито для вашей ниши.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
