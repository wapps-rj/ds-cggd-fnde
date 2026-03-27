import { useState, useRef } from "react";
import {
  Home, Settings, Users, FileText, BarChart3, Shield, Bell,
  HelpCircle, Search, X, ChevronDown, ChevronRight,
  Folder, ClipboardList, GraduationCap, Wallet
} from "lucide-react";
import { CodeBlock } from "@/components/DSComponents";
import iconeFndeNegativo from "@/assets/icone-fnde-negativo.svg";

/* ─── Menu item model ─── */
interface MenuItem {
  label: string;
  icon: React.ReactNode;
  iconName: string;
  children?: { label: string }[];
}

const menuItems: MenuItem[] = [
  { label: "Início", icon: <Home size={16} />, iconName: "home" },
  {
    label: "Programas", icon: <GraduationCap size={16} />, iconName: "graduation-cap",
    children: [
      { label: "PNAE" },
      { label: "PNATE" },
      { label: "PDDE" },
      { label: "Caminho da Escola" },
    ],
  },
  {
    label: "Financeiro", icon: <Wallet size={16} />, iconName: "wallet",
    children: [
      { label: "Prestação de Contas" },
      { label: "Repasses" },
      { label: "Convênios" },
    ],
  },
  {
    label: "Relatórios", icon: <BarChart3 size={16} />, iconName: "bar-chart-3",
    children: [
      { label: "Indicadores" },
      { label: "Dashboards" },
      { label: "Exportações" },
    ],
  },
  { label: "Usuários", icon: <Users size={16} />, iconName: "users" },
  {
    label: "Documentos", icon: <FileText size={16} />, iconName: "file-text",
    children: [
      { label: "Normativos" },
      { label: "Manuais" },
      { label: "Resoluções" },
    ],
  },
  { label: "Notificações", icon: <Bell size={16} />, iconName: "bell" },
  { label: "Segurança", icon: <Shield size={16} />, iconName: "shield" },
  { label: "Configurações", icon: <Settings size={16} />, iconName: "settings" },
  { label: "Ajuda", icon: <HelpCircle size={16} />, iconName: "help-circle" },
];

