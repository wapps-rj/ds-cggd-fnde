import { PageHeader, SectionHeader, CodeBlock } from "@/components/DSComponents";

const tokenGroups = [
  {
    id: "cores",
    title: "Cores",
    description: "As cores semânticas se adaptam automaticamente entre os modos claro e escuro. Sempre utilize os tokens em vez de valores fixos.",
    tokens: [
      { name: "--background", lightValue: "210 20% 98%", darkValue: "210 25% 8%", lightHex: "#F7F8FA", darkHex: "#111820" },
      { name: "--foreground", lightValue: "207 63% 12%", darkValue: "210 20% 90%", lightHex: "#0E2233", darkHex: "#E0E5EB" },
      { name: "--primary", lightValue: "207 63% 20%", darkValue: "207 55% 45%", lightHex: "#0D3857", darkHex: "#3A7DB8" },
      { name: "--primary-foreground", lightValue: "0 0% 100%", darkValue: "0 0% 100%", lightHex: "#FFFFFF", darkHex: "#FFFFFF" },
      { name: "--secondary", lightValue: "34 82% 47%", darkValue: "34 82% 52%", lightHex: "#D98217", darkHex: "#E89428" },
      { name: "--muted", lightValue: "210 15% 93%", darkValue: "210 18% 18%", lightHex: "#ECEEF0", darkHex: "#262D35" },
      { name: "--muted-foreground", lightValue: "207 15% 45%", darkValue: "210 15% 60%", lightHex: "#627585", darkHex: "#8A95A2" },
      { name: "--accent", lightValue: "207 60% 96%", darkValue: "207 40% 18%", lightHex: "#EDF4FA", darkHex: "#1C2E3D" },
      { name: "--card", lightValue: "0 0% 100%", darkValue: "210 22% 12%", lightHex: "#FFFFFF", darkHex: "#181F27" },
      { name: "--border", lightValue: "210 20% 88%", darkValue: "210 18% 22%", lightHex: "#D8DCE2", darkHex: "#2E353D" },
      { name: "--success", lightValue: "145 63% 32%", darkValue: "145 55% 42%", lightHex: "#3A8F5C", darkHex: "#4BA96E" },
      { name: "--warning", lightValue: "34 82% 47%", darkValue: "34 75% 52%", lightHex: "#D98217", darkHex: "#E09632" },
      { name: "--error", lightValue: "5 81% 47%", darkValue: "5 70% 55%", lightHex: "#D92E18", darkHex: "#D4543F" },
      { name: "--info", lightValue: "207 60% 55%", darkValue: "207 55% 55%", lightHex: "#4C9CD6", darkHex: "#5199CA" },
    ],
  },
  {
    id: "tipografia",
    title: "Tipografia",
    tokens: [
      { name: "--text-xs", value: "0.75rem (12px)" },
      { name: "--text-sm", value: "0.875rem (14px)" },
      { name: "--text-base", value: "1rem (16px)" },
      { name: "--text-lg", value: "1.125rem (18px)" },
      { name: "--text-xl", value: "1.25rem (20px)" },
      { name: "--text-2xl", value: "1.5rem (24px)" },
      { name: "--text-3xl", value: "1.875rem (30px)" },
      { name: "--text-4xl", value: "2.25rem (36px)" },
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
    description: "As sombras se adaptam automaticamente ao tema. No modo escuro, usam opacidades mais altas para manter a percepção de profundidade.",
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
        description="Tokens são CSS Custom Properties que definem os valores fundamentais do sistema. Todos os tokens possuem variantes para modo claro e escuro."
      />

      <CodeBlock
        title="Como usar tokens"
        code={`/* Uso direto em CSS — funciona em ambos os temas automaticamente */
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
<div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-sm" />

/* Ativar dark mode */
<html class="dark">  <!-- Adiciona classe .dark no root -->`}
        language="css"
      />

      {/* Dark mode explanation */}
      <div className="fnde-card mb-8">
        <h3 className="font-semibold mb-2">Como funciona o Dark Mode</h3>
        <p className="text-sm text-muted-foreground mb-3">
          O sistema utiliza a estratégia <code className="bg-muted px-1.5 py-0.5 rounded text-xs">class</code> do Tailwind. 
          Quando a classe <code className="bg-muted px-1.5 py-0.5 rounded text-xs">.dark</code> é adicionada ao <code className="bg-muted px-1.5 py-0.5 rounded text-xs">&lt;html&gt;</code>, 
          todos os tokens CSS são automaticamente substituídos pelas variantes escuras.
        </p>
        <p className="text-sm text-muted-foreground">
          Não é necessário alterar classes nos componentes. Basta usar os tokens semânticos 
          (<code className="bg-muted px-1.5 py-0.5 rounded text-xs">bg-background</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">text-foreground</code>, etc.) 
          e a adaptação é automática.
        </p>
      </div>

      {tokenGroups.map(group => (
        <div key={group.id}>
          <SectionHeader id={group.id} title={group.title} description={'description' in group ? (group as any).description : undefined} />
          <div className="fnde-card mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-xs">Token</th>
                    {'lightValue' in (group.tokens[0] || {}) ? (
                      <>
                        <th className="text-left py-2 pr-4 font-semibold text-xs">Light</th>
                        <th className="text-left py-2 pr-4 font-semibold text-xs">Dark</th>
                        <th className="text-left py-2 font-semibold text-xs">Preview</th>
                      </>
                    ) : (
                      <th className="text-left py-2 font-semibold text-xs">Valor</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {group.tokens.map((t: any) => (
                    <tr key={t.name} className="border-b border-border last:border-0">
                      <td className="py-2 pr-4">
                        <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{t.name}</code>
                      </td>
                      {t.lightValue ? (
                        <>
                          <td className="py-2 pr-4 text-muted-foreground text-xs">{t.lightValue}</td>
                          <td className="py-2 pr-4 text-muted-foreground text-xs">{t.darkValue}</td>
                          <td className="py-2">
                            <div className="flex gap-1">
                              <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: t.lightHex }} title={`Light: ${t.lightHex}`} />
                              <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: t.darkHex }} title={`Dark: ${t.darkHex}`} />
                            </div>
                          </td>
                        </>
                      ) : (
                        <td className="py-2 text-muted-foreground text-xs">{t.value}</td>
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
