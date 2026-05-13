import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader, SectionHeader, CodeBlock } from "@/components/DSComponents";
import ColorSection from "@/components/ColorSection";
import GridSection from "@/components/GridSection";
import {
  ArrowRight, Bell, Check, ChevronRight, Download, Eye,
  Heart, Home, Mail, Search, Settings, Star, User, AlertTriangle, Info,
  Plus, Minus, RotateCcw
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
  const [fontSizeOffset, setFontSizeOffset] = useState(0);
  const [key1, setKey1] = useState(0);
  const [key3, setKey3] = useState(0);

  const typographyScale = [
    { name: "text-4xl", baseSize: 2.25, weight: "Bold (700)", example: "Título principal", cls: "text-4xl font-bold" },
    { name: "text-3xl", baseSize: 1.875, weight: "Bold (700)", example: "Título de seção", cls: "text-3xl font-bold" },
    { name: "text-2xl", baseSize: 1.5, weight: "Semibold (600)", example: "Subtítulo", cls: "text-2xl font-semibold" },
    { name: "text-xl", baseSize: 1.25, weight: "Semibold (600)", example: "Heading menor", cls: "text-xl font-semibold" },
    { name: "text-lg", baseSize: 1.125, weight: "Medium (500)", example: "Lead text", cls: "text-lg font-medium" },
    { name: "text-base", baseSize: 1, weight: "Regular (400)", example: "Corpo de texto padrão do sistema", cls: "text-base" },
    { name: "text-sm", baseSize: 0.875, weight: "Regular (400)", example: "Texto auxiliar e labels", cls: "text-sm" },
    { name: "text-xs", baseSize: 0.75, weight: "Medium (500)", example: "Legendas e captions", cls: "text-xs font-medium" },
  ];

  return (
    <div>
      <PageHeader
        title="Fundamentos"
        description="Os alicerces visuais e técnicos do Design System FNDE. Estas diretrizes garantem consistência e acessibilidade em todos os produtos digitais, em ambos os modos claro e escuro."
      />

      {/* Tipografia */}
      <SectionHeader id="tipografia" title="Tipografia" description="A família tipográfica Poppins é utilizada em todas as aplicações do Design System FNDE." />

      <div className="fnde-card mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Escala tipográfica dinâmica</h4>
          <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-lg border border-border">
            <button 
              onClick={() => setFontSizeOffset(prev => Math.max(prev - 0.125, -0.5))}
              className="p-1.5 hover:bg-background rounded shadow-sm transition-all"
              title="Diminuir tamanho"
            >
              <Minus size={16} />
            </button>
            <div className="px-3 text-xs font-mono font-bold min-w-[60px] text-center">
              {fontSizeOffset > 0 ? `+${fontSizeOffset.toFixed(3)}` : fontSizeOffset.toFixed(3)}rem
            </div>
            <button 
              onClick={() => setFontSizeOffset(prev => Math.min(prev + 0.125, 1))}
              className="p-1.5 hover:bg-background rounded shadow-sm transition-all"
              title="Aumentar tamanho"
            >
              <Plus size={16} />
            </button>
            <div className="w-px h-4 bg-border mx-1" />
            <button 
              onClick={() => setFontSizeOffset(0)}
              className="p-1.5 hover:bg-background rounded shadow-sm transition-all text-muted-foreground hover:text-foreground"
              title="Resetar para o padrão"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {typographyScale.map(t => (
            <div key={t.name} className="flex flex-col sm:flex-row sm:items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
              <div className="sm:w-48 shrink-0 space-y-1">
                <p className="text-xs font-bold text-primary">{t.name}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded border border-border">
                    Base: {t.baseSize}rem
                  </span>
                  <span className="text-[10px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded border border-primary/20">
                    Atual: {(t.baseSize + fontSizeOffset).toFixed(3)}rem
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground italic">{t.weight}</p>
              </div>
              <div className="flex-1 overflow-hidden">
                <p 
                  className={t.cls} 
                  style={{ fontSize: `${t.baseSize + fontSizeOffset}rem`, lineHeight: '1.2' }}
                >
                  {t.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fnde-card mb-6">
        <h4 className="text-sm font-semibold mb-6">Aplicabilidade e Composição</h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Título Principal (H1)</h1>
              <p className="text-lg font-medium text-muted-foreground">Este é um exemplo de lead text ou subtítulo que acompanha o título principal para dar mais contexto.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Título de Seção (H2)</h2>
              <p className="leading-relaxed">
                Este é um exemplo de <strong>texto corrido</strong> (body text) demonstrando a legibilidade e o espaçamento entre linhas padrão do Design System FNDE. 
                Podemos utilizar variações como <em>texto em itálico</em> para dar ênfase, <span className="underline">texto sublinhado</span> para links ou termos específicos, 
                e combinações de <strong><em>negrito com itálico</em></strong> quando necessário.
              </p>
              
              <h3 className="text-2xl font-semibold">Subtítulo de Nível 3 (H3)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Textos auxiliares menores mantêm uma boa mancha tipográfica mesmo com redução de corpo, ideal para descrições detalhadas que não devem competir visualmente com o conteúdo principal.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-primary">Listas e Organização</h4>
              
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-2">Lista com Bullets:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Primeiro item da lista com bullet</li>
                    <li>Segundo item com mais conteúdo para testar a quebra de linha automática e o recuo do texto.</li>
                    <li>Terceiro item importante</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Lista Numerada:</p>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>Passo inicial do processo</li>
                    <li>Execução da tarefa principal</li>
                    <li>Finalização e feedback do usuário</li>
                  </ol>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
                    Nota: O espaçamento entre linhas (line-height) é calculado para garantir que olhos não se percam durante a leitura de blocos densos de informação.
                  </p>
                </div>
              </div>
            </div>
          </div>
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

// Tamanho inline com texto
<span><Search size={14} /> Buscar</span>

// Ícone informativo – precisa de aria-label
<button aria-label="Notificações">
  <Bell size={20} />
</button>

// Ícone decorativo – usar aria-hidden
<span aria-hidden="true"><Star size={16} /></span>`}
        language="tsx"
      />

      {/* Grid */}
      <SectionHeader id="grid" title="Grid e Espaçamento" description="Sistema de grid responsivo com suporte a 16, 12, 8 e 4 colunas para desktop, tablet e mobile, com exemplos práticos para dashboards." />

      <GridSection />

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
        <div className="space-y-2 mb-6">
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

        <h4 className="text-sm font-semibold mb-6">Exemplos Práticos</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Exemplo 1: Entrada Suave */}
          <div className="p-5 border border-border rounded-xl bg-muted/20">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xs font-bold uppercase tracking-wider">01. Entrada Suave</h5>
              <button 
                onClick={() => setKey1(prev => prev + 1)}
                className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded font-bold hover:bg-primary/20 transition-colors"
              >
                Reiniciar
              </button>
            </div>
            <motion.div 
              key={key1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-card p-4 rounded-lg border border-border shadow-sm"
            >
              <div className="h-3 w-1/3 bg-primary/20 rounded mb-2" />
              <div className="h-3 w-full bg-muted rounded mb-1" />
              <div className="h-3 w-2/3 bg-muted rounded" />
            </motion.div>
            <p className="text-[10px] text-muted-foreground mt-3 italic">Use para carregar novos blocos de conteúdo ou seções da página.</p>
          </div>

          {/* Exemplo 2: Micro-interação */}
          <div className="p-5 border border-border rounded-xl bg-muted/20">
            <h5 className="text-xs font-bold uppercase tracking-wider mb-4">02. Micro-interação</h5>
            <div className="flex flex-col items-center justify-center gap-4 h-[100px]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-xs font-bold shadow-lg shadow-primary/20"
              >
                Pressione-me
              </motion.button>
              <motion.div
                whileHover={{ rotate: 5 }}
                className="text-[10px] text-muted-foreground flex items-center gap-1 cursor-help"
              >
                Passe o mouse para feedback <Info size={12} />
              </motion.div>
            </div>
            <p className="text-[10px] text-muted-foreground mt-3 italic">Feedback tátil para botões e elementos clicáveis.</p>
          </div>

          {/* Exemplo 3: Lista em Cascata */}
          <div className="p-5 border border-border rounded-xl bg-muted/20">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xs font-bold uppercase tracking-wider">03. Lista em Cascata</h5>
              <button 
                onClick={() => setKey3(prev => prev + 1)}
                className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded font-bold hover:bg-primary/20 transition-colors"
              >
                Reiniciar
              </button>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`${key3}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-2 bg-card rounded border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <div className="h-2 flex-1 bg-muted rounded" />
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground mt-3 italic">Use para carregar múltiplos itens (tabelas, cards, menus).</p>
          </div>

          {/* Exemplo 4: Atenção/Estado */}
          <div className="p-5 border border-border rounded-xl bg-muted/20">
            <h5 className="text-xs font-bold uppercase tracking-wider mb-4">04. Feedback de Estado</h5>
            <div className="flex items-center justify-center h-[100px] gap-8">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-error/20 rounded-full"
                />
                <div className="relative bg-error text-white p-3 rounded-full">
                  <Bell size={20} />
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="bg-warning/20 border border-warning/30 p-2 rounded text-[10px] font-bold text-warning"
              >
                Ação pendente
              </motion.div>
            </div>
            <p className="text-[10px] text-muted-foreground mt-3 italic">Destaque para elementos que exigem ação imediata do usuário.</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border">
          <h4 className="text-sm font-semibold mb-2">Easings</h4>
          <p className="text-xs text-muted-foreground">
            Use <code className="bg-muted px-1 rounded">ease-out</code> para entradas, <code className="bg-muted px-1 rounded">ease-in</code> para saídas e <code className="bg-muted px-1 rounded">ease-in-out</code> para transições contínuas.
          </p>
        </div>
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
