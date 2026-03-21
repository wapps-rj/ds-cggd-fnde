import { PageHeader } from "@/components/DSComponents";

export default function TemplatesPage() {
  const templates = [
    { title: "Dashboard Institucional", desc: "Painel com indicadores, gráficos e resumos executivos.", preview: "bg-fnde-blue-50" },
    { title: "Tela de Listagem", desc: "Tabela com filtros, busca e paginação.", preview: "bg-fnde-orange-50" },
    { title: "Tela de Formulário", desc: "Formulário com validação, steps e feedback.", preview: "bg-fnde-blue-50" },
    { title: "Tela de Detalhe", desc: "Visualização detalhada de um registro.", preview: "bg-fnde-orange-50" },
    { title: "Página de Autenticação", desc: "Login com campos, logo e branding FNDE.", preview: "bg-fnde-blue-50" },
    { title: "Página de Erro", desc: "404, 500 e erros genéricos com ação de retorno.", preview: "bg-fnde-orange-50" },
    { title: "Página com Filtros e Tabela", desc: "Combinação de sidebar de filtros com tabela de resultados.", preview: "bg-fnde-blue-50" },
  ];

  return (
    <div>
      <PageHeader title="Templates" description="Padrões de página pré-definidos para os principais fluxos de uso dos produtos digitais do FNDE." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map(t => (
          <div key={t.title} className="fnde-card overflow-hidden">
            <div className={`h-32 ${t.preview} rounded-lg mb-4 flex items-center justify-center`}>
              <div className="w-4/5 space-y-2">
                <div className="h-3 bg-primary/10 rounded w-1/3" />
                <div className="flex gap-2">
                  <div className="h-16 bg-primary/10 rounded flex-1" />
                  <div className="h-16 bg-primary/10 rounded flex-1" />
                </div>
                <div className="h-3 bg-primary/10 rounded w-2/3" />
              </div>
            </div>
            <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
            <p className="text-xs text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
