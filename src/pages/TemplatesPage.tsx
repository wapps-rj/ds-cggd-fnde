import { useState } from "react";
import { PageHeader, SectionHeader, CodeBlock } from "@/components/DSComponents";
import { Menu, Sun, Moon } from "lucide-react";
import SidebarMenuSection from "@/components/templates/SidebarMenuPreview";
import AuthTemplatesSection from "@/components/templates/AuthTemplates";
import CardSignInSection from "@/components/templates/CardSignIn";
import DashboardTemplatesSection from "@/components/templates/DashboardTemplates";
import fndeLogo from "@/assets/marca-fnde-negativa.svg";
import fndeLogoCompleta from "@/assets/logo-fnde-completa.svg";
import fndeLogoReduzida from "@/assets/logo-fnde-reduzida.png";
import fndeLogoCompleta2 from "@/assets/logo-fnde-completa-2.svg";
import fndeLogoReduzida2 from "@/assets/logo-fnde-reduzida-2.png";
import marcaGov from "@/assets/marca-gov.png";

/* ─── Header variant type ─── */
interface HeaderVariant {
  id: string;
  title: string;
  description: string;
  audience: "interno" | "interno-classificado" | "externo" | "claro-completa" | "claro-reduzida" | "claro-sem-gov";
  brandStyle: "completa" | "reduzida";
  menuPosition: "esquerda" | "direita" | "sem";
  showClassification?: boolean;
  showTitle?: boolean;
}

const headerVariants: HeaderVariant[] = [
  // Público interno
  { id: "int-full-left", title: "Marca completa · Menu esquerdo + ícone", description: "Header padrão com logo completo, sigla e nome do sistema. Menu hambúrguer à esquerda.", audience: "interno", brandStyle: "completa", menuPosition: "esquerda" },
  { id: "int-full-right", title: "Marca completa · Menu direito + ícone", description: "Logo completo com menu hambúrguer à direita.", audience: "interno", brandStyle: "completa", menuPosition: "direita" },
  { id: "int-full-no", title: "Marca completa · Sem menu", description: "Header limpo sem ícone de menu.", audience: "interno", brandStyle: "completa", menuPosition: "sem" },
  { id: "int-red-left", title: "Marca reduzida · Menu esquerdo", description: "Versão compacta com ícone reduzido do FNDE.", audience: "interno", brandStyle: "reduzida", menuPosition: "esquerda" },
  { id: "int-red-right", title: "Marca reduzida · Menu direito", description: "Marca reduzida com menu à direita.", audience: "interno", brandStyle: "reduzida", menuPosition: "direita" },
  // Público interno com classificação
  { id: "cls-full-left", title: "Marca completa · Classificação de conteúdo", description: "Header com barra de classificação do conteúdo abaixo.", audience: "interno-classificado", brandStyle: "completa", menuPosition: "esquerda", showClassification: true },
  { id: "cls-full-right", title: "Marca completa · Classificação · Menu direito", description: "Com classificação e menu à direita.", audience: "interno-classificado", brandStyle: "completa", menuPosition: "direita", showClassification: true },
  { id: "cls-red-left", title: "Marca reduzida · Classificação", description: "Marca reduzida com classificação de conteúdo.", audience: "interno-classificado", brandStyle: "reduzida", menuPosition: "esquerda", showClassification: true },
  // Público externo
  { id: "ext-full-left", title: "Público externo · Marca completa", description: "Header em tom claro para portais externos.", audience: "externo", brandStyle: "completa", menuPosition: "esquerda" },
  { id: "ext-full-right", title: "Público externo · Menu direito", description: "Versão externa com menu à direita.", audience: "externo", brandStyle: "completa", menuPosition: "direita" },
  { id: "ext-red-left", title: "Público externo · Marca reduzida", description: "Versão reduzida para público externo.", audience: "externo", brandStyle: "reduzida", menuPosition: "esquerda" },
  // Fundo claro — Programa e Gestão
  { id: "claro-full", title: "Fundo claro · Marca completa + Gov.br", description: "Header com fundo dourado, marca completa FNDE, título do programa e assinatura Gov.br.", audience: "claro-completa", brandStyle: "completa", menuPosition: "sem", showTitle: true },
  { id: "claro-red", title: "Fundo claro · Marca reduzida + Gov.br", description: "Header com fundo dourado, marca reduzida FNDE, título do programa e assinatura Gov.br.", audience: "claro-reduzida", brandStyle: "reduzida", menuPosition: "sem", showTitle: true },
  { id: "claro-full-clean", title: "Fundo claro · Marca completa · Sem título", description: "Header limpo com fundo dourado, marca completa FNDE e assinatura Gov.br, sem título do programa.", audience: "claro-completa", brandStyle: "completa", menuPosition: "sem", showTitle: false },
  { id: "claro-red-clean", title: "Fundo claro · Marca reduzida · Sem título", description: "Header limpo com fundo dourado, marca reduzida FNDE e assinatura Gov.br, sem título do programa.", audience: "claro-reduzida", brandStyle: "reduzida", menuPosition: "sem", showTitle: false },
  // Fundo claro — Sem Gov.br
  { id: "claro-full-nogov", title: "Fundo claro · Marca completa · Sem Gov.br", description: "Header com fundo dourado e marca completa FNDE, sem assinatura Gov.br.", audience: "claro-sem-gov", brandStyle: "completa", menuPosition: "sem", showTitle: false },
  { id: "claro-red-nogov", title: "Fundo claro · Marca reduzida · Sem Gov.br", description: "Header com fundo dourado e marca reduzida FNDE, sem assinatura Gov.br.", audience: "claro-sem-gov", brandStyle: "reduzida", menuPosition: "sem", showTitle: false },
];

