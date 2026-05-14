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
    <section className="bg-primary py-16 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-8">
              <span className="text-primary-foreground text-lg md:text-xl font-bold tracking-wide">{item}</span>
              <span className="w-1.5 h-1.5 bg-primary-foreground/40 rounded-full flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
