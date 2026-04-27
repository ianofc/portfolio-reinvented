import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    n: "01",
    year: "2025",
    title: "Atelier — Plataforma editorial",
    role: "Full-stack · Design",
    stack: ["Next.js", "Postgres", "Tailwind"],
    img: p1,
    desc: "Sistema de publicação para revista independente, com editor colaborativo e modo de leitura tipográfico.",
  },
  {
    n: "02",
    year: "2024",
    title: "Norte — Dashboard analítico",
    role: "Engenharia · DX",
    stack: ["React", "tRPC", "Clickhouse"],
    img: p2,
    desc: "Painel em tempo real para times de produto entenderem comportamento de usuários sem depender de SQL.",
  },
  {
    n: "03",
    year: "2024",
    title: "Serif — Identidade tipográfica",
    role: "Design system · Front",
    stack: ["Figma", "Storybook", "Vite"],
    img: p3,
    desc: "Construção de um design system editorial, do token ao componente, para um estúdio de branding em SP.",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 border-t hairline">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
              § 02 — Projetos selecionados
            </div>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl font-light tracking-tight leading-none">
            Trabalhos<span className="text-accent">,</span>
            <br />
            <span className="italic">recentes</span>
          </h2>
        </div>

        <ul className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <li key={p.n} className="grid grid-cols-12 gap-6 md:gap-10 items-start group">
              <div className={`col-span-12 md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="overflow-hidden bg-secondary aspect-[4/3] shadow-soft">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className={`col-span-12 md:col-span-5 ${i % 2 === 1 ? "md:order-1 md:pr-10" : "md:pl-4"} md:pt-6`}>
                <div className="flex items-baseline gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                  <span className="text-accent">№ {p.n}</span>
                  <span>{p.year}</span>
                  <span className="flex-1 h-px bg-foreground/20" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-4">
                  {p.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed mb-6">{p.desc}</p>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  {p.role}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2.5 py-1 border hairline rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