/* ─── Interactive Preview ─── */
function SidebarPreview() {
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ Programas: true });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState("Início");
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

  if (!open) {
    return (
      <div className="flex items-center justify-center h-[480px] border border-border rounded-lg bg-muted/30">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0d3857] text-white text-sm hover:bg-[#0d3857]/90 transition-colors"
        >
          <Home size={16} />
          Abrir Menu
        </button>
      </div>
    );
  }

  return (
    <div className="flex border border-border rounded-lg overflow-hidden h-[520px]">
      {/* Sidebar */}
      <div className="w-[260px] bg-[#0d3857] text-white flex flex-col shrink-0">
        {/* Sidebar header with close */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <img src={iconeFndeNegativo} alt="FNDE" className="h-5 w-5" />
            <span className="text-sm font-semibold">SIGLA</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Fechar menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Search */}
        <div className="px-3 py-2">
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              ref={searchRef}
              type="text"
              placeholder="Buscar no menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 text-white text-xs rounded pl-8 pr-8 py-2 placeholder:text-white/40 border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#D98217]/50 focus:border-[#D98217]/50"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(""); searchRef.current?.focus(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                <X size={12} />
              </button>
            )}
          </div>
          {query && filteredItems.length === 0 && (
            <p className="text-[10px] text-white/50 mt-1.5 px-1">Nenhum item encontrado</p>
          )}
          {query && filteredItems.length > 0 && (
            <p className="text-[10px] text-white/50 mt-1.5 px-1">
              {filteredItems.length} resultado{filteredItems.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-2 pb-4" aria-label="Menu principal">
          {filteredItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-sm transition-colors ${
                  activeItem === item.label
                    ? "bg-white/15 text-white font-medium"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className="flex-1 text-left text-[13px]">{item.label}</span>
                {item.children && (
                  expanded[item.label]
                    ? <ChevronDown size={14} className="text-white/40" />
                    : <ChevronRight size={14} className="text-white/40" />
                )}
              </button>
              {item.children && expanded[item.label] && (
                <div className="ml-7 mt-0.5 space-y-0.5 mb-1">
                  {item.children
                    .filter((c) => !query || c.label.toLowerCase().includes(query))
                    .map((child) => (
                      <button
                        key={child.label}
                        onClick={() => setActiveItem(child.label)}
                        className={`block w-full text-left text-xs px-3 py-1.5 rounded transition-colors ${
                          activeItem === child.label
                            ? "text-white bg-white/10 font-medium"
                            : "text-white/50 hover:text-white hover:bg-white/8"
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

        {/* Footer */}
        <div className="border-t border-white/10 px-3 py-2">
          <div className="flex items-center gap-2 px-2 py-1.5 text-white/50 text-[10px]">
            <Folder size={12} />
            <span>CGGD · FNDE</span>
          </div>
        </div>
      </div>

      {/* Content area mock */}
      <div className="flex-1 bg-muted/20 p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Início</span>
          <ChevronRight size={12} />
          <span className="text-foreground font-medium">{activeItem}</span>
        </div>
        <div className="h-4 bg-muted rounded w-1/3" />
        <div className="grid grid-cols-2 gap-3 flex-1">
          <div className="bg-muted/50 rounded-lg" />
          <div className="bg-muted/50 rounded-lg" />
          <div className="bg-muted/50 rounded-lg" />
          <div className="bg-muted/50 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

/* ─── Code generator ─── */
function generateSidebarCode(): string {
  return `<!-- Menu Lateral FNDE -->
<aside class="fnde-sidebar" id="sidebarMenu">
  <!-- Cabeçalho do menu -->
  <div class="fnde-sidebar__header">
    <div class="fnde-sidebar__brand">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D98217" stroke-width="2">
        <path d="M3 21V5a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v4"/>
        <path d="M21 15H3"/><path d="M21 19H3"/>
      </svg>
      <span class="fnde-sidebar__title">SIGLA</span>
    </div>
    <button class="fnde-sidebar__close" onclick="closeSidebar()" aria-label="Fechar menu">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>

  <!-- Buscador -->
  <div class="fnde-sidebar__search">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fnde-sidebar__search-icon">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
    <input type="text" placeholder="Buscar no menu..." class="fnde-sidebar__search-input" oninput="filterMenu(this.value)" />
  </div>

  <!-- Itens de navegação -->
  <nav class="fnde-sidebar__nav">
    <a href="#" class="fnde-sidebar__item fnde-sidebar__item--active">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
      <span>Início</span>
    </a>

    <!-- Item com subitens -->
    <div class="fnde-sidebar__group">
      <button class="fnde-sidebar__item" onclick="toggleGroup(this)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/>
        </svg>
        <span>Programas</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fnde-sidebar__chevron">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
      <div class="fnde-sidebar__subitems">
        <a href="#" class="fnde-sidebar__subitem">PNAE</a>
        <a href="#" class="fnde-sidebar__subitem">PNATE</a>
        <a href="#" class="fnde-sidebar__subitem">PDDE</a>
        <a href="#" class="fnde-sidebar__subitem">Caminho da Escola</a>
      </div>
    </div>

    <a href="#" class="fnde-sidebar__item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      <span>Usuários</span>
    </a>
  </nav>

  <!-- Rodapé -->
  <div class="fnde-sidebar__footer">CGGD · FNDE</div>
</aside>

<!-- Overlay para mobile -->
<div class="fnde-sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>

<style>
.fnde-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 260px;
  background: #0d3857;
  color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 100;
  font-family: 'Poppins', sans-serif;
  transform: translateX(0);
  transition: transform 0.2s ease;
}
.fnde-sidebar.is-closed { transform: translateX(-100%); }
.fnde-sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 99;
  display: none;
}
.fnde-sidebar-overlay.is-visible { display: block; }

.fnde-sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.fnde-sidebar__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.fnde-sidebar__title {
  font-size: 0.875rem;
  font-weight: 600;
}
.fnde-sidebar__close {
  background: none;
  border: none;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
}
.fnde-sidebar__close:hover { background: rgba(255,255,255,0.1); }

.fnde-sidebar__search {
  position: relative;
  padding: 0.5rem 0.75rem;
}
.fnde-sidebar__search-icon {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.4;
}
.fnde-sidebar__search-input {
  width: 100%;
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 0.75rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  outline: none;
}
.fnde-sidebar__search-input::placeholder { color: rgba(255,255,255,0.4); }
.fnde-sidebar__search-input:focus {
  border-color: rgba(217,130,23,0.5);
  box-shadow: 0 0 0 2px rgba(217,130,23,0.15);
}

.fnde-sidebar__nav {
  flex: 1;
  overflow-y: auto;
  padding: 0.25rem 0.5rem;
}
.fnde-sidebar__item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.fnde-sidebar__item:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}
.fnde-sidebar__item--active {
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-weight: 500;
}
.fnde-sidebar__item span { flex: 1; text-align: left; }
.fnde-sidebar__chevron {
  opacity: 0.4;
  transition: transform 0.2s;
}
.fnde-sidebar__group.is-open .fnde-sidebar__chevron {
  transform: rotate(90deg);
}

.fnde-sidebar__subitems {
  display: none;
  margin-left: 1.75rem;
  padding: 0.125rem 0;
}
.fnde-sidebar__group.is-open .fnde-sidebar__subitems { display: block; }
.fnde-sidebar__subitem {
  display: block;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.fnde-sidebar__subitem:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}

.fnde-sidebar__footer {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 0.5rem 1rem;
  font-size: 0.625rem;
  color: rgba(255,255,255,0.4);
}
</style>

<script>
function closeSidebar() {
  document.getElementById('sidebarMenu').classList.add('is-closed');
  document.getElementById('sidebarOverlay').classList.remove('is-visible');
}

function openSidebar() {
  document.getElementById('sidebarMenu').classList.remove('is-closed');
  document.getElementById('sidebarOverlay').classList.add('is-visible');
}

function toggleGroup(btn) {
  btn.closest('.fnde-sidebar__group').classList.toggle('is-open');
}

function filterMenu(query) {
  const items = document.querySelectorAll('.fnde-sidebar__item, .fnde-sidebar__subitem');
  const q = query.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = !q || text.includes(q) ? '' : 'none';
  });
  // Show parent groups if children match
  document.querySelectorAll('.fnde-sidebar__group').forEach(group => {
    const hasVisible = group.querySelector('.fnde-sidebar__subitem:not([style*="display: none"])');
    if (hasVisible && q) group.classList.add('is-open');
  });
}
</script>`;
}

/* ─── Exported section ─── */
export default function SidebarMenuSection() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div>
      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6">
        Menu lateral com navegação hierárquica, ícones nas seções principais, subitens expansíveis com hover,
        buscador integrado e botão de fechar. Ideal para complementar o Header FNDE.
      </p>

      {/* Live preview */}
      <div className="fnde-card mb-4">
        <h4 className="text-sm font-semibold text-foreground mb-3">Preview interativo</h4>
        <p className="text-xs text-muted-foreground mb-4">
          Clique nos itens para navegar, expanda grupos, utilize o buscador e feche o menu pelo botão ✕.
        </p>
        <SidebarPreview />
      </div>

      {/* Code toggle */}
      <div className="fnde-card mb-6">
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-xs font-medium text-primary hover:underline"
        >
          {showCode ? "Ocultar código" : "Ver código HTML/CSS/JS"}
        </button>
        {showCode && (
          <div className="mt-3">
            <CodeBlock code={generateSidebarCode()} language="html" title="Menu Lateral FNDE — Vanilla HTML/CSS/JS" />
          </div>
        )}
      </div>

      {/* Guidelines */}
      <div className="fnde-card">
        <h4 className="font-semibold text-foreground mb-3">Diretrizes de uso</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-muted-foreground">
          <div>
            <p className="font-semibold text-success mb-1">✓ Quando usar</p>
            <ul className="space-y-1">
              <li>• Em aplicações com mais de 5 seções de navegação</li>
              <li>• Quando há hierarquia de dois níveis (seções e subseções)</li>
              <li>• Complementar ao botão de menu do header institucional</li>
              <li>• Manter o buscador para menus com muitos itens</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-error mb-1">✗ Quando não usar</p>
            <ul className="space-y-1">
              <li>• Em aplicações com poucas seções (prefira nav horizontal)</li>
              <li>• Não remova o botão de fechar em dispositivos mobile</li>
              <li>• Não ultrapasse 3 níveis de profundidade</li>
              <li>• Não altere as cores fora do padrão institucional</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
