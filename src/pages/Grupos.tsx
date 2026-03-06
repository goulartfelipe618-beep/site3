import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import { Bus, Users, MapPin, Leaf } from "lucide-react";
import ecoFleet from "@/assets/eco-fleet.jpg";

const Grupos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ecoFleet} alt="Frota sustentável" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative container mx-auto px-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="text-primary" size={18} />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Grupos & Eventos</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-foreground mb-4">Solicite para<br />seu Grupo</h1>
          <p className="text-base text-muted-foreground max-w-md">
            Logística inteligente e sustentável para eventos, casamentos e turismo.
          </p>
        </motion.div>
      </section>

      {/* Z-layout benefits */}
      <section className="py-24 organic-bg">
        <div className="container mx-auto px-6 space-y-20">

          {/* Row 1: Image left, text right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div className="eco-card overflow-hidden">
              <img src={ecoFleet} alt="Vans elétricas" className="w-full aspect-[16/10] object-cover" />
            </div>
            <div className="md:pl-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bus className="text-primary" size={22} />
              </div>
              <h3 className="text-2xl text-foreground mb-3" style={{ fontFamily: 'DM Serif Display' }}>
                Vans & Ônibus Elétricos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Frota completa e sustentável para grupos de qualquer tamanho.
                De vans executivas elétricas a ônibus híbridos de última geração,
                todos com conforto total e zero emissão.
              </p>
            </div>
          </motion.div>

          {/* Row 2: Text left, image right (Z pattern) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div className="md:pr-6 order-2 md:order-1">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Users className="text-accent" size={22} />
              </div>
              <h3 className="text-2xl text-foreground mb-3" style={{ fontFamily: 'DM Serif Display' }}>
                Eventos & Casamentos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Logística inteligente para seu evento especial. Planejamento completo,
                motoristas profissionais e veículos decorados com materiais naturais.
                Seu evento com consciência ambiental.
              </p>
            </div>
            <div className="eco-card overflow-hidden order-1 md:order-2">
              <div className="w-full aspect-[16/10] bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <Users className="text-accent mx-auto mb-3" size={48} strokeWidth={1} />
                  <p className="text-sm text-muted-foreground">Eventos sob medida</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 3: Image left, text right (Z continues) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div className="eco-card overflow-hidden">
              <div className="w-full aspect-[16/10] bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-3" size={48} strokeWidth={1} />
                  <p className="text-sm text-muted-foreground">Turismo sustentável</p>
                </div>
              </div>
            </div>
            <div className="md:pl-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={22} />
              </div>
              <h3 className="text-2xl text-foreground mb-3" style={{ fontFamily: 'DM Serif Display' }}>
                Ecoturismo
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Excursões com conforto e responsabilidade ambiental.
                Roteiros que conectam você à natureza, com veículos
                que respeitam cada ecossistema visitado.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Reserva para Grupo</span>
              <h2 className="text-3xl md:text-4xl text-foreground mt-3">Solicite seu Orçamento</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <GroupForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
