import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const includes = [
  "Анализ ниши и конкурентов",
  "Создание и упаковка объявлений",
  "Инфографика и продающие баннеры",
  "Стратегия размещения",
  "Настройка воронки под заявки",
  "Сдача аккаунта под ключ за 3 дня",
]

export function PricingSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4 font-semibold">Стоимость</p>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">Одна услуга. Один результат.</h2>
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-secondary rounded-3xl p-8 md:p-10 relative border border-border/60">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                🚀 Ракетный запуск Авито
              </span>
            </div>

            <div className="text-center pt-4 pb-8 border-b border-border">
              <div className="flex items-baseline justify-center gap-2 mt-2">
                <span className="text-5xl md:text-6xl font-black text-foreground">12 500</span>
                <span className="text-2xl font-bold text-muted-foreground">₽</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2 font-medium">разовый платёж · запуск за 3 дня</p>
            </div>

            <ul className="mt-8 space-y-4">
              {includes.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                >
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="w-full mt-10 bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-clickable
            >
              Получить разбор бесплатно
            </motion.button>

            <p className="text-center text-xs text-muted-foreground mt-4 font-medium">
              Без предоплаты — сначала созваниваемся
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
