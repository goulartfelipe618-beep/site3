import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf size={20} />
            <span className="text-lg" style={{ fontFamily: 'DM Serif Display' }}>EcoTransfer</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Transporte executivo sustentável.<br />
            Conforto que respeita o planeta.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-4">Navegação</p>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Transfer" },
              { to: "/grupos", label: "Grupos" },
              { to: "/sobre", label: "Sobre" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-4">Contato</p>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <span>contato@ecotransfer.com.br</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-primary-foreground/50">
            <Leaf size={14} />
            <span>100% carbono neutro</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} EcoTransfer — Mobilidade Sustentável
      </div>
    </div>
  </footer>
);
