import { useState } from "react";
import {
  BarChart3, FileText, Users, Shield, Landmark, BookOpen,
  GraduationCap, Building2, Scale, PieChart, ClipboardList,
  TrendingUp, Search, X, Moon, Sun
} from "lucide-react";
import { ComponentPreview } from "@/components/DSComponents";
import logoFndeCompleta2 from "@/assets/logo-fnde-completa-2.svg";

interface PainelCard {
  id: string;
  sigla: string;
  siglaCor: string;
  titulo: string;
  descricao: string;
  icon: React.ReactNode;
}

const paineis: PainelCard[] = [
  {
    id: "gestao-atas",
    sigla: "GDDE",
    siglaCor: "bg-fnde-blue",
    titulo: "Painel de Gestão de ATAS",
    descricao: "Painel estratégico para monitorar a recuperação de créditos, aprimorando a gestão financeira.",
    icon: <ClipboardList size={32} />,
  },
  {
    id: "ouvidoria-sic",
    sigla: "SIGLA",
    siglaCor: "bg-fnde-orange",
    titulo: "Ouvidoria SIC",
    descricao: "Painel do Setor de Ouvidoria (SIC) para monitoramento das manifestações dos cidadãos.",
    icon: <Users size={32} />,
  },
  {
    id: "ouvidoria-gestao",
    sigla: "SIGLA",
    siglaCor: "bg-fnde-orange",
    titulo: "Ouvidoria e Gestão de Ouvidoria",
    descricao: "Painel da Ouvidoria e Gestão de Ouvidoria do FNDE para acompanhamento das manifestações.",
    icon: <FileText size={32} />,
  },
  {
    id: "cadastro-base",
    sigla: "DIRT",
    siglaCor: "bg-fnde-blue",
    titulo: "Cadastro Base — Prefeitos e Secretários",
    descricao: "Acompanhamento da situação dos prefeitos e secretários municipais e estaduais da educação.",
    icon: <Building2 size={32} />,
  },
  {
    id: "painel-pdtic",
    sigla: "DIRTI",
    siglaCor: "bg-fnde-blue",
    titulo: "Painel PDTIC",
    descricao: "Painel do Plano Diretor de Tecnologia da Informação e Comunicação do órgão.",
    icon: <BarChart3 size={32} />,
  },
  {
    id: "pacto-retomada",
    sigla: "DIGAP",
    siglaCor: "bg-fnde-blue",
    titulo: "Pacto de Retomada",
    descricao: "Acompanhamento do Pacto Nacional pela Retomada de Obras da Educação Básica.",
    icon: <Landmark size={32} />,
  },
  {
    id: "reprogramacao-saldos",
    sigla: "DIFIN",
    siglaCor: "bg-success",
    titulo: "Reprogramação de Saldos",
    descricao: "Acompanhamento de Saldos a serem passíveis de reprogramação financeira.",
    icon: <TrendingUp size={32} />,
  },
  {
    id: "gestao-orcamentaria",
    sigla: "DIFIN",
    siglaCor: "bg-success",
    titulo: "Gestão Orçamentária e Financeira",
    descricao: "Acompanhamento do orçamento e da execução orçamentária do FNDE.",
    icon: <PieChart size={32} />,
  },
  {
    id: "prestacao-contas",
    sigla: "DIFIN",
    siglaCor: "bg-success",
    titulo: "Gestão de Prestação de Contas",
    descricao: "Painel de monitoramento transparente dos processos de prestação de contas.",
    icon: <Scale size={32} />,
  },
  {
    id: "pdde-basico",
    sigla: "PDDE",
    siglaCor: "bg-fnde-orange",
    titulo: "PDDE Básico",
    descricao: "O PDDE é um programa que transfere recursos diretamente às escolas públicas.",
    icon: <GraduationCap size={32} />,
  },
  {
    id: "atividade-coger",
    sigla: "SIGLA",
    siglaCor: "bg-fnde-orange",
    titulo: "Atividade COGER",
    descricao: "A COGER do FNDE atua na atividade correicional, apurando irregularidades.",
    icon: <Shield size={32} />,
  },
  {
    id: "escola-integral",
    sigla: "SIGLA",
    siglaCor: "bg-fnde-orange",
    titulo: "Programa Escola em Tempo Integral",
    descricao: "Os recursos do Programa apoiam a ampliação da jornada escolar.",
    icon: <BookOpen size={32} />,
  },
];

