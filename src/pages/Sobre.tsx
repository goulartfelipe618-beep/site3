import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Zap, Clock, Shield, Award, Heart } from "lucide-react";

const Sobre = () => {
  const diferenciais = [
    { icon: Zap, label: "100% Elétrico" },
    { icon: Leaf, label: "Carbono Neutro" },
    { icon: Clock, label: "Pontualidade" },
    { icon: Shield, label: "Segurança" },
    { icon: Award, label: "Motorista de Elite" },
    { icon: Heart, label: "Mimos Orgânicos" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 organic-bg">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-primary" size={18} />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Quem Somos</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground mb-4">Sobre Nós</h1>
            <p className="text-base text-muted-foreground max-w-md">
              Conheça nossa história e nosso compromisso com a sustentabilidade.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl leading-tight text-foreground">
                Mais de 15 anos transformando trajetos em experiências sustentáveis
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fundada por um entusiasta da direção com mais de 15 anos de estrada, a EcoTransfer
                nasceu do desejo de transformar cada trajeto em uma experiência de conforto, segurança
                e responsabilidade ambiental.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fomos pioneiros na adoção de veículos 100% elétricos para transporte executivo.
                Cada viagem é compensada com plantio de árvores e uso de energia renovável.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa frota é moderna, sustentável e sempre revisada. Nossos motoristas são
                profissionais treinados, bilíngues e comprometidos tanto com você quanto com o planeta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {diferenciais.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="eco-card p-6 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <d.icon className="text-primary" size={18} />
                  </div>
                  <p className="text-sm text-foreground font-medium">{d.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
