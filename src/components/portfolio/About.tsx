const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-40 border-t hairline">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground sticky top-24">
            § 01 — Sobre
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 max-w-3xl">
          <p className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight text-balance">
            Comecei a programar aos quatorze, mexendo em temas de blog. Hoje, lidero
            o desenvolvimento de produtos digitais que vão de{" "}
            <em className="text-accent">e‑commerces</em> a plataformas de IA.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-10 text-foreground/80 leading-relaxed">
            <p>
              Trabalho na intersecção entre design e engenharia. Gosto de tipografia,
              de sistemas bem desenhados e de código que outras pessoas conseguem ler
              sem precisar de mim por perto.
            </p>
            <p>
              Nos últimos anos, ajudei startups e estúdios a entregar produtos do
              zero ao lançamento — cuidando do front, do back e, quase sempre, da
              conversa com o usuário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
