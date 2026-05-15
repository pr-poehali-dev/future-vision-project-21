import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const ThankYou = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-md text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 18 }}
        >
          <Icon name="Check" size={36} className="text-primary" />
        </motion.div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-black text-foreground tracking-tight">Заявка отправлена!</h1>
          <p className="text-muted-foreground font-medium">
            Я свяжусь с вами в ближайшее время и расскажу, есть ли смысл заходить в вашу нишу.
          </p>
        </div>

        <motion.button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-2xl font-semibold text-sm text-white"
          style={{
            background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
            boxShadow: "0 8px 24px rgba(33,150,243,0.25)",
          }}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          Вернуться на главную
        </motion.button>
      </motion.div>
    </div>
  )
}

export default ThankYou
