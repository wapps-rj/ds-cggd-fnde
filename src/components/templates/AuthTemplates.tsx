import { useState, useRef } from "react";
import { CodeBlock } from "@/components/DSComponents";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import fndeLogoCompleta from "@/assets/logo-fnde-completa.svg";

/* ─── Sign In Preview ─── */
function SignInPreview() {
  const [showPw, setShowPw] = useState(false);
  return (
    <div className="bg-muted/40 rounded-xl p-8 flex items-center justify-center min-h-[520px]">
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={fndeLogoCompleta} alt="FNDE" className="h-12" />
        </div>
        <h3 className="text-center text-lg font-semibold text-foreground mb-1">Bem-vindo</h3>
        <p className="text-center text-xs text-muted-foreground mb-6">
          Informe seu e-mail e senha para acessar o sistema.
        </p>

        {/* Card */}
        <div className="bg-card rounded-xl border shadow-sm p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground">E-mail <span className="text-[#D98217]">*</span></label>
            <input
              type="email"
              placeholder="usuario@fnde.gov.br"
              className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0D3857]/30"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground">Senha <span className="text-[#D98217]">*</span></label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                defaultValue="••••••••"
                className="w-full h-10 rounded-lg border border-input bg-background px-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3857]/30"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
              <input type="checkbox" className="rounded border-input accent-[#0D3857] w-4 h-4" />
              Manter conectado
            </label>
            <a href="#" className="text-xs font-medium text-[#0D3857] hover:underline">Esqueceu a senha?</a>
          </div>

          <button className="w-full h-10 rounded-lg bg-[#0D3857] text-white text-sm font-medium hover:bg-[#0D3857]/90 transition-colors">
            Entrar
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Novo por aqui?{" "}
            <a href="#" className="font-medium text-[#D98217] hover:underline">Criar uma conta</a>
          </p>
        </div>

        <p className="text-center text-[10px] text-muted-foreground mt-6">
          © 2026 FNDE — Fundo Nacional de Desenvolvimento da Educação
        </p>
      </div>
    </div>
  );
}

/* ─── Sign Up Preview ─── */
function SignUpPreview() {
  const [showPw, setShowPw] = useState(false);
  return (
    <div className="bg-muted/40 rounded-xl p-8 flex items-center justify-center min-h-[600px]">
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={fndeLogoCompleta} alt="FNDE" className="h-12" />
        </div>
        <h3 className="text-center text-lg font-semibold text-foreground mb-1">Criar conta</h3>
        <p className="text-center text-xs text-muted-foreground mb-6">
          Preencha os campos abaixo para criar sua conta no sistema FNDE.
        </p>

        {/* Card */}
        <div className="bg-card rounded-xl border shadow-sm p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground">Nome completo <span className="text-[#D98217]">*</span></label>
            <input
              type="text"
              placeholder="João da Silva"
              className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0D3857]/30"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground">E-mail <span className="text-[#D98217]">*</span></label>
            <input
              type="email"
              placeholder="usuario@fnde.gov.br"
              className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0D3857]/30"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground">CPF <span className="text-[#D98217]">*</span></label>
            <input
              type="text"
              placeholder="000.000.000-00"
              className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0D3857]/30"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Senha <span className="text-[#D98217]">*</span></label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  placeholder="Mín. 8 caracteres"
                  className="w-full h-10 rounded-lg border border-input bg-background px-3 pr-10 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0D3857]/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Confirmar senha <span className="text-[#D98217]">*</span></label>
              <input
                type="password"
                placeholder="Repita a senha"
                className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0D3857]/30"
              />
            </div>
          </div>

          <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
            <input type="checkbox" className="rounded border-input accent-[#0D3857] w-4 h-4 mt-0.5" />
            <span>
              Eu concordo com os{" "}
              <a href="#" className="font-medium text-[#0D3857] hover:underline">Termos de Uso</a>
              {" "}e{" "}
              <a href="#" className="font-medium text-[#0D3857] hover:underline">Política de Privacidade</a>
            </span>
          </label>

          <button className="w-full h-10 rounded-lg bg-[#0D3857] text-white text-sm font-medium hover:bg-[#0D3857]/90 transition-colors">
            Criar conta
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Já tem uma conta?{" "}
            <a href="#" className="font-medium text-[#D98217] hover:underline">Entrar</a>
          </p>
        </div>

        <p className="text-center text-[10px] text-muted-foreground mt-6">
          © 2026 FNDE — Fundo Nacional de Desenvolvimento da Educação
        </p>
      </div>
    </div>
  );
}

