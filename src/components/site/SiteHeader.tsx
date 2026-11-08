import { Link } from "@tanstack/react-router";
import { Menu, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { pillars } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-ink-border bg-ink/90 backdrop-blur-xl" : "bg-ink",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 text-ink-foreground md:px-8">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Nehla K J — home">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-primary font-display text-sm font-bold text-primary-foreground transition-transform group-hover:rotate-6">
            NK
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            nehla<span className="text-primary-glow">.</span>kj
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {pillars.map((p) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className="rounded-full px-3 py-1.5 text-sm text-ink-muted transition-colors hover:text-ink-foreground"
              activeProps={{ className: "bg-ink-soft !text-ink-foreground" }}
            >
              {p.short}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden rounded-full px-4 sm:inline-flex">
            <Link to="/contact">
              Let's talk <ArrowUpRight />
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghostInk" size="icon" className="rounded-full lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-ink-border bg-ink text-ink-foreground">
              <SheetTitle className="eyebrow text-ink-muted">Menu</SheetTitle>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                <Link to="/" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-display text-xl hover:bg-ink-soft">
                  Home
                </Link>
                {pillars.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/${p.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 rounded-lg px-3 py-3 font-display text-xl hover:bg-ink-soft"
                  >
                    <span className="font-mono text-xs text-primary-glow">{p.number}</span>
                    {p.title}
                  </Link>
                ))}
                <Button asChild variant="hero" size="xl" className="mt-6">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Let's talk <ArrowUpRight />
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
