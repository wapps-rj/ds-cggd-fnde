import { useState } from "react";
import { PageHeader, SectionHeader, ComponentPreview, CodeBlock } from "@/components/DSComponents";
import {
  AlertTriangle, Check, ChevronDown, ChevronRight, Copy, Download,
  Eye, Home, Info, Loader2, Mail, Search, Upload, X, FileText, Inbox,
  ArrowLeft, ArrowRight
} from "lucide-react";

export default function ComponentesPage() {
  return (
    <div>
      <PageHeader
        title="Componentes"
        description="Biblioteca de componentes prontos para uso. Cada componente inclui preview, código, variantes e diretrizes de uso e acessibilidade."
      />

      {/* BUTTON */}
      <SectionHeader id="botao" title="Botão" description="Elemento interativo para ações primárias, secundárias e terciárias." />
      <ButtonSection />

      {/* INPUT */}
      <SectionHeader id="input" title="Campo de Texto" description="Entrada de dados de texto pelo usuário." />
      <InputSection />

      {/* SELECT */}
      <SectionHeader id="select" title="Select" description="Seleção de uma opção em uma lista." />
      <SelectSection />

      {/* CHECKBOX / RADIO */}
      <SectionHeader id="checkbox" title="Checkbox e Radio" description="Seleção de uma ou múltiplas opções." />
      <CheckboxSection />

      {/* SWITCH */}
      <SectionHeader id="switch" title="Switch" description="Alternância entre dois estados (ligado/desligado)." />
      <SwitchSection />

      {/* BADGE */}
      <SectionHeader id="badge" title="Badge / Tag" description="Elemento visual para categorização, status ou destaque." />
      <BadgeSection />

      {/* ALERT */}
      <SectionHeader id="alert" title="Alert" description="Mensagens de feedback contextual ao usuário." />
      <AlertSection />

      {/* CARD */}
      <SectionHeader id="card" title="Card" description="Container para agrupar informações relacionadas." />
      <CardSection />

      {/* TABLE */}
      <SectionHeader id="tabela" title="Tabela" description="Exibição de dados tabulares com semântica HTML correta." />
      <TableSection />

      {/* ACCORDION */}
      <SectionHeader id="accordion" title="Accordion" description="Seções colapsáveis para organizar conteúdo extenso." />
      <AccordionSection />

      {/* TABS */}
      <SectionHeader id="tabs" title="Tabs" description="Navegação entre painéis de conteúdo na mesma área." />
      <TabsSection />

      {/* MODAL */}
      <SectionHeader id="modal" title="Modal" description="Diálogo que exige atenção ou ação do usuário." />
      <ModalSection />

      {/* TOAST */}
      <SectionHeader id="toast" title="Toast / Notificação" description="Feedback temporário não-bloqueante." />
      <ToastSection />

      {/* BREADCRUMB */}
      <SectionHeader id="breadcrumb" title="Breadcrumb" description="Navegação hierárquica que mostra a localização atual." />
      <BreadcrumbSection />

      {/* PAGINATION */}
      <SectionHeader id="paginacao" title="Paginação" description="Navegação entre páginas de resultados." />
      <PaginationSection />

      {/* TOOLTIP */}
      <SectionHeader id="tooltip" title="Tooltip" description="Informação contextual exibida ao passar o mouse." />
      <TooltipSection />

      {/* SKELETON */}
      <SectionHeader id="skeleton" title="Skeleton Loading" description="Placeholder visual durante o carregamento de conteúdo." />
      <SkeletonSection />

      {/* SPINNER */}
      <SectionHeader id="spinner" title="Spinner / Loading" description="Indicador de carregamento." />
      <SpinnerSection />

      {/* EMPTY STATE */}
      <SectionHeader id="empty-state" title="Empty State" description="Estado vazio quando não há dados para exibir." />
      <EmptyStateSection />
    </div>
  );
}

