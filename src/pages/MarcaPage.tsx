import { PageHeader, SectionHeader } from "@/components/DSComponents";

export default function MarcaPage() {
  return (
    <div>
      <PageHeader title="Marca FNDE" description="Diretrizes de uso da marca FNDE conforme o Guia da Marca 2024. A identidade visual reforça o compromisso com a educação pública de qualidade." />

      <SectionHeader id="identidade" title="Identidade Visual" description="A marca FNDE foi construída com elementos que remetem à educação, evolução, livro, leitura e a bandeira do Brasil." />
      <div className="fnde-card mb-8">
        <p className="text-sm text-muted-foreground mb-4">O isotipo (símbolo) utiliza elementos da bandeira do Brasil, livro aberto, estrelas do brasão da República e referências à leitura e aprendizado, reforçando o caráter de nacionalidade.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border rounded-lg p-6 bg-background flex items-center justify-center">
            <img src="/images/fnde-logo-horizontal.jpg" alt="Logo FNDE versão completa horizontal" className="max-h-20 object-contain" />
          </div>
          <div className="border border-border rounded-lg p-6 bg-background flex items-center justify-center">
            <img src="/images/fnde-logo-vertical.jpg" alt="Logo FNDE versão completa vertical" className="max-h-32 object-contain" />
          </div>
        </div>
      </div>

      <SectionHeader id="versoes" title="Versões do Logo" description="A marca possui versões horizontal e vertical, completa e simplificada." />
      <div className="fnde-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold mb-2">Versão simplificada horizontal</p>
            <div className="border border-border rounded-lg p-6 bg-background flex items-center justify-center">
              <img src="/images/fnde-logo-simplificada.png" alt="Logo FNDE simplificada" className="max-h-16 object-contain" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold mb-2">Construção</p>
            <div className="border border-border rounded-lg p-6 bg-background flex items-center justify-center">
              <img src="/images/fnde-logo-construcao.png" alt="Construção do logo FNDE" className="max-h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <SectionHeader id="zona-seguranca" title="Zona de Segurança" description="Área mínima de respiro ao redor do logo que não deve ser invadida por outros elementos." />
      <div className="fnde-card mb-8">
        <div className="border border-border rounded-lg p-6 bg-background flex items-center justify-center mb-4">
          <img src="/images/fnde-zona-seguranca.jpg" alt="Zona de segurança do logo FNDE" className="max-h-32 object-contain" />
        </div>
        <p className="text-sm text-muted-foreground">A unidade X equivale à altura da esfera do símbolo. A zona de segurança utiliza X/2 em todos os lados.</p>
      </div>

      <SectionHeader id="reducao" title="Redução Mínima" />
      <div className="fnde-card mb-8">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="border border-border rounded-lg p-4">
            <p className="text-sm font-semibold">Impressão</p>
            <p className="text-xs text-muted-foreground">Largura mínima: 40mm (completa) / 23mm (simplificada)</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <p className="text-sm font-semibold">Digital</p>
            <p className="text-xs text-muted-foreground">Largura mínima: 110px (completa) / 65px (simplificada)</p>
          </div>
        </div>
      </div>

      <SectionHeader id="usos-incorretos" title="Usos Incorretos" description="Nunca aplique o logo de formas que comprometam sua legibilidade ou integridade." />
      <div className="fnde-card mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["Fundos que prejudiquem visibilidade", "Tamanho menor que o mínimo", "De forma rotacionada", "Cores fora do padrão cromático", "Fundos sem contraste", "Distorcida e fora de proporção"].map(item => (
            <div key={item} className="bg-error-bg border border-error/20 rounded-lg p-3 text-center">
              <span className="text-error text-lg font-bold block mb-1">✗</span>
              <p className="text-xs text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionHeader id="paleta" title="Padrão Cromático" />
      <div className="fnde-card mb-8">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="h-20 rounded-lg mb-2" style={{ backgroundColor: "#0D3857" }} />
            <p className="font-semibold text-sm">Azul FNDE</p>
            <p className="text-xs text-muted-foreground">#0D3857 · C100 M75 Y40 K33 · RGB(13, 56, 87)</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="h-20 rounded-lg mb-2" style={{ backgroundColor: "#D98217" }} />
            <p className="font-semibold text-sm">Laranja FNDE</p>
            <p className="text-xs text-muted-foreground">#D98217 · C13 M55 Y97 K2 · RGB(217, 130, 23)</p>
          </div>
        </div>
      </div>

      <SectionHeader id="govbr" title="Relação com gov.br" />
      <div className="fnde-card">
        <p className="text-sm text-muted-foreground mb-3">O FNDE segue a aplicação na "trinca" conforme orientação do Manual de Identidade do gov.br, mantendo o espaçamento e hierarquia visual exigidos.</p>
        <p className="text-sm text-muted-foreground">A marca FNDE é sempre acompanhada da marca do Ministério da Educação e do Governo Federal quando em comunicação institucional externa.</p>
      </div>
    </div>
  );
}
