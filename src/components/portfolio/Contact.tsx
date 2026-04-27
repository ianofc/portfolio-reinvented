const links = [
  { label: "Email", value: "ola@ianofc.dev", href: "mailto:ola@ianofc.dev" },
  { label: "GitHub", value: "@ianofc", href: "https://github.com/ianofc" },
  { label: "LinkedIn", value: "in/ianofc", href: "https://linkedin.com/in/ianofc" },
  { label: "Twitter", value: "@ianofc", href: "https://twitter.com/ianofc" },
];

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-40 border-t hairline">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10">
          § 04 — Contato
        </div>

        <h2 className="font-display font-light text-[12vw] md:text-[9vw] leading-[0.9] tracking-[-0.04em] text-balance">
          Vamos
          <br />
          <span className="italic">conversar</span>
          <span className="text-accent">.</span>
        </h2>

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="font-display text-2xl md:text-3xl leading-snug text-foreground/85 max-w-lg">
              Aceitando 2 novos projetos para o segundo semestre de 2026. Conte
              brevemente o que está construindo — respondo em até 48h.
            </p>
            <a
              href="mailto:ola@ianofc.dev"
              className="inline-flex items-center gap-3 mt-10 px-6 py-4 bg-foreground text-background font-mono uppercase text-xs tracking-widest hover:bg-accent transition-colors"
            >
              Enviar email
              <span aria-hidden>→</span>
            </a>
          </div>

          <ul className="border-t hairline">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between py-5 border-b hairline hover:px-2 transition-all duration-300"
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {l.label}
                  </span>
                  <span className="font-display text-xl md:text-2xl group-hover:text-accent transition-colors flex items-center gap-3">
                    {l.value}
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
