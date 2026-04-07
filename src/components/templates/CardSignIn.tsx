import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ComponentPreview, CodeBlock } from "@/components/DSComponents";
import exemploImg from "@/assets/exemplo-imagem-login-2.png";
import fndeLogo from "@/assets/logo-fnde-completa-2.svg";

function CardSignInPreview() {
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg border border-border grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
      {/* Left — Image */}
      <div className="relative hidden md:block">
        <img
          src={exemploImg}
          alt="Edifício FNDE"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d3857]/40" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white/90 text-sm font-medium leading-snug">
            Fundo Nacional de Desenvolvimento da Educação
          </p>
          <p className="text-white/60 text-xs mt-1">Transformando vidas por meio da educação.</p>
        </div>
      </div>

      {/* Right — Form */}
      <div className="flex flex-col justify-center px-8 py-10 bg-card">
        <div className="max-w-sm mx-auto w-full space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={fndeLogo} alt="FNDE" className="h-10 w-auto" />
          </div>

          {/* Title */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">Bem-vindo</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Informe seu e-mail e senha para continuar.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                E-mail <span className="text-[#D98217]">*</span>
              </label>
              <input
                type="email"
                placeholder="admin@exemplo.com"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#0d3857]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Senha <span className="text-[#D98217]">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  defaultValue="12345678"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-[#0d3857]/30"
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
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input type="checkbox" className="rounded border-border" />
              Lembrar de mim
            </label>
            <a href="#" className="text-sm text-[#D98217] hover:underline">Esqueceu a senha?</a>
          </div>

          {/* Button */}
          <button className="w-full py-2.5 rounded-md bg-[#0d3857] text-white font-medium text-sm hover:bg-[#0a2d47] transition-colors">
            Entrar
          </button>

          {/* Register link */}
          <p className="text-center text-sm text-muted-foreground">
            Novo aqui?{" "}
            <a href="#" className="text-[#D98217] hover:underline font-medium">Criar uma conta</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const cardSignInCode = `<!-- Modelo Card (Sign In) — FNDE -->
<div class="card-signin">
  <div class="card-signin__image">
    <img src="/assets/exemplo-imagem-login.png" alt="Edifício FNDE" />
    <div class="card-signin__overlay"></div>
    <div class="card-signin__caption">
      <strong>Fundo Nacional de Desenvolvimento da Educação</strong>
      <span>Transformando vidas por meio da educação.</span>
    </div>
  </div>
  <div class="card-signin__form">
    <img src="/assets/logo-fnde.svg" alt="FNDE" class="card-signin__logo" />
    <h2>Bem-vindo</h2>
    <p>Informe seu e-mail e senha para continuar.</p>
    <form>
      <label>E-mail <span class="required">*</span></label>
      <input type="email" placeholder="admin@exemplo.com" />
      <label>Senha <span class="required">*</span></label>
      <input type="password" />
      <div class="card-signin__options">
        <label><input type="checkbox" /> Lembrar de mim</label>
        <a href="#">Esqueceu a senha?</a>
      </div>
      <button type="submit">Entrar</button>
    </form>
    <p class="card-signin__register">Novo aqui? <a href="#">Criar uma conta</a></p>
  </div>
</div>

<style>
.card-signin {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 480px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  font-family: 'Poppins', sans-serif;
}
.card-signin__image {
  position: relative;
}
.card-signin__image img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.card-signin__overlay {
  position: absolute; inset: 0;
  background: rgba(13,56,87,0.4);
}
.card-signin__caption {
  position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem;
}
.card-signin__caption strong {
  display: block; color: rgba(255,255,255,0.9);
  font-size: 0.875rem;
}
.card-signin__caption span {
  display: block; color: rgba(255,255,255,0.6);
  font-size: 0.75rem; margin-top: 0.25rem;
}
.card-signin__form {
  display: flex; flex-direction: column;
  justify-content: center; padding: 2rem;
}
.card-signin__logo {
  height: 40px; width: auto;
  margin: 0 auto 1.5rem;
}
.card-signin__form h2 {
  text-align: center; font-size: 1.125rem;
  font-weight: 600; color: #1a1a1a;
}
.card-signin__form > p {
  text-align: center; font-size: 0.875rem;
  color: #6b7280; margin-top: 0.25rem;
}
.card-signin__form input[type="email"],
.card-signin__form input[type="password"] {
  width: 100%; padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db; border-radius: 6px;
  font-size: 0.875rem; margin-top: 0.25rem;
}
.card-signin__form label {
  display: block; font-size: 0.875rem;
  font-weight: 500; margin-top: 1rem;
}
.required { color: #D98217; }
.card-signin__options {
  display: flex; justify-content: space-between;
  align-items: center; margin-top: 1rem;
  font-size: 0.875rem;
}
.card-signin__options a {
  color: #D98217; text-decoration: none;
}
.card-signin__form button[type="submit"] {
  width: 100%; padding: 0.625rem;
  background: #0d3857; color: #fff;
  border: none; border-radius: 6px;
  font-weight: 500; font-size: 0.875rem;
  margin-top: 1.5rem; cursor: pointer;
}
.card-signin__register {
  text-align: center; font-size: 0.875rem;
  color: #6b7280; margin-top: 1rem;
}
.card-signin__register a {
  color: #D98217; font-weight: 500;
  text-decoration: none;
}
@media (max-width: 768px) {
  .card-signin { grid-template-columns: 1fr; }
  .card-signin__image { display: none; }
}
</style>`;

export default function CardSignInSection() {
  return (
    <ComponentPreview
      title="Modelo Card (Sign In)"
      description="Layout com imagem institucional à esquerda e formulário de autenticação à direita, seguindo o padrão visual FNDE."
      code={cardSignInCode}
    >
      <CardSignInPreview />
    </ComponentPreview>
  );
}
