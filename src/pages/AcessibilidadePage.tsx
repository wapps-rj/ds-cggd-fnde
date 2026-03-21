import { PageHeader, SectionHeader, CodeBlock } from "@/components/DSComponents";

export default function AcessibilidadePage() {
  return (
    <div>
      <PageHeader title="Acessibilidade" description="Todo produto digital do FNDE deve nascer acessível. Seguimos as diretrizes WCAG 2.1 nível AA como padrão mínimo." />

      <SectionHeader id="contraste" title="Contraste" description="Textos devem atender ao contraste mínimo AA do WCAG 2.1." />
      <div className="fnde-card mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-20 h-10 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#0D3857", color: "#fff" }}>AA ✓</div>
            <p className="text-sm text-muted-foreground">Texto branco sobre Azul FNDE — Ratio 10.2:1</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-20 h-10 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#D98217", color: "#fff" }}>AA ✓</div>
            <p className="text-sm text-muted-foreground">Texto branco sobre Laranja FNDE — Ratio 3.5:1 (somente texto grande)</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-20 h-10 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#D98217", color: "#0D3857" }}>AAA ✓</div>
            <p className="text-sm text-muted-foreground">Azul sobre Laranja — Ratio 4.1:1</p>
          </div>
        </div>
      </div>

      <SectionHeader id="foco" title="Foco Visível" description="Todo elemento interativo deve ter um indicador de foco visível para navegação por teclado." />
      <div className="fnde-card mb-8">
        <div className="flex flex-wrap gap-4 mb-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Clique ou use Tab
          </button>
          <input placeholder="Campo com foco visível" className="border border-input rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" />
        </div>
        <CodeBlock code={`/* Padrão de foco visível */
.interactive-element:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)),
              0 0 0 4px hsl(var(--ring));
}`} language="css" />
      </div>

      <SectionHeader id="teclado" title="Navegação por Teclado" />
      <div className="fnde-card mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-xs">Tecla</th>
              <th className="text-left py-2 font-semibold text-xs">Ação</th>
            </tr></thead>
            <tbody>
              {[
                { key: "Tab", action: "Navegar para o próximo elemento focável" },
                { key: "Shift + Tab", action: "Navegar para o elemento focável anterior" },
                { key: "Enter / Space", action: "Ativar botão ou link" },
                { key: "Escape", action: "Fechar modal, dropdown ou tooltip" },
                { key: "Setas ↑↓", action: "Navegar entre opções em menus e selects" },
                { key: "Setas ←→", action: "Navegar entre abas (tabs)" },
                { key: "Home / End", action: "Ir para primeiro/último item" },
              ].map(k => (
                <tr key={k.key} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4"><kbd className="bg-muted px-2 py-0.5 rounded text-xs font-mono">{k.key}</kbd></td>
                  <td className="py-2 text-muted-foreground text-xs">{k.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <SectionHeader id="semantica" title="Semântica HTML" />
      <div className="fnde-card mb-8">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Use heading hierarchy correta (h1 → h2 → h3, sem pular níveis)</li>
          <li>• Use <code className="bg-muted px-1 rounded text-xs">&lt;nav&gt;</code>, <code className="bg-muted px-1 rounded text-xs">&lt;main&gt;</code>, <code className="bg-muted px-1 rounded text-xs">&lt;aside&gt;</code>, <code className="bg-muted px-1 rounded text-xs">&lt;footer&gt;</code> para landmarks</li>
          <li>• Labels associadas a inputs via <code className="bg-muted px-1 rounded text-xs">htmlFor</code> / <code className="bg-muted px-1 rounded text-xs">id</code></li>
          <li>• Tabelas com <code className="bg-muted px-1 rounded text-xs">&lt;caption&gt;</code>, <code className="bg-muted px-1 rounded text-xs">&lt;thead&gt;</code>, <code className="bg-muted px-1 rounded text-xs">&lt;th scope&gt;</code></li>
          <li>• Imagens com <code className="bg-muted px-1 rounded text-xs">alt</code> descritivo (ou vazio para decorativas)</li>
          <li>• Listas com <code className="bg-muted px-1 rounded text-xs">&lt;ul&gt;</code>/<code className="bg-muted px-1 rounded text-xs">&lt;ol&gt;</code>/<code className="bg-muted px-1 rounded text-xs">&lt;li&gt;</code></li>
        </ul>
      </div>

      <SectionHeader id="aria" title="ARIA" />
      <div className="fnde-card mb-8">
        <h4 className="text-sm font-semibold mb-3">Padrões ARIA obrigatórios por componente</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-xs">Componente</th>
              <th className="text-left py-2 font-semibold text-xs">Atributos ARIA</th>
            </tr></thead>
            <tbody>
              {[
                { comp: "Accordion", aria: "aria-expanded, aria-controls" },
                { comp: "Modal", aria: "aria-modal, aria-labelledby, role='dialog'" },
                { comp: "Tabs", aria: "role='tablist', role='tab', role='tabpanel', aria-selected" },
                { comp: "Switch", aria: "role='switch', aria-checked" },
                { comp: "Toast", aria: "role='status', aria-live='polite'" },
                { comp: "Tooltip", aria: "role='tooltip', aria-describedby" },
                { comp: "Breadcrumb", aria: "aria-label='Breadcrumb', aria-current='page'" },
                { comp: "Alert", aria: "role='alert'" },
              ].map(a => (
                <tr key={a.comp} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4 font-medium text-xs">{a.comp}</td>
                  <td className="py-2 text-muted-foreground text-xs"><code>{a.aria}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <SectionHeader id="alvos" title="Alvos Clicáveis" />
      <div className="fnde-card">
        <p className="text-sm text-muted-foreground mb-3">
          Todo alvo clicável deve ter no mínimo <strong>44×44 pixels</strong> de área tocável, conforme WCAG 2.5.8. Isso inclui botões, links, checkboxes e áreas de ação em dispositivos touch.
        </p>
        <p className="text-sm text-muted-foreground">
          Mensagens de erro devem ser associadas ao campo via <code className="bg-muted px-1 rounded text-xs">aria-describedby</code> e anunciadas com <code className="bg-muted px-1 rounded text-xs">role="alert"</code>.
        </p>
      </div>
    </div>
  );
}
