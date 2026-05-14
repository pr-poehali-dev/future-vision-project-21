import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-background px-6 py-24 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Авито-маркетинг
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
            Ракетный
            <br />
            <span className="text-primary">запуск</span>
            <br />
            Авито
          </h1>

          <p className="text-lg text-foreground/70 mt-6 max-w-md leading-relaxed font-medium">
            Запущу Ваш аккаунт Авито за 3 дня: упаковка, стратегия, объявления и готовая воронка под заявки
          </p>

          <p className="text-sm text-muted-foreground mt-3 font-medium">
            Для строительных компаний, бытовок, бань, услуг и локального бизнеса
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
            <motion.button
              className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-base font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-clickable
            >
              Получить разбор
            </motion.button>

            <div className="flex items-center gap-3">
              <div className="text-3xl font-black text-foreground">12 500 ₽</div>
              <span className="text-sm text-muted-foreground font-medium">за полный запуск</span>
            </div>
          </div>
        </motion.div>

        {/* Right — UI Card */}
        <motion.div
          className="relative"
          style={{ y }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-foreground/8 border border-border/40 p-6 relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="BarChart2" size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Аккаунт Авито</p>
                  <p className="text-sm font-bold text-foreground">Бытовки Москва</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Активен
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: "Просмотры", value: "712", icon: "Eye", up: true },
                { label: "Заявки", value: "18", icon: "MessageCircle", up: true },
                { label: "CTR", value: "6.4%", icon: "TrendingUp", up: true },
              ].map((stat) => (
                <div key={stat.label} className="bg-secondary rounded-2xl p-3 text-center">
                  <Icon name={stat.icon as "Eye"} size={14} className="text-primary mx-auto mb-1" />
                  <p className="text-lg font-black text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Mini chart */}
            <div className="bg-secondary rounded-2xl p-4 mb-4">
              <div className="flex items-end gap-1.5 h-16">
                {[30, 50, 40, 70, 55, 80, 65, 90, 75, 100, 85, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-primary/20 rounded-sm"
                    style={{ height: `${h}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                  >
                    <div
                      className="w-full bg-primary rounded-sm"
                      style={{ height: i >= 9 ? "100%" : "40%" }}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">Динамика просмотров за 12 дней</p>
            </div>

            {/* Notifications */}
            <div className="space-y-2">
              {[
                { text: "Новая заявка от Михаила", time: "2 мин назад", icon: "Bell" },
                { text: "Объявление в ТОП-3 выдачи", time: "15 мин назад", icon: "Rocket" },
              ].map((n, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 bg-secondary rounded-xl px-3 py-2.5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.2 }}
                >
                  <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={n.icon as "Bell"} size={13} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-foreground truncate">{n.text}</p>
                    <p className="text-[10px] text-muted-foreground">{n.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            🚀 Запуск за 3 дня
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
