import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const socials = [
  { label: "Telegram", icon: "Send", href: "#" },
  { label: "WhatsApp", icon: "MessageCircle", href: "#" },
  { label: "Avito", icon: "ShoppingBag", href: "#" },
]

export function FooterSection() {
  return (
    <footer className="relative bg-foreground px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 80% 50%, hsl(0 72% 38%) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          {/* Brand */}
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-black text-primary-foreground tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Кирилл Суриков
            </motion.h2>
            <p className="text-primary-foreground/50 text-sm mt-2 font-medium">
              Авито-маркетинг для бизнеса
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.04 }}
                  data-clickable
                >
                  <Icon name={s.icon as "Send"} size={15} />
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-primary-foreground/50 text-sm mb-4 font-medium">Готовы к запуску?</p>
            <motion.button
              className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold text-base hover:bg-primary/90 transition-all shadow-lg"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-clickable
            >
              Получить разбор
            </motion.button>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-sm font-medium">© 2026 Кирилл Суриков. Все права защищены.</p>
          <div className="flex items-center gap-2">
            <Icon name="Rocket" size={14} className="text-primary" />
            <span className="text-primary-foreground/30 text-sm font-medium">Запуск Авито под ключ</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
