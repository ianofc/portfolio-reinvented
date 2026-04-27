const Footer = () => {
  return (
    <footer className="border-t hairline py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <div>© {new Date().getFullYear()} Ian — Todos os direitos reservados</div>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Disponível para novos projetos
        </div>
        <a href="#top" className="hover:text-foreground transition-colors">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
