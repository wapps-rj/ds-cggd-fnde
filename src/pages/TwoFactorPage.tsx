import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck, ArrowLeft, Smartphone,
  RefreshCw, CheckCircle2, Lock
} from "lucide-react";
import fndeLogoCompleta from "@/assets/logo-fnde-completa-2.svg";
import fndeLogoReduzida from "@/assets/logo-fnde-reduzida.png";
import exemploImg from "@/assets/exemplo-imagem-login.png";

export default function TwoFactorPage() {
  const navigate = useNavigate();
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCodes = [...codes];
    newCodes[index] = value.slice(-1);
    setCodes(newCodes);

    // Mover para o próximo input
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de verificação
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Navegar para o dashboard após sucesso
      setTimeout(() => {
        navigate("/templates/dashboard-institucional");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-poppins animate-fade-in">
      <div className="flex-1 flex overflow-hidden">
        {/* Lado Esquerdo: Marca e Imagem (Desktop) */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0D3857] overflow-hidden">
          <img
            src={exemploImg}
            alt="Edifício FNDE"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3857] via-[#0D3857]/40 to-transparent" />

          <div className="relative z-10 w-full flex flex-col justify-between p-12">
            <div>
              <img src={fndeLogoCompleta} alt="FNDE" className="h-16 w-auto brightness-0 invert" />
              <div className="mt-12 space-y-6 max-w-lg">
                <h2 className="text-3xl font-bold text-white leading-tight">
                  Verificação de Segurança em Duas Etapas.
                </h2>
                <p className="text-lg text-white/80">
                  Protegemos seus dados e o acesso aos recursos da educação com camadas adicionais de proteção.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 py-3 px-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 w-fit">
              <ShieldCheck className="text-green-400" />
              <span className="text-sm text-white font-medium">Ambiente Seguro e Monitorado</span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário de 2FA */}
        <div className="w-full lg:w-1/2 flex flex-col bg-card overflow-y-auto">
          <div className="lg:hidden flex justify-center p-8 bg-[#FDF1D0] border-b border-[#e0b86a]">
            <img src={fndeLogoCompleta} alt="FNDE" className="h-10 w-auto" />
          </div>

          <div className="flex-1 flex items-center justify-center p-8 sm:p-12 md:p-16">
            <div className="w-full max-w-[420px] text-center space-y-8">
              {!isSuccess ? (
                <>
                  <div className="mx-auto w-16 h-16 bg-[#FDF1D0] rounded-full flex items-center justify-center text-[#D98217] mb-6">
                    <Smartphone size={32} />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Verifique seu dispositivo</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Enviamos um código de 6 dígitos para o e-mail cadastrado finalizado em <span className="font-bold text-foreground">****@fnde.gov.br</span>.
                    </p>
                  </div>

                  <form onSubmit={handleVerify} className="space-y-8">
                    <div className="flex justify-between gap-2">
                      {codes.map((code, index) => (
                        <input
                          key={index}
                          ref={(el) => (inputs.current[index] = el)}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={code}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          className="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-input bg-background focus:border-[#0D3857] focus:ring-4 focus:ring-[#0D3857]/10 outline-none transition-all"
                        />
                      ))}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || codes.some(c => !c)}
                      className="w-full h-11 bg-[#0D3857] hover:bg-[#0D3857]/95 disabled:bg-[#0D3857]/40 text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Verificar e Acessar"
                      )}
                    </button>
                  </form>

                  <div className="pt-4 space-y-4">
                    <p className="text-xs text-muted-foreground">
                      Não recebeu o código?{" "}
                      <button className="text-[#D98217] font-semibold hover:underline flex items-center gap-1 mx-auto mt-1">
                        <RefreshCw size={12} /> Reenviar código
                      </button>
                    </p>
                    
                    <Link 
                      to="/templates/pagina-autenticacao" 
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ArrowLeft size={14} /> Usar outro método de autenticação
                    </Link>
                  </div>
                </>
              ) : (
                <div className="animate-in zoom-in duration-300">
                  <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Autenticado com sucesso!</h2>
                  <p className="text-muted-foreground">Redirecionando para o sistema...</p>
                </div>
              )}
            </div>
          </div>

          <footer className="p-8 border-t border-border bg-muted/20 mt-auto">
            <div className="flex flex-col items-center gap-3">
              <img src={fndeLogoReduzida} alt="FNDE" className="h-6 opacity-40 grayscale" />
              <p className="text-[10px] text-muted-foreground text-center">
                Segurança Nível 3 - Padrão Federal de Interoperabilidade.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