/* ─── Code snippets ─── */
const signInCode = `<!-- Sign In — FNDE Design System -->
<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f4f4f5;font-family:'Poppins',sans-serif">
  <div style="width:100%;max-width:420px;padding:2rem">
    <div style="text-align:center;margin-bottom:1.5rem">
      <img src="/assets/logo-fnde-completa.svg" alt="FNDE" style="height:48px">
    </div>
    <h3 style="text-align:center;font-size:1.125rem;font-weight:600;margin-bottom:4px">Bem-vindo</h3>
    <p style="text-align:center;font-size:0.75rem;color:#71717a;margin-bottom:1.5rem">
      Informe seu e-mail e senha para acessar o sistema.
    </p>
    <div style="background:#fff;border-radius:0.75rem;border:1px solid #e4e4e7;padding:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,.06)">
      <div style="margin-bottom:1rem">
        <label style="font-size:0.75rem;font-weight:500">E-mail <span style="color:#D98217">*</span></label>
        <input type="email" placeholder="usuario@fnde.gov.br"
          style="width:100%;height:40px;border-radius:8px;border:1px solid #e4e4e7;padding:0 12px;font-size:0.875rem;margin-top:6px">
      </div>
      <div style="margin-bottom:1rem">
        <label style="font-size:0.75rem;font-weight:500">Senha <span style="color:#D98217">*</span></label>
        <input type="password" placeholder="••••••••"
          style="width:100%;height:40px;border-radius:8px;border:1px solid #e4e4e7;padding:0 12px;font-size:0.875rem;margin-top:6px">
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;font-size:0.75rem">
        <label><input type="checkbox" style="margin-right:6px">Manter conectado</label>
        <a href="#" style="color:#0D3857;font-weight:500">Esqueceu a senha?</a>
      </div>
      <button style="width:100%;height:40px;border-radius:8px;background:#0D3857;color:#fff;font-size:0.875rem;font-weight:500;border:none;cursor:pointer">
        Entrar
      </button>
      <p style="text-align:center;font-size:0.75rem;color:#71717a;margin-top:1rem">
        Novo por aqui? <a href="#" style="color:#D98217;font-weight:500">Criar uma conta</a>
      </p>
    </div>
    <p style="text-align:center;font-size:10px;color:#a1a1aa;margin-top:1.5rem">© 2026 FNDE</p>
  </div>
</div>`;

