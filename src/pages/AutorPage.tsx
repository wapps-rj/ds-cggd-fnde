import { PageHeader, SectionHeader } from "@/components/DSComponents";
import { Mail, Phone, Globe, Linkedin, Briefcase, GraduationCap, Layers, Target, Megaphone, Cpu } from "lucide-react";

const clients = [
  "CAIXA Econômica Federal", "Petrobras", "FNDE", "ANATEL",
  "IRB Re", "EVO Fintech", "Air Parts"
];

const skills = [
  { icon: <Target size={18} />, label: "User Experience (UX)" },
  { icon: <Layers size={18} />, label: "Design de Interface (UI)" },
  { icon: <Cpu size={18} />, label: "Design System" },
  { icon: <Megaphone size={18} />, label: "Marketing Digital Estratégico" },
  { icon: <Briefcase size={18} />, label: "Metodologia Ágil" },
  { icon: <Globe size={18} />, label: "Dev Low-Code" },
];

const services = [
  "Service Blueprint", "Design Thinking", "Experiência do Usuário – UX",
  "Design de Interfaces – UI", "Design System", "Marketing Digital Estratégico",
  "Gestão e desenvolvimento de Marcas e Branding", "Comunicação Corporativa"
];

const career = [
  { company: "Fundo Nacional de Desenvolvimento da Educação (FNDE)", period: "", via: "G4F / DF" },
  { company: "CAIXA Econômica Federal", period: "junho 2022 – atual", via: "Globalweb / DF" },
  { company: "PETROBRAS", period: "maio 2021 – junho 2022", via: "Spassu / ES" },
  { company: "Air Parts Equipamentos Pneumáticos", period: "março 2021", via: "RJ / SP" },
  { company: "EVO Serviços Financeiros", period: "junho 2018 – março 2021", via: "Evo RJ" },
];

const projects = [
  { title: "PowerBi FNDE - BBÁgil", desc: "Dados centrados no usuário", url: "https://designerux.com.br/portfolios/fnde-bb-agil-powerbi/" },
  { title: "App Auxílio Brasil", desc: "Design de Aplicativo – GOV Federal e CAIXA", url: "https://designerux.com.br/portfolios/app-auxilio-brasil/" },
  { title: "Chatbot ANATEL", desc: "Redesign do assistente virtual", url: "https://designerux.com.br/portfolios/chatbot-anatel/" },
  { title: "Sou CAIXA", desc: "Projeto corporativo CAIXA – Mobile First", url: "https://designerux.com.br/portfolios/mobile-first-no-sou-caixa/" },
];

export default function AutorPage() {
  return (
    <div>
      <PageHeader
        title="Autor"
        description="Responsável pelo design e desenvolvimento deste Design System."
      />

      {/* Bio */}
      <SectionHeader id="sobre" title="Alessandro Pontes" description="Product Designer" />
      <div className="fnde-card mb-8">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Atua como Designer de Produto Digital com mais de 10 anos de experiência. Conduz entrevistas com usuários, realiza o mapeamento de jornadas para o desenvolvimento de produtos digitais e desenvolve protótipos interativos de alta fidelidade para aplicativos móveis e de desktop. Possui experiência em projetos nos setores de tecnologia e financeiro.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Pós-graduado em Design Thinking, User Experience (UX) e User Interface (UI), Psicologia de Vendas e do Consumo e Marketing Digital Estratégico. Formado em Design, habilitado para mídias digitais.
        </p>
      </div>

      {/* Contato */}
      <SectionHeader id="contato" title="Contato" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <a href="mailto:japaweb@gmail.com" className="fnde-card-hover flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
            <Mail size={18} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">E-mail</p>
            <p className="text-sm font-medium group-hover:text-primary transition-colors">japaweb@gmail.com</p>
          </div>
        </a>
        <a href="tel:+5521964664281" className="fnde-card-hover flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Telefone</p>
            <p className="text-sm font-medium group-hover:text-primary transition-colors">+55 21 96466-4281</p>
          </div>
        </a>
        <a href="https://designerux.com.br/" target="_blank" rel="noopener noreferrer" className="fnde-card-hover flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
            <Globe size={18} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Portfolio</p>
            <p className="text-sm font-medium group-hover:text-primary transition-colors">designerux.com.br</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/alessandropontes/" target="_blank" rel="noopener noreferrer" className="fnde-card-hover flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
            <Linkedin size={18} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">LinkedIn</p>
            <p className="text-sm font-medium group-hover:text-primary transition-colors">Alessandro Pontes</p>
          </div>
        </a>
      </div>

      {/* Habilidades */}
      <SectionHeader id="habilidades" title="Habilidades" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {skills.map((s) => (
          <div key={s.label} className="fnde-card text-center">
            <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-2">
              {s.icon}
            </div>
            <p className="text-xs font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Carreira */}
      <SectionHeader id="carreira" title="Carreira Profissional" />
      <div className="space-y-3 mb-10">
        {career.map((c) => (
          <div key={c.company} className="fnde-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0">
              <Briefcase size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold">{c.company}</p>
              <p className="text-xs text-muted-foreground">{c.period} — {c.via}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Clientes */}
      <SectionHeader id="clientes" title="Clientes Atendidos" />
      <div className="flex flex-wrap gap-2 mb-10">
        {clients.map((c) => (
          <span key={c} className="fnde-badge-primary">{c}</span>
        ))}
      </div>

      {/* Serviços */}
      <SectionHeader id="servicos" title="Serviços" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {services.map((s) => (
          <div key={s} className="fnde-card text-center">
            <p className="text-xs font-medium">{s}</p>
          </div>
        ))}
      </div>

      {/* Projetos */}
      <SectionHeader id="projetos" title="Projetos em Destaque" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {projects.map((p) => (
          <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="fnde-card-hover group">
            <h3 className="text-sm font-semibold group-hover:text-primary transition-colors mb-1">{p.title}</h3>
            <p className="text-xs text-muted-foreground">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
