import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Icon from "@/components/ui/icon"

export function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-24"
      style={{
        background: "linear-gradient(160deg, hsl(220 50% 14%) 0%, hsl(215 60% 10%) 40%, hsl(220 40% 7%) 100%)",
      }}
    >
      {/* Sky glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <motion.p
            className="text-foreground/60 text-sm font-semibold uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Вам не нужен авитолог
          </motion.p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.0] tracking-tight">
            Вам нужен
            <br />
            <span
              className="font-black"
              style={{
                background: "linear-gradient(90deg, #2196f3 0%, #42a5f5 50%, #1976d2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ракетный
              <br />
              запуск
            </span>
            <br />
            Авито
          </h1>

          <p className="text-foreground/70 mt-6 max-w-md leading-relaxed font-medium text-base">
            Упаковка, стратегия, объявления и готовая воронка под заявки — за 3 дня под ключ
          </p>

          <p className="text-foreground/45 text-sm mt-3 font-medium">
            Для строительных компаний, бытовок, бань, услуг и локального бизнеса
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10">
            <motion.button
              onClick={onOpenModal}
              className="text-white px-8 py-4 rounded-2xl text-base font-bold transition-all"
              style={{
                background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                boxShadow: "0 8px 32px rgba(33,150,243,0.35)",
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              data-clickable
            >
              Получить разбор
            </motion.button>

            <div className="flex items-center gap-3">
              <div className="text-3xl font-black text-foreground">12 500 ₽</div>
              <span className="text-sm text-foreground/45 font-medium">за полный запуск</span>
            </div>
          </div>

          <motion.div
            className="inline-flex items-center gap-2 mt-8 border border-primary/40 bg-primary/10 text-primary text-sm font-bold px-5 py-2.5 rounded-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Icon name="Rocket" size={16} />
            За 3 дня
          </motion.div>
        </motion.div>

        {/* Right — Hero image */}
        <motion.div
          className="relative flex items-center justify-center"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-[480px]">
            <img
              src="https://cdn.poehali.dev/projects/53559aa5-a423-4679-a444-cd4c4fda7864/bucket/caa29d37-8852-4e5e-a586-77f4bad90dd0.png"
              alt="Кирилл Суриков — Авитолог"
              className="w-full rounded-3xl object-cover"
              style={{ filter: "drop-shadow(0 24px 60px rgba(33,150,243,0.20))" }}
            />
            {/* Floating stats badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-card border border-border/60 rounded-2xl px-5 py-3 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <p className="text-xs text-muted-foreground font-semibold">Просмотры сегодня</p>
              <p className="text-2xl font-black text-foreground">712 <span className="text-primary text-sm">↑</span></p>
            </motion.div>

          </div>
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