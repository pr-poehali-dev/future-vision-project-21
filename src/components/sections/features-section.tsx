import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "15+", label: "активных объявлений" },
  { value: "700+", label: "просмотров в сутки" },
  { value: "3 дня", label: "срок запуска" },
  { value: "100%", label: "ниша бытовок и домов" },
]

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

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Avatar */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-secondary border border-border overflow-hidden">
                <img
                  src="/placeholder-user.jpg"
                  alt="Кирилл Суриков"
                  className="w-full h-full object-cover"
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
                <h2 className="text-3xl md:text-4xl font-black text-foreground">Кирилл Суриков</h2>
                <p className="text-primary font-semibold mt-1 text-base">Авитолог · Маркетинг · Запуск воронок</p>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    className="bg-secondary rounded-2xl p-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    whileHover={{ y: -4 }}
                  >
                    <p className="text-2xl font-black text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-medium leading-snug">{s.label}</p>
                  </motion.div>
                ))}
              </div>
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
