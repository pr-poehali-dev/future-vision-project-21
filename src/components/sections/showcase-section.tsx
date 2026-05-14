import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  {
    num: "01",
    icon: "Phone",
    title: "Созвон",
    description: "Обсуждаем нишу, продукт и цели. Понимаю, что вам нужно.",
  },
  {
    num: "02",
    icon: "Search",
    title: "Анализ ниши",
    description: "Изучаю конкурентов, спрос, семантику и точки роста.",
  },
  {
    num: "03",
    icon: "FileText",
    title: "Создание объявлений",
    description: "Пишу тексты, делаю инфографику, настраиваю структуру.",
  },
  {
    num: "04",
    icon: "Rocket",
    title: "Запуск",
    description: "Размещаю объявления по стратегии. Всё под ключ за 3 дня.",
  },
  {
    num: "05",
    icon: "MessageCircle",
    title: "Получение заявок",
    description: "Заявки идут к вам напрямую. Вы просто отвечаете клиентам.",
  },
]

const reasons = [
  {
    icon: "Users",
    title: "Люди уже ищут на Авито",
    description: "Горячий спрос без рекламного бюджета. Аудитория готова купить прямо сейчас.",
  },
  {
    icon: "Zap",
    title: "Быстрый запуск",
    description: "Без сложных сайтов и подрядчиков. Авито работает с первого дня.",
  },
  {
    icon: "TrendingUp",
    title: "Заявки в первую неделю",
    description: "Правильная упаковка даёт результат сразу — не через месяцы.",
  },
  {
    icon: "BarChart2",
    title: "Упаковка влияет на CTR",
    description: "Одно слово в заголовке может удвоить кликабельность объявления.",
  },
]

export function ShowcaseSection() {
  return (
    <>
      {/* How it works */}
      <section className="bg-secondary px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-muted-foreground text-xs uppercase tracking-widest mb-12 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Как проходит работа
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-border z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <motion.div
                  className="w-16 h-16 bg-background rounded-2xl border-2 border-border flex items-center justify-center mb-4 shadow-sm"
                  whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                >
                  <Icon name={step.icon as "Phone"} size={24} className="text-primary" />
                </motion.div>
                <span className="text-xs font-bold text-primary/60 mb-1">{step.num}</span>
                <h3 className="font-bold text-foreground text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="bg-background px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-muted-foreground text-xs uppercase tracking-widest mb-12 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Почему это работает
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                className="flex gap-5 p-6 bg-secondary rounded-3xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                data-clickable
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name={r.icon as "Users"} size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed font-medium">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
