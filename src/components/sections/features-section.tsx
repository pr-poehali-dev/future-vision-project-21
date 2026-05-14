import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Search",
    title: "Анализ ниши",
    description: "Изучу конкурентов, спрос и цены. Найду точки входа, которые дают заявки уже в первую неделю.",
  },
  {
    icon: "Package",
    title: "Упаковка объявлений",
    description: "Напишу продающие тексты, подберу ключевые слова и правильно оформлю каждое объявление.",
  },
  {
    icon: "Image",
    title: "Инфографика и офферы",
    description: "Создам визуальные баннеры, которые цепляют взгляд и увеличивают CTR в разы.",
  },
  {
    icon: "Map",
    title: "Стратегия размещения",
    description: "Выстрою воронку из объявлений: от первого касания до заявки в вашем мессенджере.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Who I am block */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-12 font-semibold">Кто я</p>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Photo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-56 h-72 lg:w-64 lg:h-80 rounded-3xl overflow-hidden border border-border/40 shadow-2xl shadow-foreground/10">
                <img
                  src="https://cdn.poehali.dev/projects/53559aa5-a423-4679-a444-cd4c4fda7864/bucket/caa29d37-8852-4e5e-a586-77f4bad90dd0.png"
                  alt="Кирилл Суриков"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h2 className="text-3xl md:text-5xl font-black text-foreground">Кирилл Суриков</h2>
                <p className="text-primary font-semibold mt-2 text-base">Авитолог · Маркетинг · Запуск воронок</p>
                <p className="text-muted-foreground mt-5 text-base font-medium leading-relaxed max-w-lg">
                  Помогаю строительному бизнесу, продавцам бытовок и локальным компаниям получать заявки через Авито.
                  Запускаю аккаунты под ключ — без лишних подрядчиков и долгих согласований.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Services block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-8 font-semibold">Что входит</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="bg-secondary rounded-3xl p-6 flex flex-col gap-4 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                data-clickable
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={s.icon as "Search"} size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed font-medium">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}