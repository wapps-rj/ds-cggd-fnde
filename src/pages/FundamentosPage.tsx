import { PageHeader, SectionHeader, CodeBlock } from "@/components/DSComponents";
import ColorSection from "@/components/ColorSection";
import {
  ArrowRight, Bell, Check, ChevronRight, Download, Eye,
  Heart, Home, Mail, Search, Settings, Star, User, AlertTriangle, Info
} from "lucide-react";

const colorScale = (name: string, colors: { label: string; token: string }[]) => (
  <div className="mb-6">
    <h4 className="text-sm font-semibold mb-2">{name}</h4>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
      {colors.map(c => (
        <div key={c.token} className="text-center">
          <div className={`h-12 rounded-lg border border-border mb-1 bg-${c.token}`} style={{ backgroundColor: `hsl(var(--${c.token}))` }} />
          <p className="text-[10px] font-medium">{c.label}</p>
          <p className="text-[10px] text-muted-foreground">{c.token}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function FundamentosPage() {
  return (
    <div>
      <PageHeader
        title="Fundamentos"
        description="Os alicerces visuais e técnicos do Design System FNDE. Estas diretrizes garantem consistência e acessibilidade em todos os produtos digitais, em ambos os modos claro e escuro."
      />

      {/* Tipografia */}
      <SectionHeader id="tipografia" title="Tipografia" description="A família tipográfica Poppins é utilizada em todas as aplicações do Design System FNDE." />

      <div className="fnde-card mb-6">
        <h4 className="text-sm font-semibold mb-4">Escala tipográfica</h4>
        <div className="space-y-4">
          {[
            { size: "text-4xl (2.25rem)", weight: "Bold (700)", example: "Título principal", cls: "text-4xl font-bold" },
            { size: "text-3xl (1.875rem)", weight: "Bold (700)", example: "Título de seção", cls: "text-3xl font-bold" },
            { size: "text-2xl (1.5rem)", weight: "Semibold (600)", example: "Subtítulo", cls: "text-2xl font-semibold" },
            { size: "text-xl (1.25rem)", weight: "Semibold (600)", example: "Heading menor", cls: "text-xl font-semibold" },
            { size: "text-lg (1.125rem)", weight: "Medium (500)", example: "Lead text", cls: "text-lg font-medium" },
            { size: "text-base (1rem)", weight: "Regular (400)", example: "Corpo de texto padrão do sistema", cls: "text-base" },
            { size: "text-sm (0.875rem)", weight: "Regular (400)", example: "Texto auxiliar e labels", cls: "text-sm" },
            { size: "text-xs (0.75rem)", weight: "Medium (500)", example: "Legendas e captions", cls: "text-xs font-medium" },
          ].map(t => (
            <div key={t.size} className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-3 border-b border-border last:border-0">
              <div className="sm:w-48 shrink-0">
                <p className="text-xs text-muted-foreground">{t.size}</p>
                <p className="text-xs text-muted-foreground">{t.weight}</p>
              </div>
              <p className={t.cls}>{t.example}</p>
            </div>
          ))}
        </div>
      </div>

      <CodeBlock
        title="Uso da tipografia"
        code={`/* Poppins é importada via Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

/* Tokens de tipografia (funcionam em ambos os temas) */
--text-xs: 0.75rem;    /* 12px - Legendas */
--text-sm: 0.875rem;   /* 14px - Labels */
--text-base: 1rem;     /* 16px - Corpo */
--text-lg: 1.125rem;   /* 18px - Lead */
--text-xl: 1.25rem;    /* 20px - Heading */
--text-2xl: 1.5rem;    /* 24px - Subtítulo */
--text-3xl: 1.875rem;  /* 30px - Título seção */
--text-4xl: 2.25rem;   /* 36px - Título principal */`}
        language="css"
      />

      {/* Cores */}
      <SectionHeader id="cores" title="Cores" description="Paleta institucional baseada no Manual da Marca FNDE 2024. No dark mode, as cores são ajustadas para manter contraste e legibilidade." />

      <ColorSection />

      {/* Iconografia */}
      <SectionHeader id="iconografia" title="Iconografia" description="O sistema utiliza Lucide como biblioteca de ícones. São ícones open-source, com traço consistente e boa legibilidade em ambos os temas." />

      <div className="fnde-card mb-6">
        <h4 className="text-sm font-semibold mb-4">Tamanhos padrão</h4>
        <div className="flex items-end gap-6 mb-6">
          {[
            { size: 14, label: "14px – Inline" },
            { size: 16, label: "16px – Default" },
            { size: 20, label: "20px – Medium" },
            { size: 24, label: "24px – Large" },
            { size: 32, label: "32px – Display" },
          ].map(s => (
            <div key={s.size} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star size={s.size} className="text-primary" />
              </div>
              <p className="text-[10px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <h4 className="text-sm font-semibold mb-3">Exemplos de uso</h4>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {[
            { icon: <Home size={20} />, label: "Home" },
            { icon: <Search size={20} />, label: "Search" },
            { icon: <User size={20} />, label: "User" },
            { icon: <Settings size={20} />, label: "Settings" },
            { icon: <Bell size={20} />, label: "Bell" },
            { icon: <Mail size={20} />, label: "Mail" },
            { icon: <Heart size={20} />, label: "Heart" },
            { icon: <Download size={20} />, label: "Download" },
            { icon: <Eye size={20} />, label: "Eye" },
            { icon: <Check size={20} />, label: "Check" },
            { icon: <ArrowRight size={20} />, label: "Arrow" },
            { icon: <ChevronRight size={20} />, label: "Chevron" },
            { icon: <AlertTriangle size={20} />, label: "Alert" },
            { icon: <Info size={20} />, label: "Info" },
            { icon: <Star size={20} />, label: "Star" },
          ].map((ic, i) => (
            <div key={i} className="flex flex-col items-center gap-1 p-2 rounded border border-border hover:bg-muted/50 transition-colors">
              <span className="text-foreground">{ic.icon}</span>
              <span className="text-[9px] text-muted-foreground">{ic.label}</span>
            </div>
          ))}
        </div>
      </div>

      <CodeBlock
        title="Uso com Lucide React"
        code={`import { Search, User, Bell } from "lucide-react";

{/* Tamanho inline com texto */}
<span><Search size={14} /> Buscar</span>

{/* Ícone informativo – precisa de aria-label */}
<button aria-label="Notificações">
  <Bell size={20} />
</button>

{/* Ícone decorativo – usar aria-hidden */}
<span aria-hidden="true"><Star size={16} /></span>`}
        language="tsx"
      />

      {/* Grid */}
      <SectionHeader id="grid" title="Grid e Espaçamento" description="Sistema de grid responsivo baseado em 12 colunas e escala de espaçamento consistente." />

      <div className="fnde-card mb-6">
        <h4 className="text-sm font-semibold mb-4">Escala de espaçamento</h4>
        <div className="space-y-2">
          {[
            { token: "--space-1", value: "4px", rem: "0.25rem" },
            { token: "--space-2", value: "8px", rem: "0.5rem" },
            { token: "--space-3", value: "12px", rem: "0.75rem" },
            { token: "--space-4", value: "16px", rem: "1rem" },
            { token: "--space-6", value: "24px", rem: "1.5rem" },
            { token: "--space-8", value: "32px", rem: "2rem" },
            { token: "--space-10", value: "40px", rem: "2.5rem" },
            { token: "--space-12", value: "48px", rem: "3rem" },
            { token: "--space-16", value: "64px", rem: "4rem" },
          ].map(s => (
            <div key={s.token} className="flex items-center gap-3">
              <code className="text-xs w-28 text-muted-foreground">{s.token}</code>
              <div className="bg-primary/20 h-4 rounded" style={{ width: s.value }} />
              <span className="text-xs text-muted-foreground">{s.value} ({s.rem})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Elevation */}
      <SectionHeader id="elevacao" title="Elevação e Sombras" description="Níveis de elevação para criar hierarquia visual e profundidade. As sombras se adaptam ao tema." />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { label: "XS", token: "--shadow-xs" },
          { label: "SM", token: "--shadow-sm" },
          { label: "MD", token: "--shadow-md" },
          { label: "LG", token: "--shadow-lg" },
          { label: "XL", token: "--shadow-xl" },
        ].map(s => (
          <div key={s.label} className="bg-card rounded-lg p-6 text-center border border-border" style={{ boxShadow: `var(${s.token})` }}>
            <p className="font-semibold text-sm">{s.label}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{s.token}</p>
          </div>
        ))}
      </div>

      {/* Border Radius */}
      <div className="fnde-card mb-8">
        <h4 className="text-sm font-semibold mb-4">Border Radius</h4>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "SM", value: "4px", cls: "rounded-sm" },
            { label: "MD", value: "6px", cls: "rounded-md" },
            { label: "LG", value: "8px", cls: "rounded-lg" },
            { label: "XL", value: "12px", cls: "rounded-xl" },
            { label: "2XL", value: "16px", cls: "rounded-2xl" },
            { label: "Full", value: "9999px", cls: "rounded-full" },
          ].map(r => (
            <div key={r.label} className="text-center">
              <div className={`w-16 h-16 bg-primary/10 border-2 border-primary ${r.cls} mb-1`} />
              <p className="text-xs font-medium">{r.label}</p>
              <p className="text-[10px] text-muted-foreground">{r.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Motion */}
      <SectionHeader id="motion" title="Motion e Transições" description="Animações sutis para feedback e hierarquia de atenção." />

      <div className="fnde-card mb-8">
        <h4 className="text-sm font-semibold mb-3">Durações</h4>
        <div className="space-y-2 mb-4">
          {[
            { label: "Fast", value: "100ms", desc: "Hover, focus" },
            { label: "Normal", value: "200ms", desc: "Transições de estado" },
            { label: "Slow", value: "300ms", desc: "Abertura de painéis" },
            { label: "Slower", value: "500ms", desc: "Animações de entrada" },
          ].map(d => (
            <div key={d.label} className="flex items-center gap-3 text-sm">
              <span className="w-16 font-medium">{d.label}</span>
              <span className="w-16 text-muted-foreground">{d.value}</span>
              <span className="text-muted-foreground text-xs">{d.desc}</span>
            </div>
          ))}
        </div>
        <h4 className="text-sm font-semibold mb-2">Easings</h4>
        <p className="text-xs text-muted-foreground">
          Use <code className="bg-muted px-1 rounded">ease-out</code> para entradas, <code className="bg-muted px-1 rounded">ease-in</code> para saídas e <code className="bg-muted px-1 rounded">ease-in-out</code> para transições contínuas.
        </p>
      </div>

      {/* Responsiveness */}
      <SectionHeader id="responsividade" title="Responsividade" description="Breakpoints do sistema para design responsivo." />

      <div className="fnde-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold">Token</th>
                <th className="text-left py-2 pr-4 font-semibold">Valor</th>
                <th className="text-left py-2 font-semibold">Uso</th>
              </tr>
            </thead>
            <tbody>
              {[
                { token: "sm", value: "640px", desc: "Celulares em landscape" },
                { token: "md", value: "768px", desc: "Tablets" },
                { token: "lg", value: "1024px", desc: "Notebooks" },
                { token: "xl", value: "1280px", desc: "Desktops" },
                { token: "2xl", value: "1400px", desc: "Telas grandes" },
              ].map(b => (
                <tr key={b.token} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">{b.token}</code></td>
                  <td className="py-2 pr-4 text-muted-foreground">{b.value}</td>
                  <td className="py-2 text-muted-foreground">{b.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
