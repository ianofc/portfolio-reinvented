const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
];

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-md border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          Ian<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="underline-grow pb-1 text-foreground/80 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="text-xs md:text-sm font-mono uppercase tracking-widest border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors"
        >
          Disponível →
        </a>
      </div>
    </header>
  );
};

export default Nav;
