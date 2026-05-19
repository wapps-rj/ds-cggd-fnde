import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu, Sun, Moon, X, Search, ChevronDown, ChevronRight,
  Home, BarChart3, PieChart as PieChartIcon, TrendingUp, 
  Filter, Eye, Download, ArrowLeft, MoreVertical,
  Calendar, Layers, Target, Info, FileText, Bell, Shield, Settings, HelpCircle, Folder, Map as MapIcon,
  Globe, LayoutGrid, Clock, ArrowUpRight, ArrowDownRight
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, LineChart, Line, ComposedChart
} from "recharts";
import fndeLogoReduzida from "@/assets/logo-fnde-reduzida.png";
import marcaGov from "@/assets/marca-gov.png";
import iconeFndeNegativo from "@/assets/icone-fnde-negativo.svg";
import { useTheme } from "@/hooks/useTheme";
import { BrazilMap } from "@/components/BrazilMap";
import { toast } from "sonner";

/* ─── Mock Data ─── */
const trendData = [
  { name: "Jan", atual: 4500, anterior: 4100 },
  { name: "Fev", atual: 5200, anterior: 4800 },
  { name: "Mar", atual: 4800, anterior: 4600 },
  { name: "Abr", atual: 6100, anterior: 5900 },
  { name: "Mai", atual: 5900, anterior: 5700 },
  { name: "Jun", atual: 7200, anterior: 6800 },
];

const quarterlyData = [
  { name: "1º Trim", repasse: 14500, meta: 13000 },
  { name: "2º Trim", repasse: 19200, meta: 18000 },
  { name: "3º Trim", repasse: 16800, meta: 17000 },
  { name: "4º Trim", repasse: 22100, meta: 20000 },
];

const seasonalityData = [
  { name: "Seg", valor: 120 },
  { name: "Ter", valor: 150 },
  { name: "Qua", valor: 180 },
  { name: "Qui", valor: 140 },
  { name: "Sex", valor: 160 },
  { name: "Sab", valor: 40 },
  { name: "Dom", valor: 20 },
];

const statesData = [
  { id: "SP", value: 450, color: "#0D3857" },
  { id: "RJ", value: 380, color: "#164E63" },
  { id: "MG", value: 320, color: "#0891B2" },
  { id: "BA", value: 280, color: "#D98217" },
  { id: "PR", value: 250, color: "#F0C06D" },
  { id: "RS", value: 210, color: "#0D3857" },
  { id: "SC", value: 190, color: "#164E63" },
  { id: "PE", value: 180, color: "#0891B2" },
  { id: "CE", value: 170, color: "#D98217" },
];