function FlipCard({ card }: { card: PainelCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[280px] perspective-1000"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl border border-border bg-card shadow-sm overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex-1 bg-gradient-to-br from-muted/60 to-muted/30 flex items-center justify-center text-muted-foreground/40">
            {card.icon}
          </div>
          <div className="relative px-4 pb-4 pt-2">
            <span className={`absolute -top-3 right-4 text-[10px] font-bold text-white px-2.5 py-0.5 rounded ${card.siglaCor}`}>
              {card.sigla}
            </span>
            <h4 className="font-semibold text-sm text-foreground leading-tight mt-1">{card.titulo}</h4>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{card.descricao}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl border border-fnde-blue bg-fnde-blue text-white overflow-hidden flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="mb-3 opacity-80">{card.icon}</div>
          <h4 className="font-semibold text-sm mb-2">{card.titulo}</h4>
          <p className="text-xs opacity-80 mb-4 line-clamp-3">{card.descricao}</p>
          <button className="bg-white text-fnde-blue font-semibold text-xs px-5 py-2 rounded-lg hover:bg-white/90 transition-colors">
            Acessar Painel
          </button>
        </div>
      </div>
    </div>
  );
}

function HubPaineisPreview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filtered = searchTerm
    ? paineis.filter(
        (p) =>
          p.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.sigla.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : paineis;

  return (
    <div className={`rounded-xl border border-border overflow-hidden ${darkMode ? "dark bg-[#1a1a2e]" : "bg-background"}`}>
      {/* Header */}
      <div className="h-[60px] flex items-center px-4 gap-3 border-b" style={{ backgroundColor: darkMode ? "#1e293b" : "#FBDFA2" }}>
        <img src={logoFndeCompleta2} alt="FNDE" className="h-6" />
        <div className="h-5 w-px bg-foreground/20" />
        <span className="font-semibold text-xs" style={{ color: "#0D3857" }}>Hub de Painéis Gerenciais</span>
        <div className="ml-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded hover:bg-black/10 transition-colors"
          >
            {darkMode ? <Sun size={14} style={{ color: "#0D3857" }} /> : <Moon size={14} style={{ color: "#0D3857" }} />}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-center py-4 px-4">
        <div className="relative w-full max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar painel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-muted/50 text-foreground text-xs rounded-lg pl-9 pr-9 py-2.5 border border-border focus:outline-none focus:ring-1 focus:ring-fnde-blue placeholder:text-muted-foreground"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-4 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground text-sm">
            Nenhum painel encontrado para "{searchTerm}"
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-border py-4 px-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <img src={logoFndeCompleta2} alt="FNDE" className="h-5 opacity-60" />
        </div>
        <p className="text-[10px] text-muted-foreground mt-1">FNDE | Coordenação Geral de Governança</p>
      </div>
    </div>
  );
}

export default function HubPaineisSection() {
  return (
    <ComponentPreview
      title="Hub de Painéis Gerenciais"
      description="Layout de portal com cards de painéis institucionais. Ao passar o mouse, o card faz um efeito de flip revelando a descrição e o botão de acesso ao painel."
      whenToUse={[
        "Portais de acesso centralizado a múltiplos sistemas ou dashboards",
        "Hubs de painéis gerenciais ou analíticos",
        "Páginas de catálogo de serviços ou ferramentas internas",
      ]}
      accessibility={[
        "Cards possuem foco acessível via teclado",
        "Busca integrada com feedback visual",
        "Contraste adequado em ambos os modos claro e escuro",
      ]}
    >
      <HubPaineisPreview />
    </ComponentPreview>
  );
}
