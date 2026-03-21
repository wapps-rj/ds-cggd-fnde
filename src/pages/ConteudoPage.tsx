import { PageHeader, SectionHeader } from "@/components/DSComponents";

export default function ConteudoPage() {
  return (
    <div>
      <PageHeader title="Conteúdo e Linguagem" description="Diretrizes de escrita para produtos digitais do FNDE. Como nos comunicamos reflete quem somos." />

      <SectionHeader id="voz" title="Voz da Marca" description="A voz da marca é constante e reflete nossa personalidade institucional." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          { title: "Íntegros", desc: "Transparência e honestidade em cada interação." },
          { title: "Parceiros", desc: "Proximidade com municípios, estados e cidadãos." },
          { title: "Acessíveis", desc: "Linguagem clara, canais abertos, portas abertas." },
          { title: "Inovadores", desc: "Tecnologia e práticas modernas a serviço da educação." },
        ].map(v => (
          <div key={v.title} className="fnde-card">
            <h4 className="font-semibold text-sm mb-1">{v.title}</h4>
            <p className="text-xs text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>

      <SectionHeader id="tom" title="Tom de Voz" description="O tom pode variar conforme o contexto, mas sempre dentro da personalidade FNDE." />
      <div className="fnde-card mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          {["Modernos", "Atenciosos", "Descontraídos", "Atentos"].map(t => (
            <div key={t} className="bg-accent rounded-lg p-4">
              <p className="font-semibold text-sm">{t}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionHeader id="territorio" title="Território de Palavras" description="Expressões que fazem parte do universo comunicacional do FNDE." />
      <div className="fnde-card mb-8">
        <div className="flex flex-wrap gap-2">
          {["Transformando vidas", "Criando possibilidades", "Educação de qualidade", "Fazer acontecer", "Compromisso com a educação", "Transparência e integridade", "Inclusão por meio da educação", "Dedicação total", "Contínua evolução"].map(w => (
            <span key={w} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary/5 text-primary border border-primary/10">{w}</span>
          ))}
        </div>
      </div>

      <SectionHeader id="boas-praticas" title="Boas Práticas de Escrita" />
      <div className="space-y-4 mb-8">
        {[
          { title: "Títulos", good: "Consulte os programas disponíveis", bad: "CLIQUE AQUI PARA VER OS PROGRAMAS!!!" },
          { title: "Labels", good: "Nome completo", bad: "Insira aqui o seu nome completo, por favor" },
          { title: "Mensagens de erro", good: "Informe um e-mail válido (ex: nome@email.com)", bad: "Erro! Campo inválido!" },
          { title: "Mensagens de sucesso", good: "Cadastro realizado. Você receberá uma confirmação por e-mail.", bad: "Sucesso!!!" },
          { title: "Botões", good: "Salvar rascunho", bad: "Clique aqui" },
        ].map(bp => (
          <div key={bp.title} className="fnde-card">
            <h4 className="font-semibold text-sm mb-3">{bp.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-success-bg rounded-lg p-3"><p className="text-xs font-medium text-success mb-1">✓ Recomendado</p><p className="text-sm">{bp.good}</p></div>
              <div className="bg-error-bg rounded-lg p-3"><p className="text-xs font-medium text-error mb-1">✗ Evite</p><p className="text-sm">{bp.bad}</p></div>
            </div>
          </div>
        ))}
      </div>

      <SectionHeader id="linguagem-simples" title="Linguagem Simples" />
      <div className="fnde-card">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Prefira frases curtas e diretas</li>
          <li>• Evite jargões técnicos desnecessários</li>
          <li>• Use voz ativa: "Preencha o formulário" em vez de "O formulário deve ser preenchido"</li>
          <li>• Escreva para quem lê, não para quem escreve</li>
          <li>• Seja inclusivo na linguagem</li>
          <li>• Quando necessário usar termos técnicos, explique-os brevemente</li>
        </ul>
      </div>
    </div>
  );
}