function getHeaderBg(audience: string) {
  if (audience === "externo") return "bg-[#D98217]";
  if (audience === "claro-completa" || audience === "claro-reduzida" || audience === "claro-sem-gov") return "bg-[#FBDFA2]";
  return "bg-[#0d3857]";
}

function getHeaderBgHex(audience: string) {
  if (audience === "externo") return "#D98217";
  if (audience === "claro-completa" || audience === "claro-reduzida" || audience === "claro-sem-gov") return "#FBDFA2";
  return "#0d3857";
}

function getClassificationBg(audience: string) {
  if (audience === "externo") return "bg-[#E5A54D]";
  return "bg-[#F0C06D]";
}

function getClassificationText(audience: string) {
  if (audience === "externo") return "text-white/90";
  return "text-[#082841]";
}

function isLightHeader(audience: string) {
  return audience === "claro-completa" || audience === "claro-reduzida" || audience === "claro-sem-gov";
}

/* ─── Single Header Preview ─── */
function HeaderPreview({ variant }: { variant: HeaderVariant }) {
  const bg = getHeaderBg(variant.audience);
  const light = isLightHeader(variant.audience);
  const sigla = "SIGLA";
  const systemName = "Nome do sistema";

  // Light header (fundo claro) — special layout
  if (light) {
    return (
      <div className="rounded-lg overflow-hidden border border-border">
        <div className={`${bg} flex items-center px-5 py-3 gap-4 min-h-[56px]`}>
          {/* Logo FNDE */}
          <div className="flex items-center gap-3 shrink-0">
            {variant.audience === "claro-completa" ? (
              <img src={fndeLogoCompleta} alt="FNDE" className="h-9 w-auto" />
            ) : variant.audience === "claro-sem-gov" && variant.brandStyle === "completa" ? (
              <img src={fndeLogoCompleta2} alt="FNDE" className="h-9 w-auto" />
            ) : variant.audience === "claro-sem-gov" && variant.brandStyle === "reduzida" ? (
              <img src={fndeLogoReduzida2} alt="FNDE" className="h-9 w-auto" />
            ) : (
              <img src={fndeLogoReduzida} alt="FNDE" className="h-9 w-auto" />
            )}
          </div>

          {/* Separator + Title (conditional) */}
          {variant.showTitle !== false && (
            <>
              <div className="w-px h-8 bg-[#0d3857]/30 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#0d3857] leading-tight">Título do Programa - Exemplo</p>
                <p className="text-xs text-[#0d3857]/70 leading-tight">Apenas um exemplo de subtítulo do programa</p>
              </div>
            </>
          )}
          {variant.showTitle === false && <div className="flex-1" />}

          {/* Theme toggle */}
          <button className="p-1.5 hover:bg-[#0d3857]/10 rounded transition-colors shrink-0" aria-label="Alternar tema">
            <Sun size={16} className="text-[#0d3857]/70" />
          </button>

          {/* Menu hamburger (right) */}
          <button className="p-1.5 hover:bg-[#0d3857]/10 rounded flex items-center gap-1.5 transition-colors shrink-0" aria-label="Menu">
            <Menu size={18} className="text-[#0d3857]" />
            <span className="text-[10px] text-[#0d3857]/70 hidden sm:inline">Menu</span>
          </button>

          {/* Gov.br (only for non claro-sem-gov) */}
          {variant.audience !== "claro-sem-gov" && (
            <img src={marcaGov} alt="Governo do Brasil" className="h-10 w-auto shrink-0" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden border border-border">
      {/* Header bar */}
      <div className={`${bg} text-white flex items-center px-4 py-2.5 gap-3 min-h-[44px]`}>
        {/* Logo area */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {variant.brandStyle === "completa" ? (
            <img src={fndeLogo} alt="FNDE" className="h-6 w-auto brightness-0 invert" />
          ) : (
            <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-[8px] font-bold">F</div>
          )}
          <span className="text-white/60 text-sm">|</span>
          <span className="font-semibold text-sm">{sigla}</span>
          <span className="text-sm text-white/80 truncate">{systemName}</span>
        </div>

        {/* Theme toggle */}
        <button className="p-1.5 hover:bg-white/10 rounded transition-colors" aria-label="Alternar tema">
          <Sun size={16} className="text-white/80" />
        </button>

        {/* Menu hamburger (right) */}
        <button className="p-1.5 hover:bg-white/10 rounded flex items-center gap-1.5 transition-colors" aria-label="Menu">
          <Menu size={18} />
          <span className="text-[10px] hidden sm:inline">Menu</span>
        </button>
      </div>

      {/* Classification bar */}
      {variant.showClassification && (
        <div className={`${getClassificationBg(variant.audience)} ${getClassificationText(variant.audience)} px-4 py-1 text-[10px]`}>
          Conteúdo <strong>INTERNO/TODOS</strong>
        </div>
      )}
    </div>
  );
}

/* ─── Code generator ─── */
function generateHeaderCode(variant: HeaderVariant): string {
  const bgHex = getHeaderBgHex(variant.audience);
  const light = isLightHeader(variant.audience);

  // Light header code
  if (light) {
    const logoSrc = variant.audience === "claro-completa"
      ? "/assets/logo-fnde-completa.svg"
      : "/assets/logo-fnde-reduzida.png";
    const titleHtml = variant.showTitle !== false
      ? `
    <div class="fnde-header-light__separator"></div>
    <div class="fnde-header-light__title">
      <strong>Título do Programa - Exemplo</strong>
      <span>Apenas um exemplo de subtítulo do programa</span>
    </div>`
      : `
    <div style="flex:1"></div>`;
    return `<!-- Header FNDE: ${variant.title} -->
<header class="fnde-header-light" style="background-color: ${bgHex};">
  <div class="fnde-header-light__inner">
    <img src="${logoSrc}" alt="FNDE" class="fnde-header-light__logo" />${titleHtml}
    <img src="/assets/marca-gov.png" alt="Governo do Brasil" class="fnde-header-light__gov" />
  </div>
</header>

<style>
.fnde-header-light {
  font-family: 'Poppins', sans-serif;
}
.fnde-header-light__inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  min-height: 56px;
}
.fnde-header-light__logo {
  height: 36px;
  width: auto;
  flex-shrink: 0;
}
.fnde-header-light__separator {
  width: 1px;
  height: 32px;
  background: rgba(13, 56, 87, 0.3);
  flex-shrink: 0;
}
.fnde-header-light__title {
  flex: 1;
  min-width: 0;
}
.fnde-header-light__title strong {
  display: block;
  font-size: 0.875rem;
  color: #0d3857;
  line-height: 1.3;
}
.fnde-header-light__title span {
  display: block;
  font-size: 0.75rem;
  color: rgba(13, 56, 87, 0.7);
  line-height: 1.3;
}
.fnde-header-light__gov {
  height: 40px;
  width: auto;
  flex-shrink: 0;
}
</style>`;
  }

  const menuLeft = variant.menuPosition === "esquerda";
  const menuRight = variant.menuPosition === "direita";
  const logoHtml = variant.brandStyle === "completa"
    ? `<img src="/assets/marca-fnde-negativa.svg" alt="FNDE" class="header__logo" />`
    : `<div class="header__logo-icon">F</div>`;

  let html = `<!-- Header FNDE: ${variant.title} -->
<header class="fnde-header" style="background-color: ${bgHex};">
  <div class="fnde-header__inner">
${menuLeft ? `    <button class="fnde-header__menu" aria-label="Abrir menu">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
` : ""}    ${logoHtml}
    <span class="fnde-header__separator">|</span>
    <span class="fnde-header__sigla">SIGLA</span>
    <span class="fnde-header__name">Nome do sistema</span>
${menuRight ? `    <button class="fnde-header__menu fnde-header__menu--right" aria-label="Abrir menu">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      <span>Menu</span>
    </button>
` : ""}  </div>
</header>`;

  if (variant.showClassification) {
    html += `
<div class="fnde-header__classification">
  Conteúdo <strong>INTERNO/TODOS</strong>
</div>`;
  }

  html += `

<style>
.fnde-header {
  color: #fff;
  font-family: 'Poppins', sans-serif;
}
.fnde-header__inner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  min-height: 44px;
}
.fnde-header__menu {
  background: none;
  border: none;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}
.fnde-header__menu:hover { background: rgba(255,255,255,0.1); }
.fnde-header__menu--right { margin-left: auto; }
.fnde-header__logo { height: 24px; width: auto; filter: brightness(0) invert(1); }
.fnde-header__logo-icon {
  width: 24px; height: 24px;
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; font-weight: 700;
}
.fnde-header__separator { opacity: 0.4; font-size: 0.875rem; }
.fnde-header__sigla { font-weight: 600; font-size: 0.875rem; }
.fnde-header__name { font-size: 0.875rem; opacity: 0.8; }
.fnde-header__classification {
  background: ${variant.audience === "externo" ? "#E5A54D" : "#F0C06D"};
  color: ${variant.audience === "externo" ? "rgba(255,255,255,0.9)" : "#082841"};
  padding: 0.25rem 1rem;
  font-size: 0.625rem;
}
</style>`;

  return html;
}

export default function TemplatesPage() {
  const [openCode, setOpenCode] = useState<string | null>(null);
  const [activeAudience, setActiveAudience] = useState<string>("all");

  const templates = [
    { title: "Dashboard Institucional", desc: "Painel com indicadores, gráficos e resumos executivos.", preview: "bg-fnde-blue-50" },
    { title: "Tela de Listagem", desc: "Tabela com filtros, busca e paginação.", preview: "bg-fnde-orange-50" },
    { title: "Tela de Formulário", desc: "Formulário com validação, steps e feedback.", preview: "bg-fnde-blue-50" },
    { title: "Tela de Detalhe", desc: "Visualização detalhada de um registro.", preview: "bg-fnde-orange-50" },
    { title: "Página de Autenticação", desc: "Login com campos, logo e branding FNDE.", preview: "bg-fnde-blue-50" },
    { title: "Página de Erro", desc: "404, 500 e erros genéricos com ação de retorno.", preview: "bg-fnde-orange-50" },
    { title: "Página com Filtros e Tabela", desc: "Combinação de sidebar de filtros com tabela de resultados.", preview: "bg-fnde-blue-50" },
  ];

  const audiences = [
    { key: "all", label: "Todos" },
    { key: "interno", label: "Público interno" },
    { key: "interno-classificado", label: "Interno + Classificação" },
    { key: "externo", label: "Público externo" },
    { key: "claro", label: "Fundo claro" },
  ];

  const filteredVariants = activeAudience === "all"
    ? headerVariants
    : activeAudience === "claro"
      ? headerVariants.filter(v => v.audience === "claro-completa" || v.audience === "claro-reduzida" || v.audience === "claro-sem-gov")
      : headerVariants.filter(v => v.audience === activeAudience);

  return (
    <div>
      <PageHeader title="Templates" description="Padrões de página pré-definidos para os principais fluxos de uso dos produtos digitais do FNDE." />

      {/* ═══ HEADER SECTION ═══ */}
      <SectionHeader
        id="header"
        title="Header — Componente Final"
        description="Componente de cabeçalho para utilização nos projetos. Variações por público, posição do menu e estilo da marca."
      />

      {/* Audience filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {audiences.map(a => (
          <button
            key={a.key}
            onClick={() => setActiveAudience(a.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeAudience === a.key
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>

      {/* Header variants grid */}
      <div className="grid grid-cols-1 gap-6 mb-12">
        {filteredVariants.map(variant => (
          <div key={variant.id} className="fnde-card">
            {/* Label */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <h4 className="text-sm font-semibold text-foreground">{variant.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{variant.description}</p>
              </div>
              <span className={`fnde-badge-${variant.audience === "externo" ? "success" : isLightHeader(variant.audience) ? "warning" : "primary"} shrink-0 text-[10px]`}>
                {variant.audience === "externo" ? "Externo" : isLightHeader(variant.audience) ? "Fundo claro" : variant.audience === "interno-classificado" ? "Classificado" : "Interno"}
              </span>
            </div>

            {/* Preview */}
            <HeaderPreview variant={variant} />

            {/* Code toggle */}
            <button
              onClick={() => setOpenCode(openCode === variant.id ? null : variant.id)}
              className="text-xs font-medium text-primary hover:underline mt-3"
            >
              {openCode === variant.id ? "Ocultar código" : "Ver código"}
            </button>
            {openCode === variant.id && (
              <CodeBlock code={generateHeaderCode(variant)} language="html" title={`Header: ${variant.title}`} />
            )}
          </div>
        ))}
      </div>

      {/* Usage guidelines */}
      <div className="fnde-card mb-12">
        <h4 className="font-semibold text-foreground mb-3">Diretrizes de uso</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-muted-foreground">
          <div>
            <p className="font-semibold text-success mb-1">✓ Quando usar</p>
            <ul className="space-y-1">
              <li>• Sempre no topo de todas as aplicações FNDE</li>
              <li>• Use marca completa quando há espaço horizontal suficiente</li>
              <li>• Use marca reduzida em telas estreitas ou aplicativos mobile</li>
              <li>• Aplique classificação de conteúdo quando exigido pela política institucional</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-error mb-1">✗ Quando não usar</p>
            <ul className="space-y-1">
              <li>• Não altere as cores do header fora do padrão definido</li>
              <li>• Não remova ou substitua o logo institucional</li>
              <li>• Não use versão de público externo em sistemas internos</li>
              <li>• Não oculte a barra de classificação quando requerida</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ═══ MENU LATERAL SECTION ═══ */}
      <SectionHeader
        id="menu-lateral"
        title="Menu Lateral — Componente Final"
        description="Menu de navegação lateral para complementar o botão de menu do header. Com ícones, subitens, busca e botão fechar."
      />
      <div className="mb-12">
        <SidebarMenuSection />
      </div>

      {/* ═══ AUTH TEMPLATES ═══ */}
      <SectionHeader
        id="modelos-login"
        title="Modelos de Login"
        description="Templates de autenticação prontos para uso nos sistemas FNDE. Sign In e Sign Up com a identidade visual do órgão."
      />
      <div className="mb-12">
        <AuthTemplatesSection />
      </div>

      {/* ═══ CARD SIGN IN ═══ */}
      <SectionHeader
        id="modelo-card"
        title="Modelo Card (Sign In)"
        description="Template de login com layout em duas colunas: imagem institucional à esquerda e formulário de autenticação à direita."
      />
      <div className="mb-12">
        <CardSignInSection />
      </div>

      {/* ═══ DASHBOARD TEMPLATES ═══ */}
      <SectionHeader
        id="dashboards"
        title="Modelos de Dashboard"
        description="Templates de painéis de controle baseados em layouts Power BI, com KPIs, tabelas, gráficos e indicadores de desempenho."
      />
      <div className="mb-12">
        <DashboardTemplatesSection />
      </div>

      {/* ═══ HUB DE PAINÉIS ═══ */}
      <SectionHeader
        id="hub-paineis"
        title="Modelo Hub de Painéis"
        description="Template de portal centralizado para acesso a múltiplos painéis gerenciais, com cards interativos e efeito flip."
      />
      <div className="mb-12">
        <HubPaineisSection />
      </div>

      {/* ═══ TEMPLATE CARDS (existing) ═══ */}
      <SectionHeader
        id="templates-modelos"
        title="Modelos de Página"
        description="Padrões de layout pré-definidos para os principais fluxos."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map(t => (
          <div key={t.title} className="fnde-card overflow-hidden">
            <div className={`h-32 ${t.preview} rounded-lg mb-4 flex items-center justify-center`}>
              <div className="w-4/5 space-y-2">
                <div className="h-3 bg-primary/10 rounded w-1/3" />
                <div className="flex gap-2">
                  <div className="h-16 bg-primary/10 rounded flex-1" />
                  <div className="h-16 bg-primary/10 rounded flex-1" />
                </div>
                <div className="h-3 bg-primary/10 rounded w-2/3" />
              </div>
            </div>
            <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
            <p className="text-xs text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
