import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import { Leaf, Zap, Clock, Shield } from "lucide-react";
import ecoSedan from "@/assets/eco-sedan.jpg";
import ecoInterior from "@/assets/eco-interior.jpg";

const Index = () => {
  const features = [
    { icon: Zap, title: "100% Elétrico", desc: "Frota de veículos elétricos de luxo, zero emissão." },
    { icon: Leaf, title: "Carbono Neutro", desc: "Compensamos cada viagem com reflorestamento." },
    { icon: Clock, title: "Pontualidade", desc: "Compromisso absoluto com seus horários." },
    { icon: Shield, title: "Motorista Bilíngue", desc: "Profissionais treinados e discretos." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ecoSedan} alt="Sedã elétrico na natureza" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-6 py-32"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-primary" size={18} />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Mobilidade Sustentável</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6 text-foreground">
              Transporte Executivo que Respeita o Planeta
            </h1>
            <p className="text-base text-muted-foreground max-w-md mb-8 leading-relaxed">
              Sua viagem com o conforto e a pontualidade que você merece — em veículos 100% elétricos.
            </p>
            <a href="#reserva" className="eco-btn inline-block">
              Solicitar Transfer 🌿
            </a>
          </div>
        </motion.div>
      </section>

      {/* Fleet gallery */}
      <section className="py-24 organic-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Nossa Frota</span>
            <h2 className="text-3xl md:text-4xl text-foreground mt-3">Luxo Consciente</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="eco-card overflow-hidden group"
            >
              <img
                src={ecoSedan}
                alt="Sedã elétrico"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg text-foreground mb-1">Sedã Elétrico Premium</h3>
                <p className="text-sm text-muted-foreground">Até 4 passageiros • Zero emissão • Wi-Fi a bordo</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="eco-card overflow-hidden group"
            >
              <img
                src={ecoInterior}
                alt="Interior sustentável"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg text-foreground mb-1">Interior Sustentável</h3>
                <p className="text-sm text-muted-foreground">Couro vegano • Materiais reciclados • Conforto total</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="eco-card p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-foreground font-medium mb-2" style={{ fontFamily: 'DM Serif Display' }}>{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="reserva" className="py-24 organic-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Reserva</span>
              <h2 className="text-3xl md:text-4xl text-foreground mt-3">Solicite seu Transfer</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
