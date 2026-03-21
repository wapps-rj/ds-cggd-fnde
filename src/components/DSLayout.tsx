import { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home, Palette, Code2, Component, LayoutTemplate, Stamp,
  FileText, Accessibility, ChevronDown, ChevronRight, Search,
  Menu, X, BookOpen, PanelLeftClose, PanelLeftOpen
} from "lucide-react";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  children?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/", icon: <Home size={18} /> },
  {
    label: "Fundamentos", path: "/fundamentos", icon: <Palette size={18} />,
    children: [
      { label: "Tipografia", path: "/fundamentos#tipografia" },
      { label: "Cores", path: "/fundamentos#cores" },
      { label: "Iconografia", path: "/fundamentos#iconografia" },
      { label: "Grid e Espaçamento", path: "/fundamentos#grid" },
      { label: "Elevação e Sombras", path: "/fundamentos#elevacao" },
      { label: "Motion", path: "/fundamentos#motion" },
      { label: "Responsividade", path: "/fundamentos#responsividade" },
    ],
  },
  {
    label: "Tokens", path: "/tokens", icon: <Code2 size={18} />,
    children: [
      { label: "Cores", path: "/tokens#cores" },
      { label: "Tipografia", path: "/tokens#tipografia" },
      { label: "Espaçamento", path: "/tokens#espacamento" },
      { label: "Sombras", path: "/tokens#sombras" },
      { label: "Z-index", path: "/tokens#zindex" },
      { label: "Breakpoints", path: "/tokens#breakpoints" },
    ],
  },
  {
    label: "Componentes", path: "/componentes", icon: <Component size={18} />,
    children: [
      { label: "Botão", path: "/componentes#botao" },
      { label: "Campo de Texto", path: "/componentes#input" },
      { label: "Select", path: "/componentes#select" },
      { label: "Checkbox e Radio", path: "/componentes#checkbox" },
      { label: "Switch", path: "/componentes#switch" },
      { label: "Badge / Tag", path: "/componentes#badge" },
      { label: "Alert", path: "/componentes#alert" },
      { label: "Card", path: "/componentes#card" },
      { label: "Tabela", path: "/componentes#tabela" },
      { label: "Accordion", path: "/componentes#accordion" },
      { label: "Tabs", path: "/componentes#tabs" },
      { label: "Modal", path: "/componentes#modal" },
      { label: "Toast", path: "/componentes#toast" },
      { label: "Breadcrumb", path: "/componentes#breadcrumb" },
      { label: "Paginação", path: "/componentes#paginacao" },
      { label: "Tooltip", path: "/componentes#tooltip" },
      { label: "Skeleton", path: "/componentes#skeleton" },
      { label: "Spinner", path: "/componentes#spinner" },
      { label: "Empty State", path: "/componentes#empty-state" },
    ],
  },
  { label: "Templates", path: "/templates", icon: <LayoutTemplate size={18} /> },
  { label: "Marca FNDE", path: "/marca", icon: <Stamp size={18} /> },
  { label: "Conteúdo", path: "/conteudo", icon: <FileText size={18} /> },
  { label: "Acessibilidade", path: "/acessibilidade", icon: <Accessibility size={18} /> },
];

