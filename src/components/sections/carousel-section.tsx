import { motion } from "framer-motion"

const marqueeItems = [
  "Ракетный запуск",
  "Бытовки и дома",
  "Авито под ключ",
  "700+ просмотров",
  "3 дня до заявок",
  "Упаковка и стратегия",
  "Строительный бизнес",
  "Воронка продаж",
]

export function CarouselSection() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <section className="bg-primary py-8 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-5 whitespace-nowrap"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-5">
              <span className="text-primary-foreground text-sm font-bold tracking-wide">{item}</span>
              <span className="w-1 h-1 bg-primary-foreground/40 rounded-full flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}