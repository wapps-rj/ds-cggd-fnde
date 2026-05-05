import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail, Lock, Eye, EyeOff, ArrowLeft,
  ChevronRight, Shield, Info, HelpCircle,
  ExternalLink
} from "lucide-react";
import fndeLogoCompleta from "@/assets/logo-fnde-completa-2.svg";
import fndeLogoReduzida from "@/assets/logo-fnde-reduzida.png";
import marcaGov from "@/assets/marca-gov.png";
import exemploImg from "@/assets/exemplo-imagem-login.png";

export default function PaginaAutenticacaoPage() {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-poppins animate-fade-in">
      {/* Botão flutuante para voltar ao DS (padrão dos templates) */}
      <Link
        to="/templates"
        className="fixed top-4 right-4 z-50 flex items-center gap-1.5 px-3 py-1.5 bg-[#0D3857] text-white text-xs rounded-full shadow-lg hover:bg-[#0D3857]/90 transition-all hover:scale-105"
      >
        <ArrowLeft size={12} /> Voltar ao DS
      </Link>

      <div className="flex-1 flex overflow-hidden">
        {/* Lado Esquerdo: Marca e Imagem (Visível apenas em desktop) */}
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
                <h1 className="text-4xl font-bold text-white leading-tight">
                  Transformando vidas por meio da educação.
                </h1>
                <p className="text-lg text-white/80">
                  Acesse os sistemas do Fundo Nacional de Desenvolvimento da Educação e gerencie os recursos para uma educação de qualidade em todo o Brasil.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 text-white/60">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">5.570</span>
                <span className="text-xs uppercase tracking-wider">Municípios Atendidos</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">200k+</span>
                <span className="text-xs uppercase tracking-wider">Escolas Beneficiadas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário de Login */}
        <div className="w-full lg:w-1/2 flex flex-col bg-card overflow-y-auto">
          {/* Mobile Header */}
          <div className="lg:hidden flex justify-center p-8 bg-[#FDF1D0] border-b border-[#e0b86a]">
            <img src={fndeLogoCompleta} alt="FNDE" className="h-10 w-auto" />
          </div>

          <div className="flex-1 flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="w-full max-w-[420px] space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">Acesse sua conta</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bem-vindo de volta! Por favor, insira suas credenciais para acessar o painel administrativo.
                </p>
              </div>

              {/* Botão Gov.br - Padrão Federal */}
              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-[#1351b4] hover:bg-[#1351b4]/90 text-white font-semibold text-sm transition-all shadow-md group">
                <img src={marcaGov} alt="Gov.br" className="h-5 w-auto" />
                <span>Entrar com gov.br</span>
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-3 text-muted-foreground font-medium">Ou use o acesso direto</span>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                    <Mail size={14} className="text-[#D98217]" /> E-mail Institucional
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="usuario@fnde.gov.br"
                      className="w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3857]/20 focus:border-[#0D3857] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="pw" className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                      <Lock size={14} className="text-[#D98217]" /> Senha de Acesso
                    </label>
                    <a href="#" className="text-xs font-medium text-[#D98217] hover:underline">Esqueceu a senha?</a>
                  </div>
                  <div className="relative">
                    <input
                      id="pw"
                      type={showPw ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full h-11 px-4 pr-12 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3857]/20 focus:border-[#0D3857] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw(!showPw)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={showPw ? "Ocultar senha" : "Ver senha"}
                    >
                      {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded border-input bg-background text-[#0D3857] focus:ring-[#0D3857]/30"
                  />
                  <label htmlFor="remember" className="text-xs text-muted-foreground cursor-pointer select-none">
                    Lembrar minhas credenciais neste dispositivo
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-[#0D3857] hover:bg-[#0D3857]/95 disabled:bg-[#0D3857]/50 text-white font-bold rounded-lg shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Entrar no Sistema"
                  )}
                </button>
              </form>

              <div className="pt-6 border-t border-border space-y-4">
                <div className="flex flex-col gap-3">
                  <p className="text-xs text-muted-foreground text-center">
                    Ainda não possui acesso aos nossos sistemas?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-border text-xs font-semibold hover:bg-muted transition-colors">
                      <Shield size={14} className="text-[#D98217]" /> Solicitar Acesso
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-border text-xs font-semibold hover:bg-muted transition-colors">
                      <HelpCircle size={14} className="text-[#D98217]" /> Central de Ajuda
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer do Login */}
          <footer className="p-8 border-t border-border bg-muted/20">
            <div className="max-w-lg mx-auto w-full space-y-6">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
                <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-foreground transition-colors">Acessibilidade</a>
                <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
              </div>


              <div className="flex flex-col items-center gap-3">
                <img src={fndeLogoReduzida} alt="FNDE" className="h-6 opacity-40 grayscale" />
                <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                  © 2026 Fundo Nacional de Desenvolvimento da Educação.<br />
                  Setor Bancário Sul, Quadra 2, Bloco F, Edifício FNDE - Brasília, DF.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
