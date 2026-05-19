import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu, Sun, Moon, X, Search, ChevronDown, ChevronRight,
  Home, BarChart3, PieChart as PieChartIcon, TrendingUp, 
  Filter, Eye, Download, ArrowLeft, MoreVertical,
  Calendar, Layers, Target, Info, FileText, Bell, Shield, Settings, HelpCircle, Folder, FileCheck, FileX, Clock, ShieldCheck, RefreshCw
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area
} from "recharts";
import fndeLogoReduzida from "@/assets/logo-fnde-reduzida.png";
import marcaGov from "@/assets/marca-gov.png";
import iconeFndeNegativo from "@/assets/icone-fnde-negativo.svg";
import { useTheme } from "@/hooks/useTheme";

/* ─── Menu items ─── */
interface MenuItem {
  label: string;
  icon: React.ReactNode;
  children?: { label: string }[];
}

const menuItems: MenuItem[] = [
  { label: "Início", icon: <Home size={16} /> },
  {
    label: "Análises", icon: <BarChart3 size={16} />,
    children: [{ label: "Execução Orçamentária" }, { label: "Repasses FNDE" }, { label: "Indicadores de Gestão" }],
  },
  {
    label: "Relatórios", icon: <FileText size={16} />,
    children: [{ label: "Mensal Consolidado" }, { label: "Relatórios de Auditoria" }, { label: "Exportações" }],
  },
  { label: "Metas e KPIs", icon: <Target size={16} /> },
  { label: "Notificações", icon: <Bell size={16} /> },
  { label: "Segurança", icon: <Shield size={16} /> },
  { label: "Configurações", icon: <Settings size={16} /> },
  { label: "Ajuda", icon: <HelpCircle size={16} /> },
];

/* ─── Dashboard data ─── */
const revenueData = [
  { name: "Jan", valor: 4500 },
  { name: "Fev", valor: 5200 },
  { name: "Mar", valor: 4800 },
  { name: "Abr", valor: 6100 },
  { name: "Mai", valor: 5900 },
  { name: "Jun", valor: 7200 },
];

const categoryData = [
  { name: "PNAE", value: 40, color: "#0D3857" },
  { name: "PNATE", value: 25, color: "#D98217" },
  { name: "PDDE", value: 20, color: "#F0C06D" },
  { name: "Outros", value: 15, color: "#CBD5E1" },
];

const tableRows = [
  { id: "00001", servidor: "Ana Silva Pereira", diretoria: "Diretoria A", status: "Concluído", prazo: "20 Dias", descontos: "R$ 600,00", modalidade: "40h bimestral", unidade: "CGGD/FNDE", statusTag: "Regular" },
  { id: "00002", servidor: "Bruno Souza Lima", diretoria: "Diretoria A", status: "Em ajuste", prazo: "15 Dias", descontos: "R$ 450,00", modalidade: "40h bimestral", unidade: "CGGD/FNDE", statusTag: "Atenção" },
  { id: "00003", servidor: "Carla Mendes Rocha", diretoria: "Diretoria B", status: "Concluído", prazo: "30 Dias", descontos: "R$ 720,00", modalidade: "40h bimestral", unidade: "DIRAE/FNDE", statusTag: "Regular" },
  { id: "00004", servidor: "Diego Alves Castro", diretoria: "Diretoria C", status: "Em ajuste", prazo: "10 Dias", descontos: "R$ 380,00", modalidade: "40h bimestral", unidade: "DIRAE/FNDE", statusTag: "Em Ajuste" },
];

function StatusDot({ status }: { status: string }) {
  const color = status === "Regular" ? "#16A34A" : status === "Atenção" ? "#DC2626" : "#0D3857";
  return (
    <span className="flex items-center gap-1.5 text-xs">
      <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />
      {status}
    </span>
  );
}

function KPICard({ icon: Icon, title, subtitle, value, borderColor }: {
  icon: React.ElementType; title: string; subtitle: string; value: string; borderColor: string;
}) {
  return (
    <div className="bg-card rounded-lg border border-border p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: borderColor }} />
      <p className="text-xs font-semibold mt-1" style={{ color: borderColor }}>{title}</p>
      <p className="text-[10px] text-muted-foreground">{subtitle}</p>
      <div className="flex items-center gap-2 mt-2">
        <Icon size={20} className="text-muted-foreground" />
        <span className="text-2xl font-bold text-foreground">{value}</span>
      </div>
    </div>
  );
}