const signUpCode = `<!-- Sign Up — FNDE Design System -->
<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f4f4f5;font-family:'Poppins',sans-serif">
  <div style="width:100%;max-width:420px;padding:2rem">
    <div style="text-align:center;margin-bottom:1.5rem">
      <img src="/assets/logo-fnde-completa.svg" alt="FNDE" style="height:48px">
    </div>
    <h3 style="text-align:center;font-size:1.125rem;font-weight:600;margin-bottom:4px">Criar conta</h3>
    <p style="text-align:center;font-size:0.75rem;color:#71717a;margin-bottom:1.5rem">
      Preencha os campos abaixo para criar sua conta no sistema FNDE.
    </p>
    <div style="background:#fff;border-radius:0.75rem;border:1px solid #e4e4e7;padding:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,.06)">
      <div style="margin-bottom:1rem">
        <label style="font-size:0.75rem;font-weight:500">Nome completo <span style="color:#D98217">*</span></label>
        <input type="text" placeholder="João da Silva"
          style="width:100%;height:40px;border-radius:8px;border:1px solid #e4e4e7;padding:0 12px;font-size:0.875rem;margin-top:6px">
      </div>
      <div style="margin-bottom:1rem">
        <label style="font-size:0.75rem;font-weight:500">E-mail <span style="color:#D98217">*</span></label>
        <input type="email" placeholder="usuario@fnde.gov.br"
          style="width:100%;height:40px;border-radius:8px;border:1px solid #e4e4e7;padding:0 12px;font-size:0.875rem;margin-top:6px">
      </div>
      <div style="margin-bottom:1rem">
        <label style="font-size:0.75rem;font-weight:500">CPF <span style="color:#D98217">*</span></label>
        <input type="text" placeholder="000.000.000-00"
          style="width:100%;height:40px;border-radius:8px;border:1px solid #e4e4e7;padding:0 12px;font-size:0.875rem;margin-top:6px">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:1rem">
        <div>
          <label style="font-size:0.75rem;font-weight:500">Senha <span style="color:#D98217">*</span></label>
          <input type="password" placeholder="Mín. 8 caracteres"
            style="width:100%;height:40px;border-radius:8px;border:1px solid #e4e4e7;padding:0 12px;font-size:0.875rem;margin-top:6px">
        </div>
        <div>
          <label style="font-size:0.75rem;font-weight:500">Confirmar <span style="color:#D98217">*</span></label>
          <input type="password" placeholder="Repita a senha"
            style="width:100%;height:40px;border-radius:8px;border:1px solid #e4e4e7;padding:0 12px;font-size:0.875rem;margin-top:6px">
        </div>
      </div>
      <label style="display:flex;align-items:flex-start;gap:8px;font-size:0.75rem;color:#71717a;margin-bottom:1rem">
        <input type="checkbox" style="margin-top:2px">
        <span>Eu concordo com os <a href="#" style="color:#0D3857;font-weight:500">Termos de Uso</a> e <a href="#" style="color:#0D3857;font-weight:500">Política de Privacidade</a></span>
      </label>
      <button style="width:100%;height:40px;border-radius:8px;background:#0D3857;color:#fff;font-size:0.875rem;font-weight:500;border:none;cursor:pointer">
        Criar conta
      </button>
      <p style="text-align:center;font-size:0.75rem;color:#71717a;margin-top:1rem">
        Já tem uma conta? <a href="#" style="color:#D98217;font-weight:500">Entrar</a>
      </p>
    </div>
    <p style="text-align:center;font-size:10px;color:#a1a1aa;margin-top:1.5rem">© 2026 FNDE</p>
  </div>
</div>`;

/* ─── Exported Section ─── */
export default function AuthTemplatesSection() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [showCode, setShowCode] = useState(false);

  const tabs = [
    { key: "signin" as const, label: "Sign In" },
    { key: "signup" as const, label: "Sign Up" },
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => { setActiveTab(t.key); setShowCode(false); }}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeTab === t.key
                ? "bg-[#0D3857] text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Preview */}
      <div className="fnde-card">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {activeTab === "signin" ? "Tela de Login (Sign In)" : "Tela de Cadastro (Sign Up)"}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              {activeTab === "signin"
                ? "Modelo de autenticação com e-mail e senha, opção de lembrar e recuperação de senha."
                : "Formulário de criação de conta com nome, e-mail, CPF, senha e aceite de termos."}
            </p>
          </div>
          <span className="fnde-badge-primary shrink-0 text-[10px]">Autenticação</span>
        </div>

        {activeTab === "signin" ? <SignInPreview /> : <SignUpPreview />}

        <button
          onClick={() => setShowCode(!showCode)}
          className="text-xs font-medium text-primary hover:underline mt-3"
        >
          {showCode ? "Ocultar código" : "Ver código"}
        </button>
        {showCode && (
          <CodeBlock
            code={activeTab === "signin" ? signInCode : signUpCode}
            language="html"
            title={activeTab === "signin" ? "Sign In — HTML" : "Sign Up — HTML"}
          />
        )}
      </div>
    </div>
  );
}
