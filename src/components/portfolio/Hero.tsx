import portrait from "@/assets/portrait.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-10 bg-foreground/40" />
          <span>Edição Nº 01 — Portfólio 2026</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 lg:col-span-8 reveal">
            <h1 className="font-display font-light text-[14vw] sm:text-[11vw] lg:text-[9.5vw] leading-[0.88] tracking-[-0.04em] text-balance">
              Construo
              <br />
              produtos<span className="text-accent">.</span>{" "}
              <span className="italic font-normal">com cuidado</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pl-10 lg:border-l hairline">
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-md">
              Sou <strong className="font-medium">Ian</strong>, desenvolvedor full-stack
              brasileiro. Desenho e programo interfaces que respeitam o usuário — do
              banco de dados ao último pixel.
            </p>
            <div className="mt-6 flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span>São Paulo, BR</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>UTC −3</span>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-12 gap-6 md:gap-10">
          <figure className="col-span-12 md:col-span-5 reveal">
            <div className="relative overflow-hidden bg-secondary aspect-[4/5] shadow-soft">
              <img
                src={portrait}
                alt="Retrato editorial de Ian, desenvolvedor full-stack"
                width={896}
                height={1216}
                className="w-full h-full object-cover grayscale contrast-[1.05]"
              />
            </div>
            <figcaption className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Fig. 01 — O autor, em estúdio
            </figcaption>
          </figure>

          <div className="col-span-12 md:col-span-7 md:pt-10 grid grid-cols-2 gap-6 md:gap-10">
            <Stat n="6+" label="Anos escrevendo código" />
            <Stat n="40+" label="Produtos enviados" />
            <Stat n="12" label="Empresas atendidas" />
            <Stat n="∞" label="Cafés filtrados" />
            <p className="col-span-2 mt-4 font-display text-2xl md:text-3xl leading-snug text-balance">
              Acredito que software bom é aquele que{" "}
              <em className="text-accent not-italic">desaparece</em> — e deixa a
              pessoa fazer o que veio fazer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ n, label }: { n: string; label: string }) => (
  <div className="border-t hairline pt-4">
    <div className="font-display text-5xl md:text-6xl font-light tracking-tight">{n}</div>
    <div className="mt-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
      {label}
    </div>
  </div>
);

export default Hero;
