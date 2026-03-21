import { useNavigate } from "react-router-dom";
import {
  Palette, Code2, Component, LayoutTemplate, Stamp, FileText,
  Accessibility, ArrowRight, BookOpen, Users, Shield, Lightbulb
} from "lucide-react";
import { PageHeader } from "@/components/DSComponents";

const sections = [
  { icon: <Palette size={24} />, title: "Fundamentos", desc: "Tipografia, cores, iconografia, grid e espaçamento", path: "/fundamentos", color: "bg-fnde-blue-50 text-fnde-blue" },
  { icon: <Code2 size={24} />, title: "Tokens", desc: "CSS Custom Properties documentados e prontos para uso", path: "/tokens", color: "bg-fnde-orange-50 text-fnde-orange" },
  { icon: <Component size={24} />, title: "Componentes", desc: "Botões, inputs, cards, tabelas, modais e mais", path: "/componentes", color: "bg-fnde-blue-50 text-fnde-blue" },
  { icon: <LayoutTemplate size={24} />, title: "Templates", desc: "Padrões de página: dashboard, listagem, formulário", path: "/templates", color: "bg-fnde-orange-50 text-fnde-orange" },
  { icon: <Stamp size={24} />, title: "Marca FNDE", desc: "Logo, identidade visual, zona de segurança e aplicações", path: "/marca", color: "bg-fnde-blue-50 text-fnde-blue" },
  { icon: <FileText size={24} />, title: "Conteúdo", desc: "Voz da marca, tom de voz, boas práticas de escrita", path: "/conteudo", color: "bg-fnde-orange-50 text-fnde-orange" },
  { icon: <Accessibility size={24} />, title: "Acessibilidade", desc: "Contraste, navegação por teclado, ARIA, foco visível", path: "/acessibilidade", color: "bg-fnde-blue-50 text-fnde-blue" },
];

const principles = [
  { icon: <Users size={20} />, title: "Acessível", desc: "Disponível para todos, em todo território brasileiro." },
  { icon: <Shield size={20} />, title: "Confiável", desc: "Lisura, integridade e responsabilidade em cada detalhe." },
  { icon: <Lightbulb size={20} />, title: "Inovador", desc: "Tecnologias e práticas modernas a serviço da educação." },
  { icon: <BookOpen size={20} />, title: "Claro", desc: "Comunicação plural, acessível e de fácil entendimento." },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader
        title="Design System FNDE"
        description="Guia visual, técnico e operacional para o time de desenvolvimento da CGGD / FNDE. Transformando vidas por meio da educação."
        badge="v1.0.0"
      />

      {/* Hero */}
      <div className="rounded-xl bg-primary text-primary-foreground p-8 md:p-10 mb-10">
        <p className="text-sm font-medium opacity-80 mb-2">CGGD · Coordenação Geral de Governança</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Dedicação total por uma educação em contínua evolução
        </h2>
        <p className="opacity-80 max-w-2xl leading-relaxed mb-6">
          Este Design System serve como referência de UI, biblioteca de padrões e guia de implementação para a 
          padronização visual e técnica de produtos digitais do FNDE. Construído com base no Padrão Digital de 
          Governo (gov.br) e na identidade visual oficial do FNDE.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate("/fundamentos")}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Começar <ArrowRight size={16} />
          </button>
          <button
            onClick={() => navigate("/componentes")}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-2 rounded font-medium text-sm hover:bg-primary-foreground/20 transition-colors"
          >
            Ver componentes
          </button>
        </div>
      </div>

      {/* Principles */}
      <h2 className="text-xl font-bold mb-4">Princípios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {principles.map((p) => (
          <div key={p.title} className="fnde-card">
            <div className="w-10 h-10 rounded-lg bg-fnde-blue-50 text-fnde-blue flex items-center justify-center mb-3">
              {p.icon}
            </div>
            <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
            <p className="text-xs text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Sections */}
      <h2 className="text-xl font-bold mb-4">Navegue pelo sistema</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {sections.map((s) => (
          <button
            key={s.path}
            onClick={() => navigate(s.path)}
            className="fnde-card-hover text-left group"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${s.color}`}>
              {s.icon}
            </div>
            <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
            <p className="text-xs text-muted-foreground">{s.desc}</p>
          </button>
        ))}
      </div>

      {/* Status */}
      <div className="fnde-card">
        <h2 className="text-lg font-bold mb-3">Status do sistema</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">20+</p>
            <p className="text-xs text-muted-foreground">Componentes</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-secondary">50+</p>
            <p className="text-xs text-muted-foreground">Tokens</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">7</p>
            <p className="text-xs text-muted-foreground">Templates</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-secondary">AA</p>
            <p className="text-xs text-muted-foreground">Contraste WCAG</p>
          </div>
        </div>
      </div>
    </div>
  );
}