/* ==================== BUTTON ==================== */
function ButtonSection() {
  return (
    <ComponentPreview
      title="Variantes de botão"
      description="Botões primários, secundários, outline, ghost e destructive em múltiplos tamanhos."
      whenToUse={["Ações principais e secundárias", "Submissão de formulários", "Navegação importante"]}
      whenNotToUse={["Navegação simples (use links)", "Ações dentro de texto corrido"]}
      accessibility={["Sempre ter texto acessível ou aria-label", "Foco visível em navegação por teclado", "Estados disabled com opacity e pointer-events-none"]}
      code={`<!-- Primário -->
<button class="btn btn-primary">Confirmar</button>

<!-- Secundário -->
<button class="btn btn-secondary">Ação secundária</button>

<!-- Outline -->
<button class="btn btn-outline">Cancelar</button>

<!-- Ghost -->
<button class="btn btn-ghost">Fechar</button>

<!-- Destructive -->
<button class="btn btn-destructive">Excluir</button>

<!-- Com ícone -->
<button class="btn btn-primary">
  <svg>...</svg> Download
</button>

<!-- Desabilitado -->
<button class="btn btn-primary" disabled>Aguarde</button>`}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity">
            Primário
          </button>
          <button className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity">
            Secundário
          </button>
          <button className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-4 py-2 rounded text-sm font-medium hover:bg-muted transition-colors">
            Outline
          </button>
          <button className="inline-flex items-center gap-2 text-foreground px-4 py-2 rounded text-sm font-medium hover:bg-muted transition-colors">
            Ghost
          </button>
          <button className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity">
            Excluir
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded text-xs font-medium">
            Pequeno
          </button>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium">
            Médio
          </button>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded text-base font-medium">
            Grande
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium">
            <Download size={16} /> Download
          </button>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium">
            <Loader2 size={16} className="animate-spin" /> Carregando...
          </button>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium opacity-50 cursor-not-allowed" disabled>
            Desabilitado
          </button>
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== INPUT ==================== */
function InputSection() {
  return (
    <ComponentPreview
      title="Campo de texto e Textarea"
      description="Inputs, campos com label, campos com erro e textarea."
      whenToUse={["Coleta de dados textuais", "Formulários"]}
      whenNotToUse={["Seleção entre opções predefinidas (use Select ou Radio)"]}
      accessibility={["Label associado via htmlFor/id", "Mensagens de erro com aria-describedby", "Placeholder não substitui label"]}
      code={`<div class="form-group">
  <label for="nome">Nome completo</label>
  <input type="text" id="nome" placeholder="Digite seu nome" />
</div>

<div class="form-group form-group-error">
  <label for="email">E-mail</label>
  <input type="email" id="email" aria-describedby="email-error" />
  <span id="email-error" role="alert">E-mail inválido</span>
</div>

<div class="form-group">
  <label for="obs">Observações</label>
  <textarea id="obs" rows="3"></textarea>
</div>`}
    >
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1.5">Nome completo</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">E-mail</label>
          <input
            type="email"
            placeholder="exemplo@fnde.gov.br"
            className="w-full border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
          />
          <p className="text-xs text-muted-foreground mt-1">Informe seu e-mail institucional</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5 text-error">Campo com erro</label>
          <input
            type="text"
            defaultValue="valor incorreto"
            className="w-full border-2 border-error rounded px-3 py-2 text-sm bg-error-bg focus:outline-none focus:ring-2 focus:ring-error transition-colors"
            aria-describedby="field-error"
          />
          <p id="field-error" role="alert" className="text-xs text-error mt-1">Este campo é obrigatório</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Observações</label>
          <textarea
            rows={3}
            placeholder="Descreva aqui..."
            className="w-full border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-y"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Busca com ícone</label>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar..."
              className="w-full border border-input rounded pl-9 pr-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            />
          </div>
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== SELECT ==================== */
function SelectSection() {
  return (
    <ComponentPreview
      title="Select"
      description="Campo de seleção nativo com estilos consistentes."
      whenToUse={["Escolha entre 4+ opções", "Quando o espaço é limitado"]}
      whenNotToUse={["Menos de 4 opções (use Radio)", "Seleção múltipla complexa"]}
      accessibility={["Label associado via htmlFor", "Use optgroup para agrupar opções longas"]}
      code={`<div class="form-group">
  <label for="estado">Estado</label>
  <select id="estado">
    <option value="">Selecione...</option>
    <option>Distrito Federal</option>
    <option>São Paulo</option>
  </select>
</div>`}
    >
      <div className="max-w-md">
        <label className="block text-sm font-medium mb-1.5">Estado</label>
        <select className="w-full border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors">
          <option value="">Selecione um estado...</option>
          <option>Distrito Federal</option>
          <option>São Paulo</option>
          <option>Rio de Janeiro</option>
          <option>Minas Gerais</option>
          <option>Bahia</option>
        </select>
      </div>
    </ComponentPreview>
  );
}

/* ==================== CHECKBOX / RADIO ==================== */
function CheckboxSection() {
  return (
    <ComponentPreview
      title="Checkbox e Radio"
      description="Seleção única (radio) ou múltipla (checkbox)."
      whenToUse={["Seleção de uma ou mais opções de uma lista curta"]}
      accessibility={["Cada input precisa de label associado", "Agrupar com fieldset e legend"]}
      code={`<fieldset>
  <legend>Perfil de acesso</legend>
  <label><input type="checkbox" /> Administrador</label>
  <label><input type="checkbox" /> Editor</label>
</fieldset>

<fieldset>
  <legend>Tipo de relatório</legend>
  <label><input type="radio" name="tipo" /> Mensal</label>
  <label><input type="radio" name="tipo" /> Trimestral</label>
</fieldset>`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <fieldset>
          <legend className="text-sm font-semibold mb-2">Checkboxes</legend>
          <div className="space-y-2">
            {["Administrador", "Editor", "Visualizador"].map(opt => (
              <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border accent-primary" />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold mb-2">Radio buttons</legend>
          <div className="space-y-2">
            {["Mensal", "Trimestral", "Anual"].map(opt => (
              <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="tipo" className="w-4 h-4 border-border accent-primary" />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </ComponentPreview>
  );
}

/* ==================== SWITCH ==================== */
function SwitchSection() {
  const [on, setOn] = useState(false);
  return (
    <ComponentPreview
      title="Switch"
      description="Toggle entre ligado e desligado."
      whenToUse={["Configurações on/off", "Ativação imediata de funcionalidade"]}
      accessibility={["Use role='switch' e aria-checked", "Forneça label descritivo"]}
      code={`<label class="switch-label">
  <button role="switch" aria-checked="false" class="switch">
    <span class="switch-thumb"></span>
  </button>
  Notificações por e-mail
</label>`}
    >
      <label className="flex items-center gap-3 cursor-pointer">
        <button
          role="switch"
          aria-checked={on}
          onClick={() => setOn(!on)}
          className={`relative w-11 h-6 rounded-full transition-colors ${on ? "bg-primary" : "bg-muted"}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-card rounded-full shadow transition-transform ${on ? "translate-x-5" : ""}`} />
        </button>
        <span className="text-sm">Notificações por e-mail</span>
      </label>
    </ComponentPreview>
  );
}

/* ==================== BADGE ==================== */
function BadgeSection() {
  return (
    <ComponentPreview
      title="Badge / Tag"
      description="Indicadores de status, categorias ou contagens."
      whenToUse={["Status de itens", "Categorias", "Contadores"]}
      whenNotToUse={["Texto longo", "Ações clicáveis (use botão)"]}
      code={`<span class="badge badge-primary">Ativo</span>
<span class="badge badge-success">Concluído</span>
<span class="badge badge-warning">Pendente</span>
<span class="badge badge-error">Erro</span>
<span class="badge badge-info">Informação</span>`}
    >
      <div className="flex flex-wrap gap-2">
        <span className="fnde-badge-primary">Ativo</span>
        <span className="fnde-badge-secondary">Destaque</span>
        <span className="fnde-badge-success">Concluído</span>
        <span className="fnde-badge-warning">Pendente</span>
        <span className="fnde-badge-error">Erro</span>
        <span className="fnde-badge-info">Informação</span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-border text-foreground">Neutro</span>
      </div>
    </ComponentPreview>
  );
}

/* ==================== ALERT ==================== */
function AlertSection() {
  return (
    <ComponentPreview
      title="Alert"
      description="Mensagens de feedback: sucesso, atenção, erro e informação."
      whenToUse={["Feedback de ações", "Alertas de sistema", "Informações contextuais"]}
      accessibility={["Use role='alert' para mensagens urgentes", "Ícone + texto para não depender só de cor"]}
      code={`<div class="alert alert-success" role="alert">
  <svg>...</svg>
  <div>
    <strong>Sucesso!</strong>
    <p>Operação realizada com sucesso.</p>
  </div>
</div>`}
    >
      <div className="space-y-3">
        {[
          { icon: <Check size={18} />, title: "Sucesso", msg: "Operação realizada com sucesso.", cls: "border-l-4 border-success bg-success-bg" },
          { icon: <AlertTriangle size={18} />, title: "Atenção", msg: "Verifique os dados antes de prosseguir.", cls: "border-l-4 border-warning bg-warning-bg" },
          { icon: <X size={18} />, title: "Erro", msg: "Não foi possível completar a operação.", cls: "border-l-4 border-error bg-error-bg" },
          { icon: <Info size={18} />, title: "Informação", msg: "O prazo para envio termina em 30 dias.", cls: "border-l-4 border-info bg-info-bg" },
        ].map(a => (
          <div key={a.title} className={`flex gap-3 p-4 rounded-r-lg ${a.cls}`} role="alert">
            <span className="shrink-0 mt-0.5">{a.icon}</span>
            <div>
              <p className="text-sm font-semibold">{a.title}</p>
              <p className="text-xs text-muted-foreground">{a.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </ComponentPreview>
  );
}

/* ==================== CARD ==================== */
function CardSection() {
  return (
    <ComponentPreview
      title="Card"
      description="Container para agrupar informações relacionadas com visual limpo."
      whenToUse={["Agrupar conteúdo relacionado", "Listagem de itens", "Cards de indicadores"]}
      code={`<div class="card">
  <div class="card-header">
    <h3>Título do card</h3>
  </div>
  <div class="card-body">
    <p>Conteúdo do card</p>
  </div>
  <div class="card-footer">
    <button>Ação</button>
  </div>
</div>`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-4 border-b border-border">
            <h4 className="font-semibold text-sm">Card básico</h4>
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">Conteúdo do card com informações relevantes.</p>
          </div>
          <div className="p-4 border-t border-border bg-muted/30">
            <button className="text-xs text-primary font-medium hover:underline">Ver mais →</button>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 text-center">
          <p className="text-3xl font-bold text-primary">1.247</p>
          <p className="text-xs text-muted-foreground mt-1">Escolas atendidas</p>
          <p className="text-xs text-success mt-2">↑ 12% em relação ao mês anterior</p>
        </div>

        <div className="bg-primary rounded-lg p-4 text-primary-foreground">
          <p className="text-xs opacity-80 mb-1">Destaque</p>
          <h4 className="font-semibold text-sm mb-2">Card com fundo primário</h4>
          <p className="text-xs opacity-80">Para informações de destaque institucional.</p>
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== TABLE ==================== */
function TableSection() {
  return (
    <ComponentPreview
      title="Tabela"
      description="Apresentação de dados tabulares com semântica HTML correta."
      whenToUse={["Dados comparativos", "Listagens com múltiplos atributos"]}
      accessibility={["Use th com scope", "Caption ou aria-label na tabela", "Não use tabela para layout"]}
      code={`<table>
  <caption>Lista de programas</caption>
  <thead>
    <tr>
      <th scope="col">Programa</th>
      <th scope="col">Status</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PNAE</td>
      <td><span class="badge badge-success">Ativo</span></td>
      <td>R$ 1.200.000</td>
    </tr>
  </tbody>
</table>`}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <caption className="sr-only">Programas do FNDE</caption>
          <thead>
            <tr className="border-b-2 border-primary/20">
              <th scope="col" className="text-left py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Programa</th>
              <th scope="col" className="text-left py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Status</th>
              <th scope="col" className="text-left py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Valor</th>
              <th scope="col" className="text-left py-3 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Ação</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "PNAE", status: "Ativo", value: "R$ 1.200.000" },
              { name: "PDDE", status: "Pendente", value: "R$ 890.000" },
              { name: "Caminho da Escola", status: "Concluído", value: "R$ 2.450.000" },
              { name: "PNLD", status: "Ativo", value: "R$ 3.100.000" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="py-3 pr-4 font-medium">{row.name}</td>
                <td className="py-3 pr-4">
                  <span className={`fnde-badge-${row.status === "Ativo" ? "success" : row.status === "Pendente" ? "warning" : "info"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 pr-4 text-muted-foreground">{row.value}</td>
                <td className="py-3">
                  <button className="text-primary text-xs font-medium hover:underline">Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ComponentPreview>
  );
}

/* ==================== ACCORDION ==================== */
function AccordionSection() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { title: "O que é o FNDE?", content: "O Fundo Nacional de Desenvolvimento da Educação é uma autarquia federal responsável pela execução de políticas educacionais do Ministério da Educação." },
    { title: "Como solicitar recursos?", content: "Os recursos podem ser solicitados através dos sistemas eletrônicos do FNDE, mediante cadastro e apresentação dos documentos exigidos." },
    { title: "Quais programas estão disponíveis?", content: "PNAE, PDDE, PNLD, Caminho da Escola, Proinfância, entre outros programas educacionais." },
  ];

  return (
    <ComponentPreview
      title="Accordion"
      description="Seções colapsáveis para FAQ, informações complementares e organização de conteúdo."
      whenToUse={["FAQ", "Conteúdo secundário ou complementar"]}
      accessibility={["aria-expanded no botão", "aria-controls referenciando o painel", "Tecla Enter/Space para abrir/fechar"]}
      code={`<div class="accordion">
  <div class="accordion-item">
    <button aria-expanded="true" aria-controls="panel-1">
      O que é o FNDE? <svg>chevron</svg>
    </button>
    <div id="panel-1" role="region">
      <p>Conteúdo...</p>
    </div>
  </div>
</div>`}
    >
      <div className="border border-border rounded-lg divide-y divide-border">
        {items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="w-full flex items-center justify-between p-4 text-sm font-medium text-left hover:bg-muted/30 transition-colors"
            >
              {item.title}
              <ChevronDown size={16} className={`transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-4 pb-4 text-sm text-muted-foreground animate-fade-in">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </ComponentPreview>
  );
}

/* ==================== TABS ==================== */
function TabsSection() {
  const [tab, setTab] = useState(0);
  const tabs = ["Visão geral", "Detalhes", "Histórico"];

  return (
    <ComponentPreview
      title="Tabs"
      description="Navegação entre painéis de conteúdo."
      whenToUse={["Organizar conteúdo em categorias na mesma página"]}
      accessibility={["role='tablist' no container", "role='tab' em cada aba", "role='tabpanel' no conteúdo", "aria-selected na aba ativa", "Navegação por setas horizontais"]}
      code={`<div role="tablist" aria-label="Seções">
  <button role="tab" aria-selected="true">Visão geral</button>
  <button role="tab" aria-selected="false">Detalhes</button>
</div>
<div role="tabpanel">Conteúdo da aba...</div>`}
    >
      <div>
        <div role="tablist" className="flex border-b border-border mb-4">
          {tabs.map((t, i) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
                tab === i ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="text-sm text-muted-foreground animate-fade-in">
          {tab === 0 && <p>Visão geral do programa com indicadores principais e resumo executivo.</p>}
          {tab === 1 && <p>Detalhes técnicos, cronograma de execução e lista de responsáveis.</p>}
          {tab === 2 && <p>Histórico de alterações, datas e registros de auditoria.</p>}
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== MODAL ==================== */
function ModalSection() {
  const [open, setOpen] = useState(false);

  return (
    <ComponentPreview
      title="Modal"
      description="Diálogo sobreposição para ações que exigem atenção."
      whenToUse={["Confirmação de ações destrutivas", "Formulários rápidos", "Alertas importantes"]}
      whenNotToUse={["Conteúdo extenso (use página)", "Informações não-urgentes (use inline)"]}
      accessibility={["Fechar com ESC", "Focus trap dentro do modal", "aria-modal='true'", "Retornar foco ao trigger ao fechar"]}
      code={`<dialog class="modal" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-header">
    <h2 id="modal-title">Confirmar exclusão</h2>
    <button aria-label="Fechar">&times;</button>
  </div>
  <div class="modal-body">
    <p>Tem certeza?</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline">Cancelar</button>
    <button class="btn btn-destructive">Excluir</button>
  </div>
</dialog>`}
    >
      <div>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium"
        >
          Abrir Modal
        </button>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
            <div className="fixed inset-0 bg-foreground/40" />
            <div
              className="relative bg-card rounded-lg shadow-xl max-w-md w-full animate-fade-in"
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 id="modal-title" className="font-semibold">Confirmar ação</h3>
                <button onClick={() => setOpen(false)} aria-label="Fechar" className="p-1 hover:bg-muted rounded transition-colors">
                  <X size={18} />
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">Tem certeza de que deseja prosseguir com esta ação? Esta operação não pode ser desfeita.</p>
              </div>
              <div className="flex justify-end gap-2 p-4 border-t border-border">
                <button onClick={() => setOpen(false)} className="px-4 py-2 text-sm border border-border rounded hover:bg-muted transition-colors">Cancelar</button>
                <button onClick={() => setOpen(false)} className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-medium">Confirmar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ComponentPreview>
  );
}

/* ==================== TOAST ==================== */
function ToastSection() {
  const [showToast, setShowToast] = useState(false);

  return (
    <ComponentPreview
      title="Toast"
      description="Notificação temporária que aparece no canto da tela."
      whenToUse={["Confirmação de ações", "Feedback não-bloqueante"]}
      whenNotToUse={["Erros que exigem ação do usuário (use Alert inline)"]}
      accessibility={["role='status' ou aria-live='polite'", "Tempo suficiente para leitura (mín. 5s)", "Botão de fechar acessível"]}
      code={`<div class="toast" role="status" aria-live="polite">
  <svg>check</svg>
  <p>Registro salvo com sucesso!</p>
  <button aria-label="Fechar">&times;</button>
</div>`}
    >
      <div>
        <button
          onClick={() => { setShowToast(true); setTimeout(() => setShowToast(false), 4000); }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium"
        >
          Exibir Toast
        </button>
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 animate-fade-in" role="status" aria-live="polite">
            <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 shadow-lg max-w-sm">
              <Check size={18} className="text-success shrink-0" />
              <p className="text-sm flex-1">Registro salvo com sucesso!</p>
              <button onClick={() => setShowToast(false)} aria-label="Fechar" className="p-0.5 hover:bg-muted rounded">
                <X size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </ComponentPreview>
  );
}

/* ==================== BREADCRUMB ==================== */
function BreadcrumbSection() {
  return (
    <ComponentPreview
      title="Breadcrumb"
      description="Navegação hierárquica indicando localização."
      whenToUse={["Páginas com hierarquia profunda", "Painéis administrativos"]}
      accessibility={["nav com aria-label='Breadcrumb'", "aria-current='page' no item atual"]}
      code={`<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/">Início</a></li>
    <li><a href="/programas">Programas</a></li>
    <li aria-current="page">PNAE</li>
  </ol>
</nav>`}
    >
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm">
          <li><a href="#" className="text-primary hover:underline">Início</a></li>
          <li><ChevronRight size={14} className="text-muted-foreground" /></li>
          <li><a href="#" className="text-primary hover:underline">Programas</a></li>
          <li><ChevronRight size={14} className="text-muted-foreground" /></li>
          <li className="text-muted-foreground" aria-current="page">PNAE</li>
        </ol>
      </nav>
    </ComponentPreview>
  );
}

/* ==================== PAGINATION ==================== */
function PaginationSection() {
  const [page, setPage] = useState(1);
  return (
    <ComponentPreview
      title="Paginação"
      description="Navegação entre páginas de resultados."
      whenToUse={["Listagens com muitos itens", "Resultados de busca"]}
      accessibility={["nav com aria-label='Paginação'", "aria-current='page' na página atual"]}
      code={`<nav aria-label="Paginação">
  <button aria-label="Anterior">←</button>
  <button aria-current="page">1</button>
  <button>2</button>
  <button>3</button>
  <button aria-label="Próxima">→</button>
</nav>`}
    >
      <nav aria-label="Paginação" className="flex items-center gap-1">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="p-2 rounded hover:bg-muted transition-colors disabled:opacity-30"
          aria-label="Página anterior"
        >
          <ArrowLeft size={16} />
        </button>
        {[1, 2, 3, 4, 5].map(p => (
          <button
            key={p}
            onClick={() => setPage(p)}
            aria-current={page === p ? "page" : undefined}
            className={`w-9 h-9 rounded text-sm font-medium transition-colors ${
              page === p ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => setPage(Math.min(5, page + 1))}
          disabled={page === 5}
          className="p-2 rounded hover:bg-muted transition-colors disabled:opacity-30"
          aria-label="Próxima página"
        >
          <ArrowRight size={16} />
        </button>
      </nav>
    </ComponentPreview>
  );
}

/* ==================== TOOLTIP ==================== */
function TooltipSection() {
  return (
    <ComponentPreview
      title="Tooltip"
      description="Informação contextual ao passar o mouse."
      whenToUse={["Explicar ícones sem label", "Informações complementares breves"]}
      whenNotToUse={["Informação essencial (deve estar visível)", "Conteúdo longo (use popover)"]}
      accessibility={["Use aria-describedby ou title", "Acessível via focus de teclado também"]}
      code={`<button aria-describedby="tip-1">
  <svg>info</svg>
</button>
<div id="tip-1" role="tooltip">Informação adicional</div>`}
    >
      <div className="flex gap-4">
        <div className="relative group">
          <button className="p-2 border border-border rounded hover:bg-muted transition-colors">
            <Eye size={16} />
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
            <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
              Visualizar detalhes
            </div>
          </div>
        </div>
        <div className="relative group">
          <button className="p-2 border border-border rounded hover:bg-muted transition-colors">
            <Copy size={16} />
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
            <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
              Copiar
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== SKELETON ==================== */
function SkeletonSection() {
  return (
    <ComponentPreview
      title="Skeleton"
      description="Placeholder visual durante carregamento de conteúdo."
      whenToUse={["Carregamento de dados assíncronos", "Primeira renderização de componentes"]}
      code={`<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-avatar"></div>
<div class="skeleton skeleton-card"></div>`}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-muted rounded animate-pulse w-1/3" />
            <div className="h-3 bg-muted rounded animate-pulse w-2/3" />
          </div>
        </div>
        <div className="h-4 bg-muted rounded animate-pulse" />
        <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
        <div className="h-4 bg-muted rounded animate-pulse w-4/6" />
        <div className="h-32 bg-muted rounded-lg animate-pulse" />
      </div>
    </ComponentPreview>
  );
}

/* ==================== SPINNER ==================== */
function SpinnerSection() {
  return (
    <ComponentPreview
      title="Spinner"
      description="Indicador de carregamento em andamento."
      whenToUse={["Ações assíncronas", "Carregamento de página"]}
      accessibility={["Use aria-label ou texto visível", "role='status' com sr-only text"]}
      code={`<div class="spinner" role="status">
  <span class="sr-only">Carregando...</span>
</div>`}
    >
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <Loader2 size={20} className="animate-spin text-primary" />
          <span className="text-xs text-muted-foreground">SM</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader2 size={28} className="animate-spin text-primary" />
          <span className="text-xs text-muted-foreground">MD</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader2 size={40} className="animate-spin text-primary" />
          <span className="text-xs text-muted-foreground">LG</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader2 size={28} className="animate-spin text-secondary" />
          <span className="text-xs text-muted-foreground">Secundário</span>
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== EMPTY STATE ==================== */
function EmptyStateSection() {
  return (
    <ComponentPreview
      title="Empty State"
      description="Estado quando não há dados para exibir."
      whenToUse={["Listas vazias", "Resultados de busca sem retorno", "Primeiro uso de funcionalidade"]}
      code={`<div class="empty-state">
  <svg>inbox</svg>
  <h3>Nenhum resultado encontrado</h3>
  <p>Tente ajustar os filtros ou realizar uma nova busca.</p>
  <button>Nova busca</button>
</div>`}
    >
      <div className="text-center py-12 border border-dashed border-border rounded-lg">
        <Inbox size={48} className="mx-auto text-muted-foreground/50 mb-4" />
        <h4 className="font-semibold mb-1">Nenhum resultado encontrado</h4>
        <p className="text-sm text-muted-foreground mb-4 max-w-sm mx-auto">
          Tente ajustar os filtros de busca ou verifique se os dados foram carregados corretamente.
        </p>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium">
          <Search size={14} /> Nova busca
        </button>
      </div>
    </ComponentPreview>
  );
}
