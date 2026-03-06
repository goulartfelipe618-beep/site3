import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Leaf } from "lucide-react";

const Contato = () => {
  const info = [
    { icon: Mail, label: "E-mail", value: "contato@ecotransfer.com.br", href: "mailto:contato@ecotransfer.com.br" },
    { icon: Phone, label: "Telefone", value: "(11) 99999-9999", href: "tel:+5511999999999" },
    { icon: MessageCircle, label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 organic-bg">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-primary" size={18} />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Fale Conosco</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground mb-4">Contato</h1>
            <p className="text-base text-muted-foreground max-w-md">
              Entre em contato conosco. Estamos prontos para ajudar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-xl">
          <div className="space-y-4">
            {info.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="eco-card p-6 flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
                <span className="text-muted-foreground group-hover:text-accent transition-colors text-lg">→</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="eco-btn inline-block"
            >
              Falar pelo WhatsApp 🌿
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
