import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu, Sun, Moon, X, Search, ChevronDown, ChevronRight,
  Home, BarChart3, PieChart as PieChartIcon, TrendingUp, 
  Filter, Eye, Download, ArrowLeft, MoreVertical,
  Calendar, Layers, Target, Info
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from "recharts";
import fndeLogoCompleta from "@/assets/logo-fnde-completa.svg";
import marcaGov from "@/assets/marca-gov.png";
import iconeFndeNegativo from "@/assets/icone-fnde-negativo.svg";
import { useTheme } from "@/hooks/useTheme";

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

const statusData = [
  { name: "Concluído", valor: 85 },
  { name: "Em Andamento", valor: 65 },
  { name: "Pendente", valor: 45 },
  { name: "Atrasado", valor: 25 },
];

function KPICard({ title, value, change, icon: Icon, trend }: { 
  title: string; value: string; change: string; icon: any; trend: "up" | "down" 
}) {
  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-primary/5 rounded-lg text-primary">
          <Icon size={20} />
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreVertical size={16} />
        </button>
      </div>
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-foreground">{value}</h3>
        <p className={`text-xs mt-2 flex items-center gap-1 font-semibold ${trend === "up" ? "text-emerald-600" : "text-rose-600"}`}>
          {trend === "up" ? <TrendingUp size={12} /> : <TrendingUp size={12} className="rotate-180" />}
          {change}
          <span className="text-muted-foreground font-normal ml-1">vs mês anterior</span>
        </p>
      </div>
    </div>
  );
}

export default function DashboardBIPage() {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] flex flex-col font-sans">
      <Link
        to="/templates"
        className="fixed top-3 right-3 z-50 flex items-center gap-1.5 px-3 py-1.5 bg-foreground/90 text-background text-xs rounded-full shadow-lg hover:bg-foreground transition-colors"
      >
        <ArrowLeft size={12} /> Voltar ao DS
      </Link>

      {/* ═══ HEADER (Fundo claro · Marca completa + Gov.br) ═══ */}
      <header className="bg-[#FBDFA2] border-b border-[#0d3857]/10 flex items-center px-6 py-3 gap-6 min-h-[72px] shrink-0 sticky top-0 z-40">
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="p-2 hover:bg-[#0d3857]/10 rounded-lg transition-colors text-[#0d3857]"
        >
          <Menu size={22} />
        </button>

        <div className="flex items-center gap-4 shrink-0">
          <img src={fndeLogoCompleta} alt="FNDE" className="h-10 w-auto" />
        </div>

        <div className="w-px h-10 bg-[#0d3857]/20 shrink-0 hidden md:block" />
        
        <div className="flex-1 hidden md:block">
          <h1 className="text-lg font-bold text-[#0d3857] leading-tight">Painel Executivo de BI</h1>
          <p className="text-xs text-[#0d3857]/70 font-medium">Análise de Indicadores e Performance Institucional</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0d3857]/50" />
            <input 
              type="text" 
              placeholder="Pesquisar métricas..." 
              className="bg-white/40 border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 ring-[#0d3857]/20 transition-all placeholder:text-[#0d3857]/40"
            />
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2.5 hover:bg-[#0d3857]/10 rounded-full transition-colors text-[#0d3857]"
          >
            {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <div className="w-px h-10 bg-[#0d3857]/20 shrink-0" />
          <img src={marcaGov} alt="Gov.br" className="h-10 w-auto" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* ─── Sidebar ─── */}
        <aside className={`${sidebarOpen ? "w-64" : "w-0"} bg-[#0d3857] text-white transition-all duration-300 flex flex-col overflow-hidden`}>
          <div className="p-6 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D98217] rounded-lg flex items-center justify-center font-bold text-white shadow-inner">BI</div>
            <span className="font-bold tracking-tight text-lg">Analytics</span>
          </div>
          
          <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-4 mb-2">Principal</div>
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-sm font-semibold transition-all">
              <BarChart3 size={18} /> Dashboard BI
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl text-sm transition-all">
              <Layers size={18} /> Exploração de Dados
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl text-sm transition-all">
              <Target size={18} /> Metas e KPIs
            </button>
            
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-4 mt-8 mb-2">Relatórios</div>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl text-sm transition-all">
              <Calendar size={18} /> Mensal Consolidado
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl text-sm transition-all">
              <Info size={18} /> Relatórios de Auditoria
            </button>
          </nav>
          
          <div className="p-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FBDFA2] flex items-center justify-center text-[#0d3857] font-bold border-2 border-white/20">US</div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate">Usuário Admin</p>
                <p className="text-xs text-white/50 truncate text-ellipsis">admin@fnde.gov.br</p>
              </div>
            </div>
          </div>
        </aside>

        {/* ─── Main Content ─── */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Page Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Visão Geral</h2>
                <p className="text-slate-500 text-sm mt-1">Última atualização: hoje às 14:35</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
                  <Filter size={16} /> Filtros Avançados
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#D98217] text-white rounded-lg text-sm font-semibold hover:bg-[#c27415] transition-colors shadow-sm">
                  <Download size={16} /> Exportar PDF
                </button>
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <KPICard title="Repasse Total" value="R$ 12.4M" change="+12.5%" icon={BarChart3} trend="up" />
              <KPICard title="Projetos Ativos" value="342" change="+4.3%" icon={Layers} trend="up" />
              <KPICard title="Taxa de Execução" value="78.4%" change="-2.1%" icon={Target} trend="down" />
              <KPICard title="Novas Demandas" value="1.2k" change="+18.7%" icon={TrendingUp} trend="up" />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Line Chart */}
              <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold text-slate-800 dark:text-white">Evolução dos Repasses</h4>
                  <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                    <button className="px-3 py-1 text-xs font-bold rounded-md bg-white dark:bg-slate-700 shadow-sm">Mensal</button>
                    <button className="px-3 py-1 text-xs font-semibold text-slate-500">Anual</button>
                  </div>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0D3857" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#0D3857" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                      <Tooltip 
                        contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                      />
                      <Area type="monotone" dataKey="valor" stroke="#0D3857" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <h4 className="font-bold text-slate-800 dark:text-white mb-8">Distribuição por Programa</h4>
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3 mt-4">
                  {categoryData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{item.name}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-800 dark:text-white">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bar Chart */}
              <div className="lg:col-span-3 bg-card rounded-xl border border-border p-6 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold text-slate-800 dark:text-white">Status de Execução dos Convênios</h4>
                  <button className="text-primary text-sm font-semibold hover:underline">Ver tudo</button>
                </div>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={statusData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 500, fill: '#334155'}} width={100} />
                      <Tooltip cursor={{fill: 'transparent'}} />
                      <Bar dataKey="valor" fill="#D98217" radius={[0, 4, 4, 0]} barSize={32} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
