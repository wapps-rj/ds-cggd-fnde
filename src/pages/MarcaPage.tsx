import { PageHeader, SectionHeader } from "@/components/DSComponents";
import fndeLogoHorizontal from "@/assets/fnde-logo-horizontal.svg";
import fndeLogoVertical from "@/assets/fnde-logo-vertical.svg";
import fndeZonaSeguranca from "@/assets/fnde-zona-seguranca.png";
import fndeLogoHorizontal2 from "@/assets/fnde-logo-horizontal-2.svg";
import fndeLogoVertical2 from "@/assets/fnde-logo-vertical-2.svg";

export default function MarcaPage() {
  return (
    <div>
      <PageHeader title="Marca FNDE" description="Diretrizes de uso da marca FNDE conforme o Guia da Marca 2024. A identidade visual reforça o compromisso com a educação pública de qualidade." />

      <SectionHeader id="identidade" title="Identidade Visual" description="A marca FNDE foi construída com elementos que remetem à educação, evolução, livro, leitura e a bandeira do Brasil." />
      <div className="fnde-card mb-8">
        <p className="text-sm text-muted-foreground mb-4">O isotipo (símbolo) utiliza elementos da bandeira do Brasil, livro aberto, estrelas do brasão da República e referências à leitura e aprendizado, reforçando o caráter de nacionalidade.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border rounded-lg p-6 bg-background flex items-center justify-center">
            <img src={fndeLogoHorizontal} alt="Logo FNDE versão completa horizontal" className="max-h-20 object-contain" />
          </div>
          <div className="border border-border rounded-lg p-6 bg-background flex items-center justify-center">
            <img src={fndeLogoVertical} alt="Logo FNDE versão completa vertical" className="max-h-32 object-contain" />
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
          <img src={fndeZonaSeguranca} alt="Zona de segurança do logo FNDE" className="max-h-32 object-contain" loading="lazy" width={800} height={512} />
        </div>
        <p className="text-sm text-muted-foreground">A unidade X equivale à altura da esfera do símbolo. A zona de segurança utiliza X/2 em todos os lados.</p>
      </div>

      <SectionHeader id="reducao" title="Redução Mínima" description="Tamanhos mínimos para garantir a legibilidade da marca em diferentes meios de aplicação." />
      <div className="fnde-card mb-8">
        <p className="text-sm text-muted-foreground mb-6">A marca FNDE possui duas versões — completa (com descritivo) e simplificada (somente símbolo e sigla). Cada uma tem dimensões mínimas específicas para impressão e meio digital.</p>

        {/* Versão Completa */}
        <h4 className="text-sm font-semibold mb-4">Versão Completa (com descritivo)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-border rounded-lg p-6 bg-background">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Impressão</p>
            <div className="flex items-end gap-4 mb-4">
              <div className="border-2 border-dashed border-primary/30 rounded p-3 inline-flex items-center justify-center" style={{ minWidth: '160px' }}>
                <img src={fndeLogoHorizontal2} alt="Logo FNDE completa - tamanho mínimo impressão" className="h-8 object-contain" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm"><span className="font-semibold">Largura mínima:</span> 40mm</p>
              <p className="text-xs text-muted-foreground">Abaixo deste tamanho a legibilidade do descritivo fica comprometida.</p>
            </div>
          </div>
          <div className="border border-border rounded-lg p-6 bg-background">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Digital</p>
            <div className="flex items-end gap-4 mb-4">
              <div className="border-2 border-dashed border-primary/30 rounded p-3 inline-flex items-center justify-center" style={{ minWidth: '110px' }}>
                <img src={fndeLogoHorizontal2} alt="Logo FNDE completa - tamanho mínimo digital" className="h-6 object-contain" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm"><span className="font-semibold">Largura mínima:</span> 110px</p>
              <p className="text-xs text-muted-foreground">Para telas e interfaces digitais, garantindo nitidez em diferentes resoluções.</p>
            </div>
          </div>
        </div>

        {/* Versão Simplificada */}
        <h4 className="text-sm font-semibold mb-4">Versão Simplificada (símbolo + sigla)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6 bg-background">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Impressão</p>
            <div className="flex items-end gap-4 mb-4">
              <div className="border-2 border-dashed border-primary/30 rounded p-3 inline-flex items-center justify-center" style={{ minWidth: '92px' }}>
                <img src={fndeLogoVertical2} alt="Logo FNDE simplificada - tamanho mínimo impressão" className="h-12 object-contain" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm"><span className="font-semibold">Largura mínima:</span> 23mm</p>
              <p className="text-xs text-muted-foreground">Versão compacta para aplicações com espaço reduzido.</p>
            </div>
          </div>
          <div className="border border-border rounded-lg p-6 bg-background">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Digital</p>
            <div className="flex items-end gap-4 mb-4">
              <div className="border-2 border-dashed border-primary/30 rounded p-3 inline-flex items-center justify-center" style={{ minWidth: '65px' }}>
                <img src={fndeLogoVertical2} alt="Logo FNDE simplificada - tamanho mínimo digital" className="h-10 object-contain" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm"><span className="font-semibold">Largura mínima:</span> 65px</p>
              <p className="text-xs text-muted-foreground">Para ícones, favicons e aplicações em tamanho reduzido.</p>
            </div>
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
