import { PageHeader, SectionHeader } from "@/components/DSComponents";
import { Mail, Phone, Globe, Linkedin, Briefcase, Lightbulb, Sparkles, Layout, Smartphone, LayoutGrid, Monitor, Award, Megaphone, Bot } from "lucide-react";

const clients = [
  "CAIXA Econômica Federal", "Petrobras", "FNDE", "ANATEL",
  "IRB Re", "EVO Fintech", "Air Parts"
];

const skills = [
  { icon: <Bot size={20} />, label: "IA First", desc: "Otimize processos, aumente a eficiência e reduza custos operacionais com a inteligência artificial." },
  { icon: <Lightbulb size={20} />, label: "Design de Serviços", desc: "Abordagem centrada no usuário para resolver problemas de forma criativa e inovadora com Service BluePrint." },
  { icon: <Sparkles size={20} />, label: "UX Design", desc: "Criação de experiências positivas e eficientes para os usuários em produtos e serviços." },
  { icon: <Layout size={20} />, label: "UI - Design de Interface", desc: "Junção de forma e função de maneira intuitiva para criação de Produtos Digitais." },
  { icon: <Smartphone size={20} />, label: "Design de Aplicativos", desc: "Criação de interfaces e experiências intuitivas para aplicativos móveis e web." },
  { icon: <LayoutGrid size={20} />, label: "Design System", desc: "Ecossistema de padrões com componentes reutilizáveis, diretrizes e documentação para garantir consistência e escala." },
  { icon: <Monitor size={20} />, label: "Web Design", desc: "Criação e manutenção de sites, focando MKT Estratégico, usabilidade e experiência do usuário." },
  { icon: <Award size={20} />, label: "Marca e Branding", desc: "Construção e gestão de uma marca para criar identidade e valor percebido." },
  { icon: <Megaphone size={20} />, label: "MKT Dig. Estratégico", desc: "Planejamento e execução de ações para alcançar objetivos de mercado." },
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
  { title: "PowerBi FNDE - BBÁgil", desc: "Dados centrados no usuário - GOV Federal FNDE", url: "https://designerux.com.br/portfolios/fnde-bb-agil-powerbi/" },
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
      <SectionHeader id="sobre" title="Alessandro Pontes" description="Product Designer · UX / UI Design - Product Design - CX / SD / AI FIRST / BI - GovTech" />
      <div className="fnde-card mb-8">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Atua como Designer de Produto Digital com mais de 10 anos de experiência. Conduz entrevistas com usuários, realiza o mapeamento de jornadas para o desenvolvimento de produtos digitais e desenvolve protótipos interativos de alta fidelidade para aplicativos móveis e de desktop. Possui experiência em projetos nos setores de tecnologia e financeiro.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="font-semibold text-foreground">Formado em Design e Pós-graduado em Design Thinking, User Experience (UX) e User Interface (UI), Inteligência Artificial e Engenharia de Software.</strong>
        </p>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {skills.map((s) => (
          <div key={s.label} className="fnde-card">
            <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mb-3">
              {s.icon}
            </div>
            <h3 className="text-sm font-semibold mb-1">{s.label}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
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
              <p className="text-xs text-muted-foreground">{c.period ? `${c.period} — ${c.via}` : c.via}</p>
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

    </div>
  );
}
