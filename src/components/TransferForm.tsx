import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "🌿 Solicitação enviada!", description: "Entraremos em contato em breve." });
    setStep(1);
  };

  const labelClass = "text-xs uppercase tracking-wider text-muted-foreground mb-2 block";

  return (
    <div className="eco-card p-8 md:p-10">
      {/* Trip type tabs */}
      <div className="flex gap-2 mb-8">
        {([["ida", "Somente Ida"], ["ida-volta", "Ida e Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-3 text-xs tracking-wider rounded-full transition-all duration-300 ${
                tripType === val
                  ? "bg-primary text-primary-foreground font-medium"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Passageiros</label>
                <input type="number" min={1} placeholder="Nº" required className="eco-input" />
              </div>
              <div>
                <label className={labelClass}>Data</label>
                <input type="date" required className="eco-input" />
              </div>
              <div>
                <label className={labelClass}>Hora</label>
                <input type="time" required className="eco-input" />
              </div>
              {tripType === "hora" && (
                <div>
                  <label className={labelClass}>Horas de serviço</label>
                  <input type="number" min={1} placeholder="Quantas horas?" required className="eco-input" />
                </div>
              )}
            </div>
            <div>
              <label className={labelClass}>Embarque</label>
              <input placeholder="Endereço de embarque" required className="eco-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Endereço de destino" required className="eco-input" />
            </div>
            {tripType === "ida-volta" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Data de Retorno</label>
                  <input type="date" className="eco-input" />
                </div>
                <div>
                  <label className={labelClass}>Hora de Retorno</label>
                  <input type="time" className="eco-input" />
                </div>
              </div>
            )}
            <div>
              <label className={labelClass}>Mensagem</label>
              <textarea placeholder="Observações..." rows={2} className="eco-input resize-none" />
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
                Solicitar Transfer 🌿
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