/* ─── Components ─── */
function KPICard({ title, value, percentage, isPositive, icon: Icon, color }: {
  title: string; value: string; percentage: string; isPositive: boolean; icon: any; color: string;
}) {
  return (
    <div className="bg-card rounded-lg border border-border p-4 relative overflow-hidden group hover:shadow-md transition-all">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: color }} />
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-foreground">{value}</h3>
        </div>
        <div className={`p-2 rounded-lg bg-muted/50 text-muted-foreground group-hover:bg-muted transition-colors`}>
          <Icon size={18} />
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3">
        <span className={`flex items-center text-[10px] font-bold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {percentage}
        </span>
        <span className="text-[10px] text-muted-foreground font-medium">vs. período anterior</span>
      </div>
    </div>
  );
}

const menuItems = [
  { label: "Visão Geral", icon: <LayoutGrid size={16} /> },
  { label: "Análise por Estado", icon: <MapIcon size={16} /> },
  { label: "Fluxo de Caixa", icon: <TrendingUp size={16} /> },
  { label: "Relatórios", icon: <FileText size={16} /> },
];

export default function DashboardAnaliticoPage() {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Mensal");

  return (
    <div className="min-h-screen bg-[#EFF3F8] dark:bg-background flex flex-col font-sans">
      <Link
        to="/templates"
        className="fixed top-3 right-3 z-50 flex items-center gap-1.5 px-3 py-1.5 bg-foreground/90 text-background text-xs rounded-full shadow-lg hover:bg-foreground transition-colors"
      >
        <ArrowLeft size={12} /> Voltar ao DS
      </Link>

      {/* ─── HEADER ─── */}
      <header className="bg-[#FBDFA2] flex items-center px-5 py-3 gap-4 min-h-[64px] shrink-0 sticky top-0 z-40 border-b border-[#0d3857]/10">
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="p-2 hover:bg-[#0d3857]/10 rounded transition-colors flex items-center gap-1.5 shrink-0"
        >
          <Menu size={20} className="text-[#0d3857]" />
          <span className="text-xs text-[#0d3857]/70 hidden sm:inline font-bold">Menu</span>
        </button>

        <img src={fndeLogoReduzida} alt="FNDE" className="h-9 w-auto shrink-0" />

        <div className="w-px h-8 bg-[#0d3857]/30 shrink-0" />
        <div className="flex-1 min-w-0 hidden md:block">
          <p className="text-sm font-bold text-[#0d3857] leading-tight">Painel de BI Analítico</p>
          <p className="text-xs text-[#0d3857]/70 leading-tight font-semibold">Monitoramento de Repasses e Sazonalidade</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 hover:bg-[#0d3857]/10 rounded-full transition-colors text-[#0d3857]">
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <div className="w-px h-8 bg-[#0d3857]/30 hidden sm:block" />
          <img src={marcaGov} alt="Gov.br" className="h-10 w-auto shrink-0" />
        </div>
      </header>

      <div className="flex-1 flex min-h-0">
        {/* ─── SIDEBAR ─── */}
        {sidebarOpen && (
          <aside className="w-[260px] bg-[#0d3857] text-white flex flex-col shrink-0 border-r border-[#0d3857]">
            <div className="p-4 border-b border-white/10 flex items-center gap-2">
              <Globe size={20} className="text-[#D98217]" />
              <span className="font-bold text-sm tracking-tight">BI ESTRATÉGICO</span>
            </div>
            <nav className="flex-1 p-2 space-y-1">
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    idx === 0 ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-white/10">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-[10px] font-bold text-white/40 uppercase mb-2">Status do Sistema</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-medium">Dados atualizados hoje</span>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* ─── MAIN CONTENT ─── */}
        <main className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Superior Filters */}
          <div className="bg-card rounded-xl border border-border p-4 shadow-sm flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Período de Análise</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
                <select className="w-full pl-9 pr-4 py-2 bg-muted/30 border-none rounded-lg text-xs font-semibold focus:ring-2 ring-primary/20 appearance-none">
                  <option>Últimos 12 meses (2025-2026)</option>
                  <option>Ano Civil 2025</option>
                  <option>Primeiro Semestre 2026</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={14} />
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Programa / Ação</label>
              <select className="w-full px-4 py-2 bg-muted/30 border-none rounded-lg text-xs font-semibold focus:ring-2 ring-primary/20 appearance-none">
                <option>Todos os Programas</option>
                <option>PNAE - Alimentação Escolar</option>
                <option>PNATE - Transporte Escolar</option>
                <option>PDDE - Dinheiro Direto</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Região / UF</label>
              <select className="w-full px-4 py-2 bg-muted/30 border-none rounded-lg text-xs font-semibold focus:ring-2 ring-primary/20 appearance-none">
                <option>Brasil (Consolidado)</option>
                <option>Norte</option>
                <option>Nordeste</option>
                <option>Centro-Oeste</option>
                <option>Sudeste</option>
                <option>Sul</option>
              </select>
            </div>
            <button className="px-6 py-2 bg-[#0d3857] text-white text-xs font-bold rounded-lg hover:bg-[#0d3857]/90 transition-all flex items-center gap-2 self-end h-[38px]">
              <Filter size={14} /> Aplicar Filtros
            </button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <KPICard title="Repasse Acumulado" value="R$ 1.28 Bi" percentage="14.2%" isPositive={true} icon={BarChart3} color="#0D3857" />
            <KPICard title="Meta de Execução" value="82.5%" percentage="2.1%" isPositive={true} icon={Target} color="#D98217" />
            <KPICard title="Convênios Ativos" value="12.450" percentage="0.8%" isPositive={false} icon={Layers} color="#16A34A" />
            <KPICard title="Tempo Médio" value="14 Dias" percentage="12.5%" isPositive={true} icon={Clock} color="#0891B2" />
          </div>

          {/* Map and Comparison Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Brazil Map Mock */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border p-5 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-bold text-[#0d3857] dark:text-white">Distribuição Territorial de Repasses</h4>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase mt-1">Valores por Unidade da Federação</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 hover:bg-muted rounded"><Download size={14} className="text-muted-foreground" /></button>
                  <button className="p-1.5 hover:bg-muted rounded"><MoreVertical size={14} className="text-muted-foreground" /></button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 w-full flex justify-center py-4 bg-muted/10 rounded-xl relative min-h-[300px]">
                  {/* Simplified Brazil Map Illustration with SVGs */}
                  <svg viewBox="0 0 500 500" className="w-full max-w-[400px] h-auto drop-shadow-lg">
                    {/* Placeholder shapes for regions to simulate a map */}
                    <path d="M150 100 Q 250 50 350 100 Q 400 200 350 350 Q 250 450 150 350 Z" fill="#0D3857" fillOpacity="0.8" className="hover:fill-primary transition-colors cursor-pointer" />
                    <path d="M350 120 Q 450 150 480 250 Q 450 350 380 320 Z" fill="#D98217" fillOpacity="0.8" className="hover:fill-primary transition-colors cursor-pointer" />
                    <circle cx="250" cy="250" r="150" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="250" y="240" fill="white" className="text-[10px] font-bold pointer-events-none" textAnchor="middle">MAPA INTERATIVO</text>
                    <text x="250" y="260" fill="white" className="text-[8px] font-medium opacity-70 pointer-events-none" textAnchor="middle">VISUALIZAÇÃO POR UF</text>
                  </svg>
                </div>
                <div className="w-full md:w-64 space-y-4">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase border-b pb-2">Top 5 Estados</p>
                  {statesData.map((state, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-bold">
                        <span>{state.id}</span>
                        <span>R$ {state.value}M</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${(state.value / 450) * 100}%`, background: state.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quarterly Comparison */}
            <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
              <h4 className="font-bold text-[#0d3857] dark:text-white mb-6">Comparativo Trimestral</h4>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fontSize: 10, fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Bar dataKey="repasse" fill="#0D3857" radius={[4, 4, 0, 0]} barSize={40} />
                    <Line type="monotone" dataKey="meta" stroke="#D98217" strokeWidth={3} dot={{ r: 4, fill: '#D98217' }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[#0D3857]" />
                  <span className="text-[10px] font-bold text-muted-foreground">Repasse Realizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[#D98217]" />
                  <span className="text-[10px] font-bold text-muted-foreground">Meta Estipulada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trend and Seasonality Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Monthly Trend */}
            <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="font-bold text-[#0d3857] dark:text-white">Tendência Mensal</h4>
                  <p className="text-[10px] text-muted-foreground font-medium mt-1">Acompanhamento evolutivo dos repasses</p>
                </div>
                <div className="flex bg-muted/30 p-1 rounded-lg">
                  {["Anual", "Mensal", "Semanal"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                        activeTab === tab ? "bg-white text-[#0d3857] shadow-sm" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData}>
                    <defs>
                      <linearGradient id="colorAtual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D98217" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#D98217" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
                    <Line type="monotone" dataKey="anterior" stroke="#94A3B8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                    <Area type="monotone" dataKey="atual" stroke="#D98217" strokeWidth={3} fillOpacity={1} fill="url(#colorAtual)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 mt-4 border-t pt-4">
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Projeção Próximo Mês</p>
                  <p className="text-lg font-bold text-[#D98217]">R$ 8.1M</p>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Desvio da Média</p>
                  <p className="text-lg font-bold text-emerald-600">+4.2%</p>
                </div>
              </div>
            </div>

            {/* Seasonality Chart */}
            <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
              <h4 className="font-bold text-[#0d3857] dark:text-white mb-6">Sazonalidade do Repasse</h4>
              <p className="text-xs text-muted-foreground mb-6">Distribuição média de volume de repasses por dia da semana para otimização de fluxo.</p>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={seasonalityData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fontSize: 10, fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
                    <Bar dataKey="valor" radius={[10, 10, 10, 10]}>
                      {seasonalityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 2 ? '#0D3857' : '#CBD5E1'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-3 bg-muted/20 rounded-lg flex items-start gap-3">
                <Info size={16} className="text-[#0d3857] mt-0.5 shrink-0" />
                <p className="text-[11px] font-medium text-muted-foreground">
                  Identificamos um pico recorrente às <span className="text-[#0d3857] font-bold">Quartas-feiras</span>. Recomendamos antecipar processos críticos para Segundas e Terças.
                </p>
              </div>
            </div>
          </div>

          {/* Footer institucional */}
          <div className="flex items-center justify-end gap-3 px-2 py-4 border-t border-border mt-8">
            <img src={fndeLogoReduzida} alt="FNDE" className="h-5 w-auto opacity-60" />
            <div className="w-px h-4 bg-border" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Painel BI v.3.0 · CGGD/FNDE</span>
          </div>
        </main>
      </div>
    </div>
  );
}
