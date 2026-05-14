import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center bg-background px-6 py-32"
    >
      <div className="max-w-5xl mx-auto relative text-center">
        {/* Background ghost text */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground/6 tracking-tight">
          Хватит терять заявки.
          <br />
          Авито — ваш новый отдел продаж.
        </h2>

        {/* Animated reveal */}
        <motion.h2
          className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
          style={{
            clipPath,
            background: "linear-gradient(135deg, hsl(0 72% 30%) 0%, hsl(0 72% 48%) 50%, hsl(220 15% 20%) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Хватит терять заявки.
          <br />
          Авито — ваш новый отдел продаж.
        </motion.h2>
      </div>
    </section>
  )
}
