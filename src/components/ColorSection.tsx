import { useState, useCallback } from "react";
import { Check, Copy, Droplets, Palette, SwatchBook, Layers } from "lucide-react";
import { CodeBlock } from "@/components/DSComponents";

/* ------------------------------------------------------------------ */
/*  Helper: copy to clipboard with visual feedback                     */
/* ------------------------------------------------------------------ */
function CopyHex({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [value]);

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-foreground bg-muted/60 hover:bg-muted px-1.5 py-0.5 rounded transition-colors"
      title={`Copiar ${value}`}
      aria-label={`Copiar código hexadecimal ${value}`}
    >
      {copied ? <Check size={10} className="text-success" /> : <Copy size={10} />}
      {value}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Color swatch card                                                  */
/* ------------------------------------------------------------------ */
interface ColorSwatchProps {
  name: string;
  hex: string;
  darkHex?: string;
  token: string;
  description?: string;
  large?: boolean;
}

function ColorSwatch({ name, hex, darkHex, token, description, large }: ColorSwatchProps) {
  return (
    <div className="group">
      <div
        className={`${large ? "h-24" : "h-16"} rounded-lg border border-border mb-2 transition-transform group-hover:scale-[1.02]`}
        style={{ backgroundColor: hex }}
      />
      <p className="text-sm font-semibold text-foreground">{name}</p>
      <div className="flex flex-wrap items-center gap-1.5 mt-1">
        <CopyHex value={hex} />
        {darkHex && (
          <span className="text-[10px] text-muted-foreground">
            Dark: <CopyHex value={darkHex} />
          </span>
        )}
      </div>
      <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">var(--{token})</p>
      {description && <p className="text-[10px] text-muted-foreground mt-0.5">{description}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Gradient card                                                      */
/* ------------------------------------------------------------------ */
interface GradientCardProps {
  name: string;
  css: string;
  colors: string[];
  description: string;
}

function GradientCard({ name, css, colors, description }: GradientCardProps) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [css]);

  return (
    <div className="group">
      <div
        className="h-20 rounded-lg border border-border mb-2 transition-transform group-hover:scale-[1.02]"
        style={{ background: css }}
      />
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground bg-muted/60 hover:bg-muted px-1.5 py-0.5 rounded transition-colors"
          title="Copiar CSS do gradiente"
          aria-label={`Copiar CSS do gradiente ${name}`}
        >
          {copied ? <Check size={10} className="text-success" /> : <Copy size={10} />}
          Copiar CSS
        </button>
      </div>
      <div className="flex flex-wrap gap-1 mt-1">
        {colors.map(c => <CopyHex key={c} value={c} />)}
      </div>
      <p className="text-[10px] text-muted-foreground mt-1">{description}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */
export default function ColorSection() {
  return (
    <>
      {/* ===== PALETA PRINCIPAL ===== */}
      <div className="fnde-card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Palette size={18} className="text-primary" />
          <h4 className="text-sm font-semibold">Paleta principal FNDE</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <ColorSwatch
            name="Azul FNDE (Primary)"
            hex="#0D3857"
            darkHex="#5BA3D9"
            token="primary"
            description="Cor principal da marca. Utilizada em CTAs, links, header e elementos de destaque."
            large
          />
          <ColorSwatch
            name="Laranja FNDE (Secondary)"
            hex="#D98217"
            darkHex="#F5A623"
            token="secondary"
            description="Cor secundária da marca. Utilizada em destaques, badges e ações secundárias."
            large
          />
        </div>

        {/* Escala do azul */}
        <h4 className="text-sm font-semibold mb-3">Escala do Azul FNDE</h4>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-3 mb-6">
          {[
            { name: "50", hex: "#EDF3F8", token: "fnde-blue-50" },
            { name: "100", hex: "#D4E3EE", token: "fnde-blue-100" },
            { name: "200", hex: "#9FC3DD", token: "fnde-blue-200" },
            { name: "300", hex: "#5B96BA", token: "fnde-blue-300" },
            { name: "400", hex: "#1E5F8C", token: "fnde-blue-400" },
            { name: "500", hex: "#0D3857", token: "fnde-blue-500" },
            { name: "600", hex: "#082841", token: "fnde-blue-600" },
            { name: "700", hex: "#04192A", token: "fnde-blue-700" },
          ].map(c => (
            <div key={c.token} className="text-center">
              <div className="h-12 rounded-lg border border-border mb-1" style={{ backgroundColor: c.hex }} />
              <p className="text-[10px] font-semibold">{c.name}</p>
              <CopyHex value={c.hex} />
            </div>
          ))}
        </div>

        {/* Escala do laranja */}
        <h4 className="text-sm font-semibold mb-3">Escala do Laranja FNDE</h4>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-3">
          {[
            { name: "50", hex: "#FDF5EA", token: "fnde-orange-50" },
            { name: "100", hex: "#F8E4C1", token: "fnde-orange-100" },
            { name: "200", hex: "#F0C06D", token: "fnde-orange-200" },
            { name: "300", hex: "#E69D2E", token: "fnde-orange-300" },
            { name: "400", hex: "#D98217", token: "fnde-orange-400" },
            { name: "500", hex: "#B06A10", token: "fnde-orange-500" },
            { name: "600", hex: "#7A4A0A", token: "fnde-orange-600" },
          ].map(c => (
            <div key={c.token} className="text-center">
              <div className="h-12 rounded-lg border border-border mb-1" style={{ backgroundColor: c.hex }} />
              <p className="text-[10px] font-semibold">{c.name}</p>
              <CopyHex value={c.hex} />
            </div>
          ))}
        </div>
      </div>

      {/* ===== CORES COMPLEMENTARES DO MANUAL ===== */}
      <div className="fnde-card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <SwatchBook size={18} className="text-primary" />
          <h4 className="text-sm font-semibold">Cores complementares do Manual FNDE</h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {[
            { name: "Azul Claro", hex: "#A3D1F0", token: "fnde-comp-blue-light" },
            { name: "Azul Médio", hex: "#4A8DC2", token: "fnde-comp-blue-mid" },
            { name: "Amarelo", hex: "#FADB4D", token: "fnde-comp-yellow" },
            { name: "Dourado", hex: "#C28B15", token: "fnde-comp-gold" },
            { name: "Vermelho", hex: "#D42A1A", token: "fnde-comp-red" },
            { name: "Índigo", hex: "#4A1AD4", token: "fnde-comp-indigo" },
            { name: "Lima", hex: "#A3C71A", token: "fnde-comp-lime" },
          ].map(c => (
            <div key={c.token} className="text-center">
              <div className="h-14 rounded-lg border border-border mb-1" style={{ backgroundColor: c.hex }} />
              <p className="text-[10px] font-semibold">{c.name}</p>
              <CopyHex value={c.hex} />
            </div>
          ))}
        </div>
      </div>

      {/* ===== CORES SEMÂNTICAS ===== */}
      <div className="fnde-card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers size={18} className="text-primary" />
          <h4 className="text-sm font-semibold">Cores semânticas (feedback)</h4>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          Cores com significado funcional para comunicar estados ao usuário. Cada cor possui variantes para texto, fundo e foreground, adaptando-se ao modo claro e escuro.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Success",
              hex: "#17875A",
              darkHex: "#34D399",
              bgHex: "#ECFDF5",
              darkBgHex: "#052E16",
              fgHex: "#FFFFFF",
              token: "success",
              desc: "Confirmações, ações concluídas, validações positivas.",
            },
            {
              name: "Warning",
              hex: "#D98217",
              darkHex: "#FBBF24",
              bgHex: "#FEF9EC",
              darkBgHex: "#422006",
              fgHex: "#4A2F06",
              token: "warning",
              desc: "Alertas, atenção necessária, ações potencialmente destrutivas.",
            },
            {
              name: "Error",
              hex: "#D42A1A",
              darkHex: "#F87171",
              bgHex: "#FEF2F2",
              darkBgHex: "#450A0A",
              fgHex: "#FFFFFF",
              token: "error",
              desc: "Erros, falhas, validações negativas, ações destrutivas.",
            },
            {
              name: "Info",
              hex: "#4A8DC2",
              darkHex: "#60A5FA",
              bgHex: "#EFF6FF",
              darkBgHex: "#1E3A5F",
              fgHex: "#FFFFFF",
              token: "info",
              desc: "Informações contextuais, dicas, mensagens neutras.",
            },
          ].map(c => (
            <div key={c.token} className="border border-border rounded-lg overflow-hidden">
              <div className="h-12" style={{ backgroundColor: c.hex }} />
              <div className="h-8" style={{ backgroundColor: c.bgHex }} />
              <div className="p-3">
                <p className="text-sm font-semibold mb-1">{c.name}</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Base</span>
                    <CopyHex value={c.hex} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Dark</span>
                    <CopyHex value={c.darkHex} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Fundo (light)</span>
                    <CopyHex value={c.bgHex} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Fundo (dark)</span>
                    <CopyHex value={c.darkBgHex} />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SUPERFÍCIES ===== */}
      <div className="fnde-card mb-6">
        <h4 className="text-sm font-semibold mb-3">Superfícies e fundos</h4>
        <p className="text-xs text-muted-foreground mb-4">Cores de fundo utilizadas em todo o sistema. Se adaptam automaticamente ao modo claro/escuro.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Background", hex: "#F5F7FA", darkHex: "#0C1E2E", token: "background", cls: "bg-background border" },
            { label: "Card", hex: "#FFFFFF", darkHex: "#132F46", token: "card", cls: "bg-card border" },
            { label: "Muted", hex: "#ECF0F4", darkHex: "#1A3A52", token: "muted", cls: "bg-muted" },
            { label: "Accent", hex: "#EDF3F8", darkHex: "#163050", token: "accent", cls: "bg-accent" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className={`h-14 rounded-lg mb-1 ${s.cls} border-border`} />
              <p className="text-xs font-semibold">{s.label}</p>
              <div className="mt-1 space-y-0.5">
                <div className="flex justify-center gap-1">
                  <span className="text-[9px] text-muted-foreground">L:</span>
                  <CopyHex value={s.hex} />
                </div>
                <div className="flex justify-center gap-1">
                  <span className="text-[9px] text-muted-foreground">D:</span>
                  <CopyHex value={s.darkHex} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== GRADIENTES ===== */}
      <div className="fnde-card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Droplets size={18} className="text-primary" />
          <h4 className="text-sm font-semibold">Gradientes institucionais</h4>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          Gradientes aprovados para uso em headers, banners, cards de destaque e elementos decorativos. Clique para copiar o CSS.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <GradientCard
            name="Primário (Azul FNDE)"
            css="linear-gradient(135deg, #0D3857 0%, #1E5F8C 50%, #4A8DC2 100%)"
            colors={["#0D3857", "#1E5F8C", "#4A8DC2"]}
            description="Header principal, hero sections, banners institucionais."
          />
          <GradientCard
            name="Secundário (Laranja FNDE)"
            css="linear-gradient(135deg, #B06A10 0%, #D98217 50%, #F0C06D 100%)"
            colors={["#B06A10", "#D98217", "#F0C06D"]}
            description="Destaques, CTAs especiais, cards de ação."
          />
          <GradientCard
            name="Institucional (Azul → Laranja)"
            css="linear-gradient(135deg, #0D3857 0%, #1E5F8C 40%, #D98217 100%)"
            colors={["#0D3857", "#1E5F8C", "#D98217"]}
            description="Banners institucionais, comunicação especial, relatórios."
          />
          <GradientCard
            name="Sutil (Superfície)"
            css="linear-gradient(180deg, #F5F7FA 0%, #EDF3F8 100%)"
            colors={["#F5F7FA", "#EDF3F8"]}
            description="Fundos de seção, separação de áreas. Modo claro apenas."
          />
          <GradientCard
            name="Dark Institucional"
            css="linear-gradient(135deg, #04192A 0%, #0D3857 50%, #1E5F8C 100%)"
            colors={["#04192A", "#0D3857", "#1E5F8C"]}
            description="Headers e banners no modo escuro."
          />
          <GradientCard
            name="Destaque Quente"
            css="linear-gradient(135deg, #D98217 0%, #FADB4D 100%)"
            colors={["#D98217", "#FADB4D"]}
            description="Badges de destaque, promoções, notificações importantes."
          />
        </div>
      </div>

      {/* ===== UTILIZAÇÃO SISTÊMICA ===== */}
      <div className="fnde-card mb-6">
        <h4 className="text-sm font-semibold mb-4">Utilização sistêmica das cores</h4>
        <p className="text-xs text-muted-foreground mb-4">
          Mapeamento de como cada cor deve ser aplicada nos contextos do produto. Sempre use tokens CSS ao invés de valores hexadecimais diretamente no código.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 font-semibold">Contexto</th>
                <th className="text-left py-2 pr-3 font-semibold">Token CSS</th>
                <th className="text-left py-2 pr-3 font-semibold">Hex (Light)</th>
                <th className="text-left py-2 pr-3 font-semibold">Hex (Dark)</th>
                <th className="text-left py-2 font-semibold">Onde usar</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ctx: "Fundo da página", token: "--background", light: "#F5F7FA", dark: "#0C1E2E", use: "Body, fundo geral" },
                { ctx: "Cards e painéis", token: "--card", light: "#FFFFFF", dark: "#132F46", use: "Cards, modais, drawers" },
                { ctx: "Texto principal", token: "--foreground", light: "#0B2A42", dark: "#E8F0F7" },
                { ctx: "Texto secundário", token: "--muted-foreground", light: "#6B8299", dark: "#8AA5BD", use: "Labels, descrições" },
                { ctx: "Ação primária", token: "--primary", light: "#0D3857", dark: "#5BA3D9", use: "Botões, links, foco" },
                { ctx: "Ação secundária", token: "--secondary", light: "#D98217", dark: "#F5A623", use: "Badges, destaques" },
                { ctx: "Bordas", token: "--border", light: "#DAE1EA", dark: "#1E4668", use: "Divisores, inputs" },
                { ctx: "Fundo muted", token: "--muted", light: "#ECF0F4", dark: "#1A3A52", use: "Áreas de destaque sutil" },
                { ctx: "Sucesso", token: "--success", light: "#17875A", dark: "#34D399", use: "Confirmações, validações" },
                { ctx: "Alerta", token: "--warning", light: "#D98217", dark: "#FBBF24", use: "Avisos, atenção" },
                { ctx: "Erro", token: "--error", light: "#D42A1A", dark: "#F87171", use: "Erros, exclusões" },
                { ctx: "Informação", token: "--info", light: "#4A8DC2", dark: "#60A5FA", use: "Dicas, informações" },
              ].map(row => (
                <tr key={row.token} className="border-b border-border last:border-0">
                  <td className="py-2 pr-3 font-medium">{row.ctx}</td>
                  <td className="py-2 pr-3">
                    <code className="bg-muted px-1 py-0.5 rounded text-[10px]">{row.token}</code>
                  </td>
                  <td className="py-2 pr-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded border border-border shrink-0" style={{ backgroundColor: row.light }} />
                      <CopyHex value={row.light} />
                    </div>
                  </td>
                  <td className="py-2 pr-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded border border-border shrink-0" style={{ backgroundColor: row.dark }} />
                      <CopyHex value={row.dark} />
                    </div>
                  </td>
                  <td className="py-2 text-muted-foreground">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== CÓDIGO DE EXEMPLO ===== */}
      <CodeBlock
        title="Uso dos tokens de cor no CSS"
        language="css"
        code={`/* Sempre use tokens CSS — nunca hex diretamente */
.card {
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border: 1px solid hsl(var(--border));
}

.btn-primary {
  background-color: hsl(var(--primary));       /* #0D3857 (light) | #5BA3D9 (dark) */
  color: hsl(var(--primary-foreground));        /* #FFFFFF */
}

.btn-secondary {
  background-color: hsl(var(--secondary));      /* #D98217 (light) | #F5A623 (dark) */
  color: hsl(var(--secondary-foreground));      /* #FFFFFF */
}

/* Gradientes com tokens */
.hero-banner {
  background: linear-gradient(135deg, #0D3857 0%, #1E5F8C 50%, #4A8DC2 100%);
}

.dark .hero-banner {
  background: linear-gradient(135deg, #04192A 0%, #0D3857 50%, #1E5F8C 100%);
}

/* Feedback semântico */
.alert-success {
  background-color: hsl(var(--success-bg));
  color: hsl(var(--success));
  border-left: 3px solid hsl(var(--success));
}

.alert-error {
  background-color: hsl(var(--error-bg));
  color: hsl(var(--error));
  border-left: 3px solid hsl(var(--error));
}`}
      />

      <CodeBlock
        title="Uso dos tokens de cor no Tailwind"
        language="tsx"
        code={`{/* Botões usando tokens — se adaptam ao tema automaticamente */}
<button className="bg-primary text-primary-foreground">Ação principal</button>
<button className="bg-secondary text-secondary-foreground">Ação secundária</button>

{/* Feedback */}
<div className="bg-success/10 text-success border-l-3 border-success p-4">
  Operação concluída com sucesso.
</div>

{/* Gradientes no Tailwind */}
<div className="bg-gradient-to-r from-[#0D3857] via-[#1E5F8C] to-[#4A8DC2]">
  Banner institucional
</div>

{/* Nunca faça isso ❌ */}
<div className="bg-[#0D3857] text-white">Evite hex direto</div>

{/* Faça isso ✅ */}
<div className="bg-primary text-primary-foreground">Use tokens</div>`}
      />
    </>
  );
}
