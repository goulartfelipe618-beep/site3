import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "🌿 Solicitação de grupo enviada!", description: "Nossa equipe entrará em contato." });
    setStep(1);
  };

  const labelClass = "text-xs uppercase tracking-wider text-muted-foreground mb-2 block";

  return (
    <div className="eco-card p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Tipo de Veículo</label>
                <select className="eco-input">
                  <option value="">Selecione</option>
                  <option value="van">Van Elétrica</option>
                  <option value="micro">Micro-ônibus Híbrido</option>
                  <option value="onibus">Ônibus Sustentável</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Nº de Passageiros</label>
                <input type="number" min={1} placeholder="Quantidade" required className="eco-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Embarque</label>
              <input placeholder="Endereço de embarque" required className="eco-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Endereço de destino" required className="eco-input" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Data/Hora de Ida</label>
                <input type="datetime-local" required className="eco-input" />
              </div>
              <div>
                <label className={labelClass}>Data/Hora de Retorno</label>
                <input type="datetime-local" className="eco-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Observações</label>
              <textarea placeholder="Detalhes do evento, paradas extras..." rows={2} className="eco-input resize-none" />
            </div>
            <div>
              <label className={labelClass}>Cupom</label>
              <input placeholder="Código do cupom" className="eco-input" />
            </div>
            <button type="button" onClick={() => setStep(2)} className="eco-btn w-full mt-3">
              Próximo: Seus Dados →
            </button>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nome Completo</label>
                <input placeholder="Seu nome" required className="eco-input" />
              </div>
              <div>
                <label className={labelClass}>E-mail</label>
                <input type="email" placeholder="seu@email.com" required className="eco-input" />
              </div>
              <div>
                <label className={labelClass}>WhatsApp</label>
                <input placeholder="(00) 00000-0000" required className="eco-input" />
              </div>
              <div>
                <label className={labelClass}>Como nos encontrou?</label>
                <select className="eco-input">
                  <option value="">Selecione</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="indicacao">Indicação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <button type="button" onClick={() => setStep(1)} className="eco-btn-outline flex-1">
                ← Voltar
              </button>
              <button type="submit" className="eco-btn flex-1">
                Solicitar para Grupo 🌿
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
