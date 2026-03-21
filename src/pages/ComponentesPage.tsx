import { useState, useRef, useCallback } from "react";
import { PageHeader, SectionHeader, ComponentPreview, CodeBlock } from "@/components/DSComponents";
import ChartsSection from "@/components/ChartsSection";
import {
  AlertTriangle, Check, ChevronDown, ChevronRight, Copy, Download,
  Eye, Home, Info, Loader2, Mail, Search, Upload, X, FileText, Inbox,
  ArrowLeft, ArrowRight, Calendar, Filter, TrendingUp, TrendingDown,
  MoreVertical, Trash2, Edit, Share2, UploadCloud, File, CheckCircle2,
  XCircle, Clock, Users, DollarSign, BarChart3, Activity, Minus
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

      {/* DROPDOWN MENU */}
      <SectionHeader id="dropdown" title="Dropdown Menu" description="Menu contextual com opções de ações que se abre a partir de um botão ou ícone." />
      <DropdownMenuSection />

      {/* DATEPICKER */}
      <SectionHeader id="datepicker" title="DatePicker" description="Seleção de datas com calendário interativo e campos formatados." />
      <DatePickerSection />

      {/* FILTROS DINÂMICOS */}
      <SectionHeader id="filtros" title="Filtros Dinâmicos" description="Barra de filtros combinados para refinar listagens e dashboards." />
      <DynamicFiltersSection />

      {/* BIG NUMBERS */}
      <SectionHeader id="big-numbers" title="Big Numbers / KPIs" description="Cards de indicadores numéricos para dashboards e painéis gerenciais." />
      <BigNumbersSection />

      {/* UPLOAD EM MASSA */}
      <SectionHeader id="upload" title="Upload em Massa" description="Componente de upload de múltiplos arquivos com barra de progresso e feedback por item." />
      <BulkUploadSection />

      {/* STEPS / STEPPER */}
      <SectionHeader id="steps" title="Barra de Etapas (Stepper)" description="Indicador de progresso em etapas para fluxos multi-step como formulários e wizards." />
      <StepperSection />

      {/* LISTA DESCRITIVA */}
      <SectionHeader id="lista-descritiva" title="Lista Descritiva" description="Exibição de pares chave-valor para detalhes e informações resumidas." />
      <DescriptionListSection />

      {/* STATS CARD */}
      <SectionHeader id="stats" title="Cards de Estatísticas" description="Variações de cards com indicadores, trends, sparklines e comparativos." />
      <StatsCardsSection />

      {/* MÉTRICAS */}
      <SectionHeader id="metricas" title="Métricas" description="Painel completo de métricas para dashboards: cards com gráficos circulares, sparklines, barras de variação, tabelas trimestrais e cards de resumo com ícones." />
      <MetricsSection />

      {/* GRÁFICOS */}
      <ChartsSection />
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

/* ==================== DROPDOWN MENU ==================== */
function DropdownMenuSection() {
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  return (
    <ComponentPreview
      title="Dropdown Menu"
      description="Menu contextual de ações acionado por botão, ícone ou contexto. Suporta itens, separadores, ícones e estados disabled."
      whenToUse={["Agrupar ações secundárias", "Menus de contexto (ações por item em tabelas)", "Opções de configuração"]}
      whenNotToUse={["Navegação principal (use sidebar ou tabs)", "Seleção de valor (use Select)"]}
      accessibility={["role='menu' no container", "role='menuitem' em cada item", "Fechar com ESC", "Navegação por setas ↑↓", "aria-haspopup='true' no trigger"]}
      code={`<!-- Dropdown básico -->
<div class="dropdown">
  <button aria-haspopup="true" aria-expanded="false" class="btn btn-outline">
    Ações <svg>chevron-down</svg>
  </button>
  <div role="menu" class="dropdown-content">
    <button role="menuitem">
      <svg>edit</svg> Editar
    </button>
    <button role="menuitem">
      <svg>share</svg> Compartilhar
    </button>
    <hr class="dropdown-separator" />
    <button role="menuitem" class="dropdown-item-danger">
      <svg>trash</svg> Excluir
    </button>
  </div>
</div>

<!-- Com ícone trigger (três pontos) -->
<button aria-haspopup="true" class="btn-icon">
  <svg>more-vertical</svg>
</button>`}
    >
      <div className="flex flex-wrap gap-6 items-start">
        {/* Dropdown com botão texto */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            aria-haspopup="true"
            aria-expanded={open}
            className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 rounded text-sm font-medium hover:bg-muted transition-colors"
          >
            Ações <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <div
              role="menu"
              className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-20 animate-fade-in"
              onMouseLeave={() => setOpen(false)}
            >
              {[
                { icon: <Edit size={14} />, label: "Editar", action: "edit" },
                { icon: <Copy size={14} />, label: "Duplicar", action: "duplicate" },
                { icon: <Share2 size={14} />, label: "Compartilhar", action: "share" },
                { icon: <Download size={14} />, label: "Exportar", action: "export" },
              ].map(item => (
                <button
                  key={item.action}
                  role="menuitem"
                  onClick={() => { setSelectedAction(item.label); setOpen(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors text-left"
                >
                  <span className="text-muted-foreground">{item.icon}</span> {item.label}
                </button>
              ))}
              <div className="h-px bg-border my-1" />
              <button
                role="menuitem"
                onClick={() => { setSelectedAction("Excluir"); setOpen(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-error/10 text-error transition-colors text-left"
              >
                <Trash2 size={14} /> Excluir
              </button>
            </div>
          )}
        </div>

        {/* Dropdown com ícone */}
        <DropdownIconDemo />

        {selectedAction && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-2 rounded">
            <Check size={14} className="text-success" /> Ação selecionada: <strong className="text-foreground">{selectedAction}</strong>
          </div>
        )}
      </div>
    </ComponentPreview>
  );
}

function DropdownIconDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Menu de ações"
        className="p-2 border border-border rounded hover:bg-muted transition-colors"
      >
        <MoreVertical size={16} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute top-full right-0 mt-1 w-40 bg-card border border-border rounded-lg shadow-lg py-1 z-20 animate-fade-in"
          onMouseLeave={() => setOpen(false)}
        >
          <button role="menuitem" className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors text-left">
            <Eye size={14} className="text-muted-foreground" /> Visualizar
          </button>
          <button role="menuitem" className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors text-left">
            <Edit size={14} className="text-muted-foreground" /> Editar
          </button>
          <button role="menuitem" className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors text-left text-error hover:bg-error/10">
            <Trash2 size={14} /> Excluir
          </button>
        </div>
      )}
    </div>
  );
}

/* ==================== DATEPICKER ==================== */
function DatePickerSection() {
  const [date, setDate] = useState("");
  const [showCal, setShowCal] = useState(false);
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const [viewMonth, setViewMonth] = useState(currentMonth);
  const [viewYear, setViewYear] = useState(currentYear);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const selectDate = (day: number) => {
    const d = `${String(day).padStart(2, "0")}/${String(viewMonth + 1).padStart(2, "0")}/${viewYear}`;
    setDate(d);
    setShowCal(false);
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  return (
    <ComponentPreview
      title="DatePicker"
      description="Seleção de data com calendário visual, suporte a formato brasileiro (DD/MM/AAAA), range de datas e integração com formulários."
      whenToUse={["Formulários com campos de data", "Filtros por período", "Agendamento"]}
      whenNotToUse={["Seleção de horário isolado (use TimePicker)", "Datas muito distantes (use input de ano)"]}
      accessibility={["Campo com máscara acessível", "Calendário navegável por teclado", "aria-label nas setas de mês", "Formato de data visível ao usuário"]}
      code={`<!-- DatePicker simples -->
<div class="datepicker">
  <label for="data">Data</label>
  <div class="datepicker-input-wrapper">
    <input type="text" id="data" placeholder="DD/MM/AAAA"
      pattern="\\d{2}/\\d{2}/\\d{4}" />
    <button aria-label="Abrir calendário">
      <svg>calendar</svg>
    </button>
  </div>
  <div class="datepicker-calendar" role="grid"
    aria-label="Calendário">
    <div class="calendar-header">
      <button aria-label="Mês anterior">←</button>
      <span>Março 2026</span>
      <button aria-label="Próximo mês">→</button>
    </div>
    <div class="calendar-grid">
      <!-- Dom Seg Ter ... -->
      <button class="calendar-day">1</button>
      <button class="calendar-day today">21</button>
    </div>
  </div>
</div>

<!-- Range de datas -->
<div class="date-range">
  <input type="date" aria-label="Data inicial" />
  <span>até</span>
  <input type="date" aria-label="Data final" />
</div>`}
    >
      <div className="space-y-6">
        {/* DatePicker simples */}
        <div>
          <label className="block text-sm font-medium mb-1.5">Data de referência</label>
          <div className="relative max-w-xs">
            <div className="relative">
              <input
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)}
                placeholder="DD/MM/AAAA"
                className="w-full border border-input rounded px-3 py-2 pr-10 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              />
              <button
                onClick={() => setShowCal(!showCal)}
                aria-label="Abrir calendário"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Calendar size={16} />
              </button>
            </div>

            {showCal && (
              <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-lg p-3 z-30 animate-fade-in w-72">
                <div className="flex items-center justify-between mb-3">
                  <button onClick={prevMonth} aria-label="Mês anterior" className="p-1 hover:bg-muted rounded transition-colors">
                    <ArrowLeft size={16} />
                  </button>
                  <span className="text-sm font-semibold">{monthNames[viewMonth]} {viewYear}</span>
                  <button onClick={nextMonth} aria-label="Próximo mês" className="p-1 hover:bg-muted rounded transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-0 text-center text-xs">
                  {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(d => (
                    <div key={d} className="py-1 text-muted-foreground font-medium">{d}</div>
                  ))}
                  {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isToday = day === today.getDate() && viewMonth === currentMonth && viewYear === currentYear;
                    return (
                      <button
                        key={day}
                        onClick={() => selectDate(day)}
                        className={`py-1.5 rounded text-sm transition-colors hover:bg-primary hover:text-primary-foreground ${
                          isToday ? "bg-primary/10 text-primary font-bold" : "hover:bg-muted"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Date range */}
        <div>
          <label className="block text-sm font-medium mb-1.5">Período (range)</label>
          <div className="flex items-center gap-2 max-w-md">
            <div className="relative flex-1">
              <input
                type="date"
                value={rangeStart}
                onChange={e => setRangeStart(e.target.value)}
                className="w-full border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                aria-label="Data inicial"
              />
            </div>
            <span className="text-sm text-muted-foreground">até</span>
            <div className="relative flex-1">
              <input
                type="date"
                value={rangeEnd}
                onChange={e => setRangeEnd(e.target.value)}
                className="w-full border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                aria-label="Data final"
              />
            </div>
          </div>
        </div>

        {/* Preset ranges */}
        <div>
          <p className="text-sm font-medium mb-2">Atalhos de período</p>
          <div className="flex flex-wrap gap-2">
            {["Hoje", "Últimos 7 dias", "Últimos 30 dias", "Este mês", "Último trimestre", "Este ano"].map(label => (
              <button key={label} className="px-3 py-1.5 text-xs border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== FILTROS DINÂMICOS ==================== */
function DynamicFiltersSection() {
  const [status, setStatus] = useState("todos");
  const [tipo, setTipo] = useState("todos");
  const [searchVal, setSearchVal] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addFilter = (f: string) => {
    if (!activeFilters.includes(f)) setActiveFilters([...activeFilters, f]);
  };
  const removeFilter = (f: string) => setActiveFilters(activeFilters.filter(x => x !== f));
  const clearAll = () => { setActiveFilters([]); setStatus("todos"); setTipo("todos"); setSearchVal(""); };

  const handleStatusChange = (val: string) => {
    setStatus(val);
    if (val !== "todos") addFilter(`Status: ${val}`);
    else setActiveFilters(prev => prev.filter(f => !f.startsWith("Status:")));
  };
  const handleTipoChange = (val: string) => {
    setTipo(val);
    if (val !== "todos") addFilter(`Tipo: ${val}`);
    else setActiveFilters(prev => prev.filter(f => !f.startsWith("Tipo:")));
  };

  return (
    <ComponentPreview
      title="Filtros Dinâmicos"
      description="Barra de filtros combinados com chips ativos, busca por texto, selects e botão de limpar. Ideal para dashboards e listagens."
      whenToUse={["Listagens com muitos registros", "Dashboards com dados filtráveis", "Relatórios com parâmetros"]}
      whenNotToUse={["Listas com poucos itens (< 10)", "Quando há apenas 1 critério (use busca simples)"]}
      accessibility={["Labels em todos os campos", "Chips removíveis com aria-label", "Anunciar quantidade de filtros ativos via aria-live"]}
      code={`<!-- Barra de filtros -->
<div class="filter-bar" role="search" aria-label="Filtros">
  <div class="filter-search">
    <svg>search</svg>
    <input type="search" placeholder="Buscar..." />
  </div>

  <select aria-label="Filtrar por status">
    <option value="todos">Todos os status</option>
    <option value="ativo">Ativo</option>
    <option value="pendente">Pendente</option>
    <option value="inativo">Inativo</option>
  </select>

  <select aria-label="Filtrar por tipo">
    <option value="todos">Todos os tipos</option>
    <option value="pnae">PNAE</option>
    <option value="pdde">PDDE</option>
  </select>

  <button class="btn btn-outline btn-sm">
    <svg>filter</svg> Mais filtros
  </button>
</div>

<!-- Chips de filtros ativos -->
<div class="filter-chips" aria-live="polite">
  <span class="filter-chip">
    Status: Ativo
    <button aria-label="Remover filtro Status">×</button>
  </span>
  <button class="filter-clear">Limpar todos</button>
</div>`}
    >
      <div className="space-y-4">
        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 items-end" role="search" aria-label="Filtros de listagem">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-medium mb-1 text-muted-foreground">Buscar</label>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                placeholder="Nome, código, município..."
                className="w-full border border-input rounded pl-9 pr-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted-foreground">Status</label>
            <select
              value={status}
              onChange={e => handleStatusChange(e.target.value)}
              className="border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            >
              <option value="todos">Todos</option>
              <option value="Ativo">Ativo</option>
              <option value="Pendente">Pendente</option>
              <option value="Inativo">Inativo</option>
              <option value="Concluído">Concluído</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted-foreground">Programa</label>
            <select
              value={tipo}
              onChange={e => handleTipoChange(e.target.value)}
              className="border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            >
              <option value="todos">Todos</option>
              <option value="PNAE">PNAE</option>
              <option value="PDDE">PDDE</option>
              <option value="PNLD">PNLD</option>
              <option value="Caminho da Escola">Caminho da Escola</option>
            </select>
          </div>
          <button className="inline-flex items-center gap-1.5 border border-border px-3 py-2 rounded text-sm hover:bg-muted transition-colors">
            <Filter size={14} /> Mais filtros
          </button>
        </div>

        {/* Active filter chips */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center" aria-live="polite">
            <span className="text-xs text-muted-foreground">{activeFilters.length} filtro(s) ativo(s):</span>
            {activeFilters.map(f => (
              <span key={f} className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium">
                {f}
                <button onClick={() => removeFilter(f)} aria-label={`Remover filtro ${f}`} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                  <X size={12} />
                </button>
              </span>
            ))}
            <button onClick={clearAll} className="text-xs text-error hover:underline ml-1">Limpar todos</button>
          </div>
        )}

        {/* Example result count */}
        <div className="text-sm text-muted-foreground border-t border-border pt-3">
          Exibindo <strong className="text-foreground">247</strong> resultados
          {activeFilters.length > 0 && <> com {activeFilters.length} filtro(s) aplicado(s)</>}
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== BIG NUMBERS / KPIs ==================== */
function BigNumbersSection() {
  return (
    <ComponentPreview
      title="Big Numbers / KPIs"
      description="Cards de destaque com indicadores numéricos grandes, variação percentual, ícone contextual e trend visual."
      whenToUse={["Dashboards e painéis gerenciais", "Resumos executivos", "Telas iniciais de módulos"]}
      whenNotToUse={["Dados que precisam de contexto tabular", "Valores sem significado isolado"]}
      accessibility={["aria-label descritivo no card", "Não depender apenas de cor para trend (usar ↑↓ e texto)"]}
      code={`<!-- Big Number Card -->
<div class="kpi-card" aria-label="Escolas atendidas: 12.847">
  <div class="kpi-header">
    <span class="kpi-icon kpi-icon-primary">
      <svg>users</svg>
    </span>
    <span class="kpi-trend kpi-trend-up">
      ↑ 12,3%
    </span>
  </div>
  <p class="kpi-value">12.847</p>
  <p class="kpi-label">Escolas atendidas</p>
  <p class="kpi-comparison">vs. 11.436 mês anterior</p>
</div>

<!-- Variação negativa -->
<div class="kpi-card">
  <span class="kpi-trend kpi-trend-down">↓ 3,2%</span>
  <p class="kpi-value">R$ 2,4M</p>
  <p class="kpi-label">Pendências</p>
</div>

<!-- Grid de KPIs -->
<div class="kpi-grid cols-4">
  <!-- 4 cards lado a lado -->
</div>`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <Users size={20} />, value: "12.847", label: "Escolas atendidas", trend: "+12,3%", up: true, comparison: "vs. 11.436 mês anterior", color: "text-primary bg-primary/10" },
          { icon: <DollarSign size={20} />, value: "R$ 847M", label: "Recursos transferidos", trend: "+8,7%", up: true, comparison: "vs. R$ 779M no trimestre anterior", color: "text-success bg-success-bg" },
          { icon: <Clock size={20} />, value: "23", label: "Pendências", trend: "-15,4%", up: false, comparison: "vs. 27 semana anterior", color: "text-warning bg-warning-bg" },
          { icon: <BarChart3 size={20} />, value: "94,2%", label: "Taxa de execução", trend: "+2,1%", up: true, comparison: "Meta: 95%", color: "text-info bg-info-bg" },
        ].map((kpi, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-5" aria-label={`${kpi.label}: ${kpi.value}`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`p-2 rounded-lg ${kpi.color}`}>{kpi.icon}</span>
              <span className={`inline-flex items-center gap-1 text-xs font-semibold ${kpi.up ? "text-success" : "text-error"}`}>
                {kpi.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {kpi.trend}
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground leading-none mb-1">{kpi.value}</p>
            <p className="text-sm text-muted-foreground">{kpi.label}</p>
            <p className="text-xs text-muted-foreground/70 mt-2">{kpi.comparison}</p>
          </div>
        ))}
      </div>

      {/* Inline compact variant */}
      <div className="mt-6">
        <p className="text-sm font-medium mb-3">Variante compacta (inline)</p>
        <div className="flex flex-wrap gap-4">
          {[
            { value: "5.423", label: "Municípios", trend: "↑ 2%" },
            { value: "R$ 1,2B", label: "Orçamento anual", trend: "→ 0%" },
            { value: "326", label: "Projetos ativos", trend: "↑ 18%" },
          ].map((item, i) => (
            <div key={i} className="flex items-baseline gap-2 bg-muted px-4 py-2 rounded-lg">
              <span className="text-xl font-bold text-foreground">{item.value}</span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
              <span className="text-xs font-medium text-success">{item.trend}</span>
            </div>
          ))}
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== UPLOAD EM MASSA ==================== */
function BulkUploadSection() {
  const [files, setFiles] = useState<{ name: string; size: string; progress: number; status: "uploading" | "done" | "error" }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateUpload = useCallback((fileNames: string[]) => {
    const newFiles = fileNames.map(name => ({
      name,
      size: `${(Math.random() * 5 + 0.5).toFixed(1)} MB`,
      progress: 0,
      status: "uploading" as const,
    }));
    setFiles(prev => [...prev, ...newFiles]);

    newFiles.forEach((file, idx) => {
      const startIdx = files.length + idx;
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 25 + 10;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setFiles(prev => prev.map((f, i) => i === startIdx ? { ...f, progress: 100, status: Math.random() > 0.15 ? "done" : "error" } : f));
        } else {
          setFiles(prev => prev.map((f, i) => i === startIdx ? { ...f, progress: Math.min(progress, 99) } : f));
        }
      }, 300 + Math.random() * 400);
    });
  }, [files.length]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const names = Array.from(e.dataTransfer.files).map(f => f.name);
    if (names.length) simulateUpload(names);
  };

  const handleFileSelect = () => {
    simulateUpload(["relatorio_2026.pdf", "planilha_dados.xlsx", "comprovante_003.pdf", "foto_escola.jpg"]);
  };

  return (
    <ComponentPreview
      title="Upload em Massa com Progresso"
      description="Área de drag-and-drop para múltiplos arquivos com barra de progresso individual, status por item e feedback visual."
      whenToUse={["Envio de documentos comprobatórios", "Importação de planilhas", "Upload de fotos de obras"]}
      whenNotToUse={["Upload de arquivo único simples (use input type=file)", "Dados que cabem em formulário (use campos textuais)"]}
      accessibility={["Área de drop com role e aria-label", "Progresso anunciado via aria-valuenow", "Status por arquivo em texto, não só cor"]}
      code={`<!-- Área de upload -->
<div class="upload-dropzone" role="button" tabindex="0"
  aria-label="Arraste arquivos ou clique para selecionar">
  <svg>upload-cloud</svg>
  <p>Arraste arquivos aqui ou
    <button>selecione do computador</button>
  </p>
  <p class="upload-hint">PDF, XLSX, JPG até 10MB cada</p>
  <input type="file" multiple hidden />
</div>

<!-- Lista de arquivos com progresso -->
<div class="upload-file-list">
  <div class="upload-file-item">
    <svg>file-text</svg>
    <div class="upload-file-info">
      <span class="upload-file-name">relatorio.pdf</span>
      <span class="upload-file-size">2.4 MB</span>
    </div>
    <div class="upload-progress-bar" role="progressbar"
      aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
      <div class="upload-progress-fill" style="width: 65%"></div>
    </div>
    <span class="upload-status">65%</span>
  </div>

  <!-- Concluído -->
  <div class="upload-file-item upload-file-done">
    <svg>check-circle</svg>
    <span>Enviado com sucesso</span>
  </div>

  <!-- Erro -->
  <div class="upload-file-item upload-file-error">
    <svg>x-circle</svg>
    <span>Falha no envio</span>
    <button>Tentar novamente</button>
  </div>
</div>`}
    >
      <div className="space-y-4">
        {/* Dropzone */}
        <div
          onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          aria-label="Arraste arquivos ou clique para selecionar"
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/30"
          }`}
        >
          <UploadCloud size={40} className="mx-auto text-muted-foreground/50 mb-3" />
          <p className="text-sm font-medium mb-1">Arraste arquivos aqui ou <span className="text-primary underline">selecione do computador</span></p>
          <p className="text-xs text-muted-foreground">PDF, XLSX, JPG, PNG · Até 10MB por arquivo · Máximo 20 arquivos</p>
          <input ref={fileInputRef} type="file" multiple hidden onChange={() => handleFileSelect()} />
        </div>

        {/* Demo button */}
        {files.length === 0 && (
          <button
            onClick={handleFileSelect}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium"
          >
            <Upload size={14} /> Simular upload de 4 arquivos
          </button>
        )}

        {/* File list */}
        {files.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{files.length} arquivo(s)</span>
              <span>
                {files.filter(f => f.status === "done").length} concluído(s)
                {files.some(f => f.status === "error") && ` · ${files.filter(f => f.status === "error").length} com erro`}
              </span>
            </div>
            {files.map((file, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-lg p-3">
                <span className={`shrink-0 ${file.status === "done" ? "text-success" : file.status === "error" ? "text-error" : "text-muted-foreground"}`}>
                  {file.status === "done" ? <CheckCircle2 size={18} /> : file.status === "error" ? <XCircle size={18} /> : <File size={18} />}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium truncate">{file.name}</span>
                    <span className="text-xs text-muted-foreground ml-2 shrink-0">
                      {file.status === "done" ? "Concluído" : file.status === "error" ? "Erro" : `${Math.round(file.progress)}%`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden" role="progressbar" aria-valuenow={Math.round(file.progress)} aria-valuemin={0} aria-valuemax={100}>
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          file.status === "done" ? "bg-success" : file.status === "error" ? "bg-error" : "bg-primary"
                        }`}
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground shrink-0">{file.size}</span>
                  </div>
                </div>
                {file.status === "error" && (
                  <button className="text-xs text-primary hover:underline shrink-0">Tentar novamente</button>
                )}
                <button aria-label={`Remover ${file.name}`} className="p-1 hover:bg-muted rounded shrink-0 transition-colors" onClick={() => setFiles(prev => prev.filter((_, j) => j !== i))}>
                  <X size={14} className="text-muted-foreground" />
                </button>
              </div>
            ))}
            {/* Global progress */}
            <div className="bg-muted/50 rounded-lg p-3 flex items-center gap-3">
              <Activity size={16} className="text-primary" />
              <div className="flex-1">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${files.reduce((sum, f) => sum + f.progress, 0) / files.length}%` }}
                  />
                </div>
              </div>
              <span className="text-xs font-medium">{Math.round(files.reduce((sum, f) => sum + f.progress, 0) / files.length)}%</span>
            </div>
          </div>
        )}
      </div>
    </ComponentPreview>
  );
}

/* ==================== STEPPER ==================== */
function StepperSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { label: "Dados básicos", description: "Informações do programa" },
    { label: "Documentação", description: "Upload de documentos" },
    { label: "Revisão", description: "Conferência dos dados" },
    { label: "Confirmação", description: "Envio e protocolo" },
  ];

  return (
    <ComponentPreview
      title="Barra de Etapas (Stepper)"
      description="Componente de progresso em etapas para fluxos multi-step com estados completo, ativo e pendente."
      whenToUse={["Formulários longos divididos em etapas", "Processos com fluxo definido (wizard)", "Acompanhamento de status"]}
      whenNotToUse={["Etapas que podem ser feitas em qualquer ordem (use Tabs)", "Fluxos com menos de 3 etapas"]}
      accessibility={["aria-current='step' na etapa ativa", "aria-label no nav", "Indicação de etapa completa via texto, não só cor/ícone"]}
      code={`<!-- Stepper horizontal -->
<nav aria-label="Etapas do formulário">
  <ol class="stepper">
    <li class="step step-complete" aria-label="Etapa 1 completa">
      <span class="step-indicator">
        <svg>check</svg>
      </span>
      <span class="step-label">Dados básicos</span>
    </li>
    <li class="step step-active" aria-current="step">
      <span class="step-indicator">2</span>
      <span class="step-label">Documentação</span>
      <span class="step-description">Upload de documentos</span>
    </li>
    <li class="step step-pending">
      <span class="step-indicator">3</span>
      <span class="step-label">Revisão</span>
    </li>
  </ol>
</nav>

<!-- Navegação -->
<div class="stepper-actions">
  <button class="btn btn-outline">Voltar</button>
  <button class="btn btn-primary">Próxima etapa</button>
</div>`}
    >
      <div className="space-y-6">
        {/* Horizontal stepper */}
        <nav aria-label="Etapas do formulário">
          <ol className="flex items-start">
            {steps.map((step, i) => {
              const num = i + 1;
              const isComplete = num < currentStep;
              const isActive = num === currentStep;
              return (
                <li key={i} className="flex-1 relative">
                  <div className="flex flex-col items-center text-center">
                    <button
                      onClick={() => setCurrentStep(num)}
                      aria-current={isActive ? "step" : undefined}
                      aria-label={`Etapa ${num}${isComplete ? " completa" : isActive ? " atual" : " pendente"}: ${step.label}`}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors z-10 relative ${
                        isComplete ? "bg-success text-success-foreground" :
                        isActive ? "bg-primary text-primary-foreground ring-4 ring-primary/20" :
                        "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isComplete ? <Check size={18} /> : num}
                    </button>
                    <span className={`mt-2 text-xs font-medium ${isActive ? "text-primary" : isComplete ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground mt-0.5 hidden sm:block">{step.description}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`absolute top-5 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-0.5 ${num < currentStep ? "bg-success" : "bg-border"}`} />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Step content */}
        <div className="border border-border rounded-lg p-6 bg-muted/20 animate-fade-in">
          <h4 className="font-semibold mb-2">Etapa {currentStep}: {steps[currentStep - 1].label}</h4>
          <p className="text-sm text-muted-foreground">{steps[currentStep - 1].description} — Conteúdo da etapa apareceria aqui.</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded text-sm font-medium hover:bg-muted transition-colors disabled:opacity-30"
          >
            <ArrowLeft size={14} /> Voltar
          </button>
          <span className="text-xs text-muted-foreground">Etapa {currentStep} de {steps.length}</span>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
            disabled={currentStep === steps.length}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-30"
          >
            {currentStep === steps.length ? "Concluir" : "Próxima etapa"} <ArrowRight size={14} />
          </button>
        </div>

        {/* Vertical stepper variant */}
        <div className="mt-6">
          <p className="text-sm font-medium mb-3">Variante vertical</p>
          <ol className="space-y-0 ml-4">
            {steps.map((step, i) => {
              const num = i + 1;
              const isComplete = num < currentStep;
              const isActive = num === currentStep;
              return (
                <li key={i} className="relative pb-6 last:pb-0">
                  {i < steps.length - 1 && (
                    <div className={`absolute left-[15px] top-[36px] bottom-0 w-0.5 ${num < currentStep ? "bg-success" : "bg-border"}`} />
                  )}
                  <div className="flex items-start gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      isComplete ? "bg-success text-success-foreground" : isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {isComplete ? <Check size={14} /> : num}
                    </span>
                    <div>
                      <p className={`text-sm font-medium ${isActive ? "text-primary" : "text-foreground"}`}>{step.label}</p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== LISTA DESCRITIVA ==================== */
function DescriptionListSection() {
  return (
    <ComponentPreview
      title="Lista Descritiva"
      description="Exibição de pares chave-valor para dados de detalhe, resumos e fichas cadastrais."
      whenToUse={["Telas de detalhe", "Fichas cadastrais", "Resumos de formulário antes do envio"]}
      whenNotToUse={["Dados tabulares comparativos (use Tabela)", "Listas de itens homogêneos"]}
      accessibility={["Usar elementos dl, dt, dd", "dt com font-weight para distinção visual"]}
      code={`<dl class="description-list">
  <div class="dl-item">
    <dt>Programa</dt>
    <dd>PNAE - Programa Nacional de Alimentação Escolar</dd>
  </div>
  <div class="dl-item">
    <dt>Status</dt>
    <dd><span class="badge badge-success">Ativo</span></dd>
  </div>
  <div class="dl-item">
    <dt>Valor aprovado</dt>
    <dd>R$ 1.247.000,00</dd>
  </div>
</dl>

<!-- Layout em 2 colunas -->
<dl class="description-list dl-grid-2">
  ...
</dl>`}
    >
      <div className="space-y-6">
        {/* Standard layout */}
        <dl className="border border-border rounded-lg divide-y divide-border">
          {[
            { term: "Programa", value: "PNAE – Programa Nacional de Alimentação Escolar" },
            { term: "Entidade", value: "Prefeitura Municipal de Brasília - DF" },
            { term: "CNPJ", value: "00.394.445/0001-43" },
            { term: "Status", value: <span className="fnde-badge-success">Ativo</span> },
            { term: "Valor aprovado", value: "R$ 1.247.000,00" },
            { term: "Vigência", value: "01/01/2026 a 31/12/2026" },
            { term: "Responsável", value: "Maria da Silva Oliveira" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center px-4 py-3 gap-1 sm:gap-0">
              <dt className="text-sm font-medium text-muted-foreground sm:w-1/3 shrink-0">{item.term}</dt>
              <dd className="text-sm text-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>

        {/* Grid 2-col variant */}
        <div>
          <p className="text-sm font-medium mb-3">Variante em grid (2 colunas)</p>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { term: "Código", value: "FNDE-2026-00312" },
              { term: "Exercício", value: "2026" },
              { term: "Município", value: "Brasília – DF" },
              { term: "UF", value: "Distrito Federal" },
              { term: "Modalidade", value: "Transferência automática" },
              { term: "Parcelas", value: "10 de 12 liberadas" },
            ].map((item, i) => (
              <div key={i} className="bg-muted/30 rounded-lg px-4 py-3">
                <dt className="text-xs font-medium text-muted-foreground mb-0.5">{item.term}</dt>
                <dd className="text-sm font-medium text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== STATS CARDS ==================== */
function StatsCardsSection() {
  return (
    <ComponentPreview
      title="Cards de Estatísticas"
      description="Variações avançadas de cards para painéis: com mini-gráfico, comparativo, meta/progresso e ranking."
      whenToUse={["Dashboards detalhados", "Relatórios visuais", "Comparativos de desempenho"]}
      code={`<!-- Card com progresso -->
<div class="stat-card">
  <div class="stat-header">
    <span class="stat-label">Taxa de execução</span>
    <span class="stat-icon"><svg>bar-chart</svg></span>
  </div>
  <p class="stat-value">78,4%</p>
  <div class="stat-progress" role="progressbar"
    aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">
    <div class="stat-progress-fill" style="width: 78%"></div>
  </div>
  <p class="stat-meta">Meta: 95%</p>
</div>

<!-- Card comparativo -->
<div class="stat-card">
  <span class="stat-label">Este mês vs anterior</span>
  <div class="stat-compare">
    <div>
      <p class="stat-value">1.247</p>
      <p class="stat-sublabel">Mar/2026</p>
    </div>
    <div>
      <p class="stat-value stat-value-muted">1.102</p>
      <p class="stat-sublabel">Fev/2026</p>
    </div>
  </div>
</div>`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card com progresso/meta */}
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Taxa de execução</span>
            <BarChart3 size={16} className="text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mb-3">78,4%</p>
          <div className="h-2 bg-muted rounded-full overflow-hidden mb-2" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full bg-primary rounded-full" style={{ width: "78.4%" }} />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0%</span>
            <span className="font-medium text-primary">Meta: 95%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Card comparativo */}
        <div className="bg-card border border-border rounded-lg p-5">
          <span className="text-sm text-muted-foreground block mb-3">Atendimentos: este mês vs anterior</span>
          <div className="flex items-end gap-6">
            <div>
              <p className="text-2xl font-bold text-foreground">1.247</p>
              <p className="text-xs text-muted-foreground">Mar/2026</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-muted-foreground/50">1.102</p>
              <p className="text-xs text-muted-foreground">Fev/2026</p>
            </div>
            <div className="flex items-center gap-1 text-success text-sm font-semibold mb-1">
              <TrendingUp size={14} /> +13,2%
            </div>
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1 mt-4 h-10">
            {[40, 55, 30, 65, 50, 70, 80, 60, 90, 85, 75, 95].map((h, i) => (
              <div key={i} className={`flex-1 rounded-t ${i === 11 ? "bg-primary" : "bg-primary/20"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* Card de ranking */}
        <div className="bg-card border border-border rounded-lg p-5">
          <span className="text-sm text-muted-foreground block mb-3">Top 5 programas por valor</span>
          <div className="space-y-2">
            {[
              { name: "PNAE", value: "R$ 3,1B", pct: 100 },
              { name: "PNLD", value: "R$ 2,4B", pct: 77 },
              { name: "PDDE", value: "R$ 1,8B", pct: 58 },
              { name: "Caminho da Escola", value: "R$ 890M", pct: 29 },
              { name: "Proinfância", value: "R$ 420M", pct: 14 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-medium">{i + 1}. {item.name}</span>
                  <span className="text-muted-foreground">{item.value}</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary/70 rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card com status indicadores */}
        <div className="bg-card border border-border rounded-lg p-5">
          <span className="text-sm text-muted-foreground block mb-3">Status dos processos</span>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Aprovados", count: 142, color: "text-success", bg: "bg-success-bg" },
              { label: "Pendentes", count: 38, color: "text-warning", bg: "bg-warning-bg" },
              { label: "Em análise", count: 67, color: "text-info", bg: "bg-info-bg" },
              { label: "Reprovados", count: 12, color: "text-error", bg: "bg-error-bg" },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} rounded-lg p-3 text-center`}>
                <p className={`text-xl font-bold ${item.color}`}>{item.count}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card com ícone grande */}
        <div className="bg-primary rounded-lg p-5 text-primary-foreground">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs opacity-70 mb-1">Total acumulado 2026</p>
              <p className="text-3xl font-bold">R$ 8,6B</p>
              <p className="text-sm opacity-80 mt-2">Recursos transferidos para educação básica em todo o Brasil</p>
            </div>
            <DollarSign size={40} className="opacity-20" />
          </div>
        </div>

        {/* Card ação rápida */}
        <div className="bg-card border border-border rounded-lg p-5 flex flex-col justify-between">
          <div>
            <span className="text-sm text-muted-foreground block mb-2">Ações pendentes</span>
            <div className="space-y-2">
              {["Aprovar prestação PNAE #3421", "Revisar parecer PDDE #1872", "Assinar termo Proinfância #099"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-warning shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-4 w-full text-center bg-primary text-primary-foreground py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity">
            Ver todas as pendências
          </button>
        </div>
      </div>
    </ComponentPreview>
  );
}

/* ==================== MÉTRICAS ==================== */

function MiniDonut({ value, size = 48, color = "text-primary" }: { value: number; size?: number; color?: string }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width={size} height={size} className={color} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={4} opacity={0.15} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={4}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} className="transition-all duration-700" />
    </svg>
  );
}

function MiniSparkline({ data, color = "text-primary", height = 40, width = 120 }: { data: number[]; color?: string; height?: number; width?: number }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data.map((d, i) => `${i * step},${height - ((d - min) / range) * (height - 4) - 2}`).join(" ");
  return (
    <svg width={width} height={height} className={color} aria-hidden="true">
      <polyline fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" points={points} />
    </svg>
  );
}

function MiniBarChart({ data, color = "bg-primary", height = 40 }: { data: number[]; color?: string; height?: number }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-[3px]" style={{ height }} aria-hidden="true">
      {data.map((d, i) => (
        <div key={i} className={`flex-1 rounded-t ${color} transition-all`} style={{ height: `${(d / max) * 100}%`, minWidth: 4 }} />
      ))}
    </div>
  );
}

function MiniAreaChart({ data, color = "text-primary", height = 50, width = 140 }: { data: number[]; color?: string; height?: number; width?: number }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const pts = data.map((d, i) => `${i * step},${height - ((d - min) / range) * (height - 6) - 3}`);
  const line = pts.join(" ");
  const area = `0,${height} ${line} ${width},${height}`;
  return (
    <svg width={width} height={height} className={color} aria-hidden="true">
      <polygon fill="currentColor" opacity={0.1} points={area} />
      <polyline fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" points={line} />
    </svg>
  );
}

function MetricsSection() {
  return (
    <ComponentPreview
      title="Métricas — Painel Completo"
      description="Coleção de cards de métricas para dashboards institucionais: gráficos circulares, sparklines, barras, área, tabelas trimestrais e cards de resumo. Inspirado em painéis administrativos profissionais."
      whenToUse={["Dashboards e painéis gerenciais", "Telas iniciais de módulos", "Relatórios executivos", "Acompanhamento de indicadores"]}
      whenNotToUse={["Páginas de formulário", "Conteúdo editorial sem dados numéricos"]}
      accessibility={["Cada card com aria-label descritivo", "Gráficos decorativos com aria-hidden", "Valores numéricos em texto, não só visual", "Trends com ícone + texto (não depender só de cor)"]}
      code={`<!-- Metric card com gráfico circular -->
<div class="metric-card" aria-label="Vendas totais: R$ 250K">
  <div class="metric-header">
    <h3 class="metric-title">Vendas Totais</h3>
    <span class="metric-badge">Mensal</span>
  </div>
  <div class="metric-body">
    <svg class="metric-donut" aria-hidden="true">
      <circle class="donut-bg" />
      <circle class="donut-fill" stroke-dashoffset="..." />
    </svg>
    <div class="metric-value-group">
      <p class="metric-value">R$ 250K</p>
      <p class="metric-subtitle">Total mensal de vendas</p>
    </div>
  </div>
</div>

<!-- Metric card com sparkline -->
<div class="metric-card">
  <div class="metric-header">
    <h3>Projeto A - Vendas</h3>
    <span class="metric-badge">Mensal</span>
  </div>
  <div class="metric-body">
    <div class="metric-value-group">
      <p class="metric-value">R$ 320K</p>
      <p class="metric-subtitle">Vendas mensais Projeto A</p>
    </div>
    <svg class="sparkline-bars" aria-hidden="true">
      <!-- barras mini -->
    </svg>
  </div>
</div>

<!-- Metric card com área + variação -->
<div class="metric-card">
  <div class="metric-header">
    <h3>Greenfield Towers</h3>
    <span class="metric-trend metric-trend-up">+R$ 40K</span>
  </div>
  <div class="metric-body">
    <svg class="sparkline-area" aria-hidden="true">
      <!-- area chart -->
    </svg>
    <div class="metric-value-group">
      <p class="metric-value">R$ 550K</p>
      <p class="metric-subtitle">Variação de vendas</p>
    </div>
  </div>
</div>

<!-- Metric card com donut colorido -->
<div class="metric-card">
  <div class="metric-header">
    <h3>Receita Total</h3>
    <span class="metric-trend metric-trend-up">+8,2%</span>
  </div>
  <div class="metric-body">
    <svg class="metric-donut-pie" aria-hidden="true">
      <!-- multi-segment donut -->
    </svg>
    <div>
      <p class="metric-value">R$ 1.240K</p>
      <p class="metric-subtitle">Este trimestre</p>
    </div>
  </div>
</div>

<!-- Tabela de relatório trimestral -->
<div class="metric-table-card">
  <div class="metric-header">
    <h3>Relatórios Trimestrais</h3>
    <span class="metric-badge metric-badge-new">Novo</span>
  </div>
  <table>
    <thead>
      <tr>
        <th>Trimestre</th>
        <th>Receita</th>
        <th>Despesa</th>
        <th>Margem</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>T1 2026</td><td>R$ 210k</td>
        <td>R$ 165k</td><td>R$ 45k</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Card de resumo com ícone grande -->
<div class="metric-summary-card">
  <p class="metric-value-xl">421</p>
  <p class="metric-label">Ordens</p>
  <p class="metric-desc">421 novas ordens recebidas.</p>
  <div class="metric-mini-bars" aria-hidden="true"></div>
</div>`}
    >
      <div className="space-y-8">
        {/* ===== ROW 1: Cards com donut ===== */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Cards com gráfico circular (donut)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Vendas Totais", badge: "Mensal", value: "R$ 250K", subtitle: "Total mensal de vendas", pct: 72, color: "text-primary" },
              { title: "Total de Ordens", badge: "Mensal", value: "180", subtitle: "Total mensal de ordens", pct: 58, color: "text-info" },
              { title: "Novos Cadastros", badge: "Mensal", value: "50.895", subtitle: "Novos cadastros mensais", pct: 85, color: "text-success" },
              { title: "Receita", badge: "Mensal", value: "R$ 50,33K", subtitle: "Receita mensal", pct: 45, color: "text-secondary" },
            ].map((m, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5" aria-label={`${m.title}: ${m.value}`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-foreground">{m.title}</h4>
                  <span className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">{m.badge}</span>
                </div>
                <div className="flex items-center justify-between">
                  <MiniDonut value={m.pct} size={56} color={m.color} />
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== ROW 2: Cards com sparkline bars ===== */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Cards com mini barras (sparkline)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Projeto A - Vendas", value: "R$ 320K", subtitle: "Vendas mensais Projeto A", data: [40, 65, 35, 80, 55, 70, 90] },
              { title: "Projeto B - Receita", value: "R$ 450K", subtitle: "Receita mensal Projeto B", data: [50, 40, 70, 60, 80, 75, 95] },
              { title: "Projeto C - Engajamento", value: "R$ 580K", subtitle: "Engajamento mensal Projeto C", data: [30, 55, 45, 70, 60, 85, 75] },
              { title: "Projeto D - Despesas", value: "R$ 700K", subtitle: "Despesas mensais Projeto D", data: [60, 45, 75, 50, 65, 80, 55] },
            ].map((m, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5" aria-label={`${m.title}: ${m.value}`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-foreground">{m.title}</h4>
                  <span className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">Mensal</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.subtitle}</p>
                  </div>
                  <MiniBarChart data={m.data} color="bg-primary/60" height={44} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== ROW 3: Cards com área chart + trend badge ===== */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Cards com gráfico de área e variação</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Greenfield Towers", trend: "+R$ 40K", up: true, value: "R$ 550K", subtitle: "Variação de vendas", data: [20, 35, 30, 50, 45, 60, 55, 70, 65, 80] },
              { title: "Oceanview Residences", trend: "-R$ 20K", up: false, value: "R$ 230K", subtitle: "Variação de vendas", data: [60, 55, 50, 45, 40, 35, 42, 38, 30, 25] },
              { title: "Sunset Bay Villas", trend: "+R$ 50K", up: true, value: "R$ 650K", subtitle: "Variação de vendas", data: [30, 40, 35, 55, 50, 65, 60, 75, 80, 90] },
              { title: "Maple Grove Homes", trend: "+R$ 30K", up: true, value: "R$ 480K", subtitle: "Variação de vendas", data: [25, 30, 45, 40, 55, 50, 60, 55, 70, 65] },
            ].map((m, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5" aria-label={`${m.title}: ${m.value}`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-foreground">{m.title}</h4>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${m.up ? "bg-success-bg text-success" : "bg-error-bg text-error"}`}>
                    {m.trend}
                  </span>
                </div>
                <div className="mb-3">
                  <MiniAreaChart data={m.data} color={m.up ? "text-success" : "text-error"} width={200} height={50} />
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-2xl font-bold text-foreground">{m.value}</p>
                  <p className="text-xs text-muted-foreground">{m.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== ROW 4: Cards com donut colorido (multi-segmento) + trend ===== */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Cards com donut e trend trimestral</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Receita Total", trend: "+8,2%", up: true, value: "R$ 1.240K", subtitle: "Este trimestre", pct: 78, colors: ["text-primary", "text-info"] },
              { title: "Total Despesas", trend: "-2,1%", up: false, value: "R$ 840K", subtitle: "Este trimestre", pct: 55, colors: ["text-secondary", "text-warning"] },
              { title: "Lucro Líquido", trend: "Estável", up: true, value: "R$ 400K", subtitle: "Este trimestre", pct: 42, colors: ["text-success", "text-primary"] },
              { title: "Fluxo de Caixa", trend: "+5,6%", up: true, value: "R$ 720K", subtitle: "Este trimestre", pct: 65, colors: ["text-info", "text-success"] },
            ].map((m, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5" aria-label={`${m.title}: ${m.value}`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-foreground">{m.title}</h4>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    m.trend === "Estável" ? "bg-muted text-muted-foreground" : m.up ? "bg-success-bg text-success" : "bg-error-bg text-error"
                  }`}>
                    {m.trend}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <MiniDonut value={m.pct} size={60} color={m.colors[0]} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-foreground">{m.pct}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== ROW 5: Quarterly table + summary cards ===== */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Tabela trimestral + Cards de resumo</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Quarterly table */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold">Relatórios Trimestrais</h4>
                  <span className="text-[10px] font-bold bg-success text-success-foreground px-1.5 py-0.5 rounded">NOVO</span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1 hover:bg-muted rounded transition-colors" aria-label="Recolher"><ChevronDown size={14} /></button>
                  <button className="p-1 hover:bg-muted rounded transition-colors" aria-label="Atualizar"><Activity size={14} /></button>
                  <button className="p-1 hover:bg-muted rounded transition-colors" aria-label="Fechar"><X size={14} /></button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left py-2.5 px-4 text-xs font-semibold uppercase text-muted-foreground">Trimestre</th>
                      <th className="text-right py-2.5 px-3 text-xs font-semibold uppercase text-muted-foreground">Receita</th>
                      <th className="text-right py-2.5 px-3 text-xs font-semibold uppercase text-muted-foreground">Despesa</th>
                      <th className="text-right py-2.5 px-3 text-xs font-semibold uppercase text-muted-foreground">Margem</th>
                      <th className="py-2.5 px-3 w-12" />
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { q: "Trimestre 1", period: "Jan – Mar 2026", rev: "R$ 210k", exp: "R$ 165k", margin: "R$ 45k", pct: 65 },
                      { q: "Trimestre 2", period: "Abr – Jun 2026", rev: "R$ 225k", exp: "R$ 175k", margin: "R$ 50k", pct: 72 },
                      { q: "Trimestre 3", period: "Jul – Set 2026", rev: "R$ 240k", exp: "R$ 190k", margin: "R$ 50k", pct: 78 },
                      { q: "Trimestre 4", period: "Out – Dez 2026", rev: "R$ 260k", exp: "R$ 195k", margin: "R$ 65k", pct: 85 },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                        <td className="py-3 px-4">
                          <p className="font-semibold text-sm">{row.q}</p>
                          <p className="text-[10px] text-muted-foreground">{row.period}</p>
                        </td>
                        <td className="text-right py-3 px-3 text-sm">{row.rev}</td>
                        <td className="text-right py-3 px-3 text-sm">{row.exp}</td>
                        <td className="text-right py-3 px-3 text-sm font-medium">{row.margin}</td>
                        <td className="py-3 px-3">
                          <MiniDonut value={row.pct} size={28} color="text-primary" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary card - Orders */}
            <div className="bg-card border border-border rounded-lg p-5 flex flex-col">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-foreground">421</span>
                  <span className="text-sm text-muted-foreground">Ordens</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Você recebeu 421 novas ordens, indicando uma tendência saudável de vendas no período.
                </p>
              </div>
              <div className="flex items-end gap-[2px] h-16">
                {[30, 50, 40, 60, 45, 70, 55, 80, 65, 85, 75, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-primary/30 hover:bg-primary/60 transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* Summary card - Products (dark style) */}
            <div className="bg-primary rounded-lg p-5 text-primary-foreground flex flex-col">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">185</span>
                  <span className="text-sm opacity-70">Produtos</span>
                </div>
                <p className="text-sm opacity-70 mb-4">
                  Você possui 185 produtos ativos disponíveis no inventário do sistema.
                </p>
              </div>
              <div className="flex items-end gap-[2px] h-16">
                {[45, 60, 35, 75, 50, 80, 65, 55, 70, 85, 60, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-primary-foreground/20 hover:bg-primary-foreground/40 transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== ROW 6: Mixed metric cards ===== */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Cards mistos de indicadores</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Profit card */}
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-foreground">R$ 12,50k</span>
                <span className="text-sm text-muted-foreground">Lucro</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Lucro total de R$ 12.500 neste mês, mostrando crescimento estável e positivo.</p>
              <MiniSparkline data={[20, 35, 25, 50, 45, 60, 55, 70, 65, 80, 75, 85]} color="text-success" width={200} height={40} />
            </div>

            {/* Revenue goal */}
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Meta de receita</span>
                <span className="text-xs font-semibold text-success">87% alcançado</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden mb-3" role="progressbar" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100}>
                <div className="h-full bg-gradient-to-r from-primary to-success rounded-full" style={{ width: "87%" }} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-lg font-bold text-foreground">R$ 870K</p>
                  <p className="text-[10px] text-muted-foreground">Atual</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-muted-foreground/50">R$ 1M</p>
                  <p className="text-[10px] text-muted-foreground">Meta</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">R$ 130K</p>
                  <p className="text-[10px] text-muted-foreground">Faltam</p>
                </div>
              </div>
            </div>

            {/* Multi-stat card */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h4 className="text-sm font-semibold mb-4">Resumo do período</h4>
              <div className="space-y-3">
                {[
                  { label: "Receita", value: "R$ 1.240K", trend: "+8,2%", up: true, pct: 78 },
                  { label: "Despesas", value: "R$ 840K", trend: "-2,1%", up: false, pct: 55 },
                  { label: "Lucro", value: "R$ 400K", trend: "+12%", up: true, pct: 42 },
                  { label: "Fluxo de caixa", value: "R$ 720K", trend: "+5,6%", up: true, pct: 65 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                        <span className={`text-[10px] font-semibold ${item.up ? "text-success" : "text-error"}`}>{item.trend}</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${item.up ? "bg-primary" : "bg-secondary"}`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-foreground w-24 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>
  );
}
