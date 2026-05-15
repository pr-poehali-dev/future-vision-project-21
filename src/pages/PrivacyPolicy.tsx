import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const PrivacyPolicy = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 text-sm font-medium"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </button>

          <h1 className="text-4xl font-black tracking-tight mb-2">Политика конфиденциальности</h1>
          <p className="text-muted-foreground mb-10">Последнее обновление: 15 мая 2025 г.</p>

          <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">

            <section>
              <h2 className="text-foreground font-bold text-lg mb-3">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей,
                оставивших заявку на сайте. Используя сайт и заполняя форму обратной связи, вы соглашаетесь с
                условиями данной политики.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-bold text-lg mb-3">2. Какие данные мы собираем</h2>
              <p>При заполнении формы обратной связи мы собираем:</p>
              <ul className="list-disc ml-5 mt-2 flex flex-col gap-1">
                <li>Имя (имя или псевдоним, который вы указываете)</li>
                <li>Контактные данные (номер телефона WhatsApp или имя пользователя Telegram)</li>
              </ul>
              <p className="mt-2">Мы не собираем платёжные данные, паспортные данные и иные чувствительные сведения.</p>
            </section>

            <section>
              <h2 className="text-foreground font-bold text-lg mb-3">3. Цели обработки данных</h2>
              <p>Персональные данные используются исключительно для:</p>
              <ul className="list-disc ml-5 mt-2 flex flex-col gap-1">
                <li>Связи с вами для проведения бесплатного разбора вашей ниши</li>
                <li>Ответа на ваш запрос</li>
              </ul>
              <p className="mt-2">Данные не используются в рекламных целях и не передаются третьим лицам.</p>
            </section>

            <section>
              <h2 className="text-foreground font-bold text-lg mb-3">4. Хранение и защита данных</h2>
              <p>
                Данные хранятся на защищённых серверах. Доступ к ним имеет только владелец сайта.
                Мы принимаем разумные технические и организационные меры для защиты ваших данных от
                несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-bold text-lg mb-3">5. Срок хранения данных</h2>
              <p>
                Персональные данные хранятся не дольше, чем это необходимо для достижения целей обработки,
                либо до момента вашего запроса на удаление.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-bold text-lg mb-3">6. Ваши права</h2>
              <p>Вы вправе:</p>
              <ul className="list-disc ml-5 mt-2 flex flex-col gap-1">
                <li>Запросить доступ к своим персональным данным</li>
                <li>Потребовать исправления или удаления своих данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
              </ul>
              <p className="mt-2">Для реализации своих прав свяжитесь с нами через Telegram или WhatsApp.</p>
            </section>

            <section>
              <h2 className="text-foreground font-bold text-lg mb-3">7. Согласие</h2>
              <p>
                Отправляя форму на сайте, вы даёте своё согласие на обработку персональных данных
                в соответствии с настоящей политикой и требованиями Федерального закона №&nbsp;152-ФЗ
                «О персональных данных».
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-bold text-lg mb-3">8. Изменения политики</h2>
              <p>
                Мы оставляем за собой право вносить изменения в настоящую политику. Актуальная версия
                всегда доступна на данной странице.
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-border/30">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                boxShadow: "0 8px 24px rgba(33,150,243,0.25)",
              }}
            >
              <Icon name="ArrowLeft" size={16} />
              Вернуться на главную
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
