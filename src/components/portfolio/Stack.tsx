const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Bun", "Postgres", "Supabase", "tRPC", "Redis"],
  },
  {
    title: "Ferramentas",
    items: ["Figma", "Linear", "Vercel", "Docker", "GitHub Actions", "Stripe"],
  },
];

const ticker = [
  "Tipografia",
  "Sistemas de design",
  "Performance",
  "Acessibilidade",
  "DX",
  "Tipografia",
  "Sistemas de design",
  "Performance",
  "Acessibilidade",
  "DX",
];

const Stack = () => {
  return (
    <section id="stack" className="py-24 md:py-32 border-t hairline relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
              § 03 — Stack
            </div>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl font-light tracking-tight leading-none">
            Ferramentas
            <br />
            <span className="italic">do ofício</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {groups.map((g) => (
            <div key={g.title} className="border-t hairline pt-6">
              <div className="text-xs font-mono uppercase tracking-widest text-accent mb-6">
                {g.title}
              </div>
              <ul className="space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="font-display text-2xl md:text-3xl leading-tight">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 border-y hairline py-6 overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span
              key={i}
              className="font-display italic text-4xl md:text-6xl font-light px-8 flex items-center gap-8"
            >
              {t}
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