export default function DashboardBIPage() {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ Análises: true });
  const [activeItem, setActiveItem] = useState("Dashboard BI");
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const query = searchQuery.toLowerCase().trim();
  const filteredItems = query
    ? menuItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query) ||
          item.children?.some((c) => c.label.toLowerCase().includes(query))
      )
    : menuItems;

  const handleItemClick = (item: MenuItem) => {
    setActiveItem(item.label);
    if (item.children) {
      setExpanded((prev) => ({ ...prev, [item.label]: !prev[item.label] }));
    }
  };

  return (
    <div className="min-h-screen bg-[#EFF3F8] dark:bg-background flex flex-col font-sans">
      <Link
        to="/templates"
        className="fixed top-3 right-3 z-50 flex items-center gap-1.5 px-3 py-1.5 bg-foreground/90 text-background text-xs rounded-full shadow-lg hover:bg-foreground transition-colors"
      >
        <ArrowLeft size={12} /> Voltar ao DS
      </Link>

      {/* ═══ HEADER (Fundo claro · Marca reduzida + Gov.br) ═══ */}
      <header className="bg-[#FBDFA2] flex items-center px-5 py-3 gap-4 min-h-[64px] shrink-0 sticky top-0 z-40">
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="p-2 hover:bg-[#0d3857]/10 rounded transition-colors flex items-center gap-1.5 shrink-0"
        >
          <Menu size={20} className="text-[#0d3857]" />
          <span className="text-xs text-[#0d3857]/70 hidden sm:inline font-semibold">Menu</span>
        </button>

        <img src={fndeLogoReduzida} alt="FNDE" className="h-9 w-auto shrink-0" />

        <div className="w-px h-8 bg-[#0d3857]/30 shrink-0" />
        <div className="flex-1 min-w-0 hidden md:block">
          <p className="text-sm font-bold text-[#0d3857] leading-tight">
            Painel Executivo de BI
          </p>
          <p className="text-xs text-[#0d3857]/70 leading-tight font-medium">
            Análise de Indicadores e Performance Institucional
          </p>
        </div>
        <div className="flex-1 md:hidden" />

        <button
          onClick={toggleTheme}
          className="p-1.5 hover:bg-[#0d3857]/10 rounded transition-colors shrink-0"
        >
          {theme === "dark" ? <Moon size={16} className="text-[#0d3857]/70" /> : <Sun size={16} className="text-[#0d3857]/70" />}
        </button>

        <img src={marcaGov} alt="Gov.br" className="h-10 w-auto shrink-0" />
      </header>

      <div className="flex-1 flex min-h-0">
        {/* ─── Sidebar ─── */}
        {sidebarOpen && (
          <aside className="w-[260px] bg-[#0d3857] text-white flex flex-col shrink-0 border-r border-[#0d3857]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <img src={iconeFndeNegativo} alt="FNDE" className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-tight">BI ANALYTICS</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="p-1 rounded hover:bg-white/10 transition-colors">
                <X size={16} />
              </button>
            </div>

            <div className="px-3 py-2">
              <div className="relative">
                <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Buscar no menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 text-white text-xs rounded pl-8 pr-8 py-2 placeholder:text-white/40 border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#D98217]/50"
                />
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 pb-4">
              {filteredItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => handleItemClick(item)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-sm transition-colors ${
                      activeItem === item.label ? "bg-white/15 text-white font-medium" : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="flex-1 text-left text-[13px]">{item.label}</span>
                    {item.children && (expanded[item.label] ? <ChevronDown size={14} className="text-white/40" /> : <ChevronRight size={14} className="text-white/40" />)}
                  </button>
                  {item.children && expanded[item.label] && (
                    <div className="ml-7 mt-0.5 space-y-0.5 mb-1">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => setActiveItem(child.label)}
                          className={`block w-full text-left text-xs px-3 py-1.5 rounded transition-colors ${
                            activeItem === child.label ? "text-white bg-white/10 font-medium" : "text-white/50 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="border-t border-white/10 px-3 py-2">
              <div className="flex items-center gap-2 px-2 py-1.5 text-white/50 text-[10px]">
                <Folder size={12} />
                <span>UNIDADE · BI/FNDE</span>
              </div>
            </div>
          </aside>
        )}

        {/* ─── Main Content ─── */}
        <main className="flex-1 min-w-0 overflow-x-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 px-5 py-2.5 bg-card border-b border-border text-xs">
            <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-[#D98217]">
              <Home size={12} />
              <span>Início</span>
            </a>
            <ChevronRight size={12} className="text-muted-foreground/50" />
            <a href="#" className="text-muted-foreground hover:text-[#D98217]">Painéis de BI</a>
            <ChevronRight size={12} className="text-muted-foreground/50" />
            <span className="font-semibold text-[#0d3857] dark:text-white">Dashboard BI</span>
          </nav>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 px-5 py-2 bg-card border-b border-border">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0d3857] text-white text-xs rounded">
              <Filter size={12} /> Filtros Avançados
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#D98217] text-white text-xs rounded">
              <Download size={12} /> Exportar PDF
            </button>
          </div>

          <div className="p-5 space-y-4">
            {/* KPIs */}
            <div className="bg-card rounded-lg border border-border p-3">
              <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">
                <span className="font-bold italic">Visão Geral:</span> Principais Métricas de Performance
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <KPICard icon={BarChart3} title="Repasse Total" subtitle="vs mês anterior (+12.5%)" value="R$ 12.4M" borderColor="#0D3857" />
                <KPICard icon={Layers} title="Projetos Ativos" subtitle="Novos projetos (+4.3%)" value="342" borderColor="#D98217" />
                <KPICard icon={Target} title="Taxa de Execução" subtitle="Meta mensal (-2.1%)" value="78.4%" borderColor="#16A34A" />
                <KPICard icon={TrendingUp} title="Novas Demandas" subtitle="Crescimento (+18.7%)" value="1.2k" borderColor="#D98217" />
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Area Chart */}
              <div className="lg:col-span-2 bg-card rounded-lg border border-border p-4">
                <p className="text-sm font-bold text-[#D98217] mb-4">Evolução dos Repasses</p>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0D3857" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#0D3857" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                      <Area type="monotone" dataKey="valor" stroke="#0D3857" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="bg-card rounded-lg border border-border p-4">
                <p className="text-sm font-bold text-[#D98217] mb-4">Distribuição por Programa</p>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={categoryData} dataKey="value" innerRadius={40} outerRadius={65} paddingAngle={4} strokeWidth={0}>
                        {categoryData.map((d, i) => <Cell key={i} fill={d.color} />)}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-2">
                  {categoryData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-muted-foreground font-medium">{item.name}</span>
                      </div>
                      <span className="font-bold text-foreground">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-bold text-[#D98217]">Detalhamento de Execução</p>
                <div className="flex items-center gap-3">
                  <StatusDot status="Atenção" />
                  <StatusDot status="Regular" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs" style={{ minWidth: 800 }}>
                  <thead>
                    <tr className="bg-[#0d3857] text-white">
                      <th className="px-3 py-2 text-left font-medium">ID</th>
                      <th className="px-3 py-2 text-left font-medium">Servidor Responsável</th>
                      <th className="px-3 py-2 text-left font-medium">Diretoria</th>
                      <th className="px-3 py-2 text-left font-medium">Status de Fluxo</th>
                      <th className="px-3 py-2 text-left font-medium">Prazo Estimado</th>
                      <th className="px-3 py-2 text-left font-medium">Unidade Gestora</th>
                      <th className="px-3 py-2 text-left font-medium">Status Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                        <td className="px-3 py-2 text-muted-foreground">{r.id}</td>
                        <td className="px-3 py-2 font-medium">{r.servidor}</td>
                        <td className="px-3 py-2">{r.diretoria}</td>
                        <td className="px-3 py-2">{r.status}</td>
                        <td className="px-3 py-2">{r.prazo}</td>
                        <td className="px-3 py-2">{r.unidade}</td>
                        <td className="px-3 py-2"><StatusDot status={r.statusTag} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Institutional Footer */}
          <div className="flex items-center justify-end gap-3 px-5 py-3 border-t border-border bg-muted/30">
            <img src={fndeLogoReduzida} alt="FNDE" className="h-5 w-auto opacity-60" />
            <span className="text-[10px] text-muted-foreground">Dashboard BI · Analytics v.2.0</span>
          </div>
        </main>
      </div>
    </div>
  );
}
