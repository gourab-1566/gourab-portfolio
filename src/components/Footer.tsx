export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-onyx/60 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
        <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-onyx">
            <span className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
            <span className="relative">G</span>
            <span className="relative -ml-0.5 text-primary">D</span>
          </span>
        </div>
        <p className="max-w-md font-display text-sm italic text-muted-foreground">
          Built with passion, curiosity and a vision for the future.
        </p>
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Gourab Deb</span>
          <span className="text-primary">✦</span>
          <span>Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}