export default function DSLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close mobile sidebar on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const toggleExpand = useCallback((label: string) => {
    setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
  }, []);

  const handleNav = (path: string) => {
    const [route, hash] = path.split("#");
    if (route && route !== location.pathname) {
      navigate(route + (hash ? `#${hash}` : ""));
    } else if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const isActive = (path: string) => {
    const [route] = path.split("#");
    return location.pathname === route;
  };

  const filteredItems = searchQuery
    ? navItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.children?.some(c => c.label.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : navItems;

  const sidebarWidth = collapsed ? "w-16" : "w-64";

  const renderNavContent = (isCollapsedView: boolean) => (
    <>
      {/* Search - hidden when collapsed */}
      {!isCollapsedView && (
        <div className="p-3">
          <div className="relative">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sidebar-muted" />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-sidebar-accent text-sidebar-foreground text-xs rounded pl-8 pr-3 py-2 placeholder:text-sidebar-muted border border-sidebar-border focus:outline-none focus:ring-1 focus:ring-sidebar-ring"
              aria-label="Buscar na navegação"
            />
          </div>
        </div>
      )}

      <nav className={`${isCollapsedView ? "px-1" : "px-2"} pb-6`} aria-label="Navegação do design system">
        {filteredItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => {
                if (isCollapsedView) {
                  // In collapsed mode, expand sidebar and navigate
                  setCollapsed(false);
                  handleNav(item.path);
                  if (item.children) toggleExpand(item.label);
                } else {
                  if (item.children) toggleExpand(item.label);
                  handleNav(item.path);
                }
              }}
              title={isCollapsedView ? item.label : undefined}
              aria-label={isCollapsedView ? item.label : undefined}
              aria-expanded={item.children ? !!expanded[item.label] : undefined}
              aria-controls={item.children ? `subnav-${item.label}` : undefined}
              className={`w-full flex items-center ${isCollapsedView ? "justify-center px-0 py-2.5" : "gap-2.5 px-3 py-2"} rounded text-sm transition-colors ${
                isActive(item.path)
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
              }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!isCollapsedView && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.children && (
                    expanded[item.label] ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                  )}
                </>
              )}
            </button>
            {!isCollapsedView && item.children && expanded[item.label] && (
              <div
                id={`subnav-${item.label}`}
                role="region"
                aria-label={`Subnavegação de ${item.label}`}
                className="ml-7 mt-0.5 space-y-0.5"
              >
                {item.children
                  .filter(c => !searchQuery || c.label.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(child => (
                    <button
                      key={child.path}
                      onClick={() => handleNav(child.path)}
                      className="block w-full text-left text-xs px-3 py-1.5 rounded text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
                    >
                      {child.label}
                    </button>
                  ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="h-14 bg-primary text-primary-foreground flex items-center px-4 gap-3 fixed top-0 left-0 right-0 z-50">
        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-1.5 rounded hover:bg-sidebar-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-sidebar"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop collapse toggle */}
        <button
          className="hidden lg:flex p-1.5 rounded hover:bg-sidebar-accent transition-colors items-center justify-center"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expandir menu lateral" : "Recolher menu lateral"}
          aria-expanded={!collapsed}
          aria-controls="desktop-sidebar"
        >
          {collapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </button>

        <div className="flex items-center gap-2.5">
          <BookOpen size={22} className="text-sidebar-ring" />
          <div className="leading-tight">
            <span className="font-semibold text-sm block">Design System FNDE</span>
            <span className="text-[10px] opacity-70 block -mt-0.5">CGGD · Coordenação Geral de Governança</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="fnde-badge-secondary text-[10px] hidden sm:inline-flex">v1.0.0</span>
        </div>
      </header>

      <div className="flex pt-14 min-h-screen">
        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-foreground/30 z-30 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile sidebar */}
        <aside
          id="mobile-sidebar"
          role="navigation"
          aria-label="Menu de navegação principal"
          className={`fixed top-14 bottom-0 left-0 w-64 bg-sidebar text-sidebar-foreground z-40 overflow-y-auto transition-transform duration-200 lg:hidden ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {renderNavContent(false)}
        </aside>

        {/* Desktop sidebar */}
        <aside
          id="desktop-sidebar"
          role="navigation"
          aria-label="Menu de navegação principal"
          className={`hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] bg-sidebar text-sidebar-foreground overflow-y-auto transition-all duration-200 ${sidebarWidth}`}
        >
          {/* Collapse toggle inside sidebar bottom */}
          {renderNavContent(collapsed)}

          {/* Bottom collapse hint */}
          <div className={`border-t border-sidebar-border p-2 ${collapsed ? "flex justify-center" : "px-3"}`}>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex items-center gap-2 text-sidebar-muted hover:text-sidebar-foreground text-xs py-1.5 px-2 rounded hover:bg-sidebar-accent/50 transition-colors w-full"
              aria-label={collapsed ? "Expandir menu lateral" : "Recolher menu lateral"}
            >
              {collapsed ? (
                <PanelLeftOpen size={16} />
              ) : (
                <>
                  <PanelLeftClose size={16} />
                  <span>Recolher menu</span>
                </>
              )}
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
