import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, X } from "lucide-react";

const ecoTips = [
  "🌱 Nossa frota 100% elétrica evita a emissão de 12 toneladas de CO₂ por ano.",
  "🌍 Cada viagem com a EcoTransfer compensa carbono através de reflorestamento.",
  "♻️ Utilizamos materiais reciclados e biodegradáveis em todos os nossos veículos.",
  "🔋 Nossos veículos são carregados com energia solar renovável.",
  "🌿 Plantamos uma árvore para cada 100 viagens realizadas.",
];

export const SustainabilityPopup = () => {
  const [visible, setVisible] = useState(true);
  const [tipIndex] = useState(() => Math.floor(Math.random() * ecoTips.length));

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 3 }}
        className="fixed bottom-6 left-6 z-50 max-w-sm"
      >
        <div className="eco-card p-5 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Leaf className="text-primary" size={18} />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">
              Sustentabilidade
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {ecoTips[tipIndex]}
            </p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
