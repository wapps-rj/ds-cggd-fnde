import { PageHeader, SectionHeader, CodeBlock } from "@/components/DSComponents";

const tokenGroups = [
  {
    id: "cores",
    title: "Cores",
    tokens: [
      { name: "--fnde-blue", value: "207 63% 20%", preview: "#0D3857" },
      { name: "--fnde-orange", value: "34 82% 47%", preview: "#D98217" },
      { name: "--background", value: "210 20% 98%", preview: "#F7F8FA" },
      { name: "--foreground", value: "207 63% 12%", preview: "#0E2233" },
      { name: "--primary", value: "207 63% 20%", preview: "#0D3857" },
      { name: "--primary-foreground", value: "0 0% 100%", preview: "#FFFFFF" },
      { name: "--secondary", value: "34 82% 47%", preview: "#D98217" },
      { name: "--muted", value: "210 15% 93%", preview: "#ECEEF0" },
      { name: "--muted-foreground", value: "207 15% 45%", preview: "#627585" },
      { name: "--accent", value: "207 60% 96%", preview: "#EDF4FA" },
      { name: "--border", value: "210 20% 88%", preview: "#D8DCE2" },
      { name: "--success", value: "145 63% 32%", preview: "#3A8F5C" },
      { name: "--warning", value: "34 82% 47%", preview: "#D98217" },
      { name: "--error", value: "5 81% 47%", preview: "#D92E18" },
      { name: "--info", value: "207 60% 55%", preview: "#4C9CD6" },
    ],
  },
  {
    id: "tipografia",
    title: "Tipografia",
    tokens: [
      { name: "--text-xs", value: "0.75rem" },
      { name: "--text-sm", value: "0.875rem" },
      { name: "--text-base", value: "1rem" },
      { name: "--text-lg", value: "1.125rem" },
      { name: "--text-xl", value: "1.25rem" },
      { name: "--text-2xl", value: "1.5rem" },
      { name: "--text-3xl", value: "1.875rem" },
      { name: "--text-4xl", value: "2.25rem" },
      { name: "--font-light", value: "300" },
      { name: "--font-regular", value: "400" },
      { name: "--font-medium", value: "500" },
      { name: "--font-semibold", value: "600" },
      { name: "--font-bold", value: "700" },
      { name: "--leading-tight", value: "1.25" },
      { name: "--leading-normal", value: "1.5" },
      { name: "--leading-relaxed", value: "1.75" },
    ],
  },
  {
    id: "espacamento",
    title: "Espaçamento",
    tokens: [
      { name: "--space-1", value: "0.25rem (4px)" },
      { name: "--space-2", value: "0.5rem (8px)" },
      { name: "--space-3", value: "0.75rem (12px)" },
      { name: "--space-4", value: "1rem (16px)" },
      { name: "--space-5", value: "1.25rem (20px)" },
      { name: "--space-6", value: "1.5rem (24px)" },
      { name: "--space-8", value: "2rem (32px)" },
      { name: "--space-10", value: "2.5rem (40px)" },
      { name: "--space-12", value: "3rem (48px)" },
      { name: "--space-16", value: "4rem (64px)" },
      { name: "--space-20", value: "5rem (80px)" },
      { name: "--space-24", value: "6rem (96px)" },
    ],
  },
  {
    id: "sombras",
    title: "Sombras",
    tokens: [
      { name: "--shadow-xs", value: "0 1px 2px ..." },
      { name: "--shadow-sm", value: "0 1px 3px ..." },
      { name: "--shadow-md", value: "0 4px 6px ..." },
      { name: "--shadow-lg", value: "0 10px 15px ..." },
      { name: "--shadow-xl", value: "0 20px 25px ..." },
    ],
  },
  {
    id: "zindex",
    title: "Z-index",
    tokens: [
      { name: "--z-dropdown", value: "100" },
      { name: "--z-sticky", value: "200" },
      { name: "--z-overlay", value: "300" },
      { name: "--z-modal", value: "400" },
      { name: "--z-toast", value: "500" },
    ],
  },
  {
    id: "breakpoints",
    title: "Breakpoints",
    tokens: [
      { name: "--bp-sm", value: "640px" },
      { name: "--bp-md", value: "768px" },
      { name: "--bp-lg", value: "1024px" },
      { name: "--bp-xl", value: "1280px" },
    ],
  },
];

export default function TokensPage() {
  return (
    <div>
      <PageHeader
        title="Design Tokens"
        description="Tokens são CSS Custom Properties que definem os valores fundamentais do sistema. Use-os para garantir consistência visual em todos os produtos."
      />

      <CodeBlock
        title="Como usar tokens"
        code={`/* Uso direto em CSS */
.meu-componente {
  color: hsl(var(--primary));
  background: hsl(var(--background));
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  font-size: var(--text-sm);
  transition: all var(--duration-normal) var(--ease-default);
}

/* Com Tailwind (via tailwind.config.ts) */
<div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-sm" />`}
        language="css"
      />

      {tokenGroups.map(group => (
        <div key={group.id}>
          <SectionHeader id={group.id} title={group.title} />
          <div className="fnde-card mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-xs">Token</th>
                    <th className="text-left py-2 pr-4 font-semibold text-xs">Valor</th>
                    {group.tokens[0] && 'preview' in group.tokens[0] && (
                      <th className="text-left py-2 font-semibold text-xs">Preview</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {group.tokens.map(t => (
                    <tr key={t.name} className="border-b border-border last:border-0">
                      <td className="py-2 pr-4">
                        <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{t.name}</code>
                      </td>
                      <td className="py-2 pr-4 text-muted-foreground text-xs">{t.value}</td>
                      {'preview' in t && t.preview && (
                        <td className="py-2">
                          <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: t.preview as string }} />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}

      <div className="fnde-card">
        <h4 className="font-semibold mb-2">Durations & Easings</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-xs">Token</th>
                <th className="text-left py-2 font-semibold text-xs">Valor</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "--duration-fast", value: "100ms" },
                { name: "--duration-normal", value: "200ms" },
                { name: "--duration-slow", value: "300ms" },
                { name: "--duration-slower", value: "500ms" },
                { name: "--ease-default", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
                { name: "--ease-in", value: "cubic-bezier(0.4, 0, 1, 1)" },
                { name: "--ease-out", value: "cubic-bezier(0, 0, 0.2, 1)" },
              ].map(t => (
                <tr key={t.name} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">{t.name}</code></td>
                  <td className="py-2 text-muted-foreground text-xs">{t.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
