import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactVerified, pillars, profile } from "@/data/portfolio";
import { CvActions } from "./CvActions";
import { PlaceholderTag } from "./Placeholder";
import { Reveal } from "./Reveal";

export function LetsTalk() {
  return (
    <section className="section-ink relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 text-ink-foreground" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow text-primary-glow">Let's talk</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-bold leading-[0.95] md:text-7xl">
            Need a platform that ships fast <span className="text-gradient">and passes audit?</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">
            Tell me what's slow, fragile or expensive. I'll tell you what I'd fix first.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Let's work together <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="ghostInk" size="xl">
              <a href={`mailto:${profile.email}`}>
                <Mail /> {profile.email}
                {!contactVerified.email && <PlaceholderTag tone="ink" />}
              </a>
            </Button>
            <Button asChild variant="ghostInk" size="xl">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn
              </a>
            </Button>
            {profile.github && (
              <Button asChild variant="ghostInk" size="xl">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
            )}
            <CvActions />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_auto] md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-ink-muted">{profile.positioning}</p>
          <p className="mt-2 text-sm text-ink-muted">
            {profile.location} · {profile.workAuth} · {profile.languages}
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {pillars.map((p) => (
            <Link key={p.slug} to={`/${p.slug}`} className="text-ink-muted transition-colors hover:text-ink-foreground">
              {p.title}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Button asChild variant="ghostInk" size="icon" className="rounded-full">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </Button>
          {profile.github && (
            <Button asChild variant="ghostInk" size="icon" className="rounded-full">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </Button>
          )}
          <Button asChild variant="ghostInk" size="icon" className="rounded-full">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail />
            </a>
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-8 font-mono text-xs text-ink-muted md:px-8">
        © {new Date().getFullYear()} {profile.name} · Built like I build platforms: versioned, tested, shipped.
      </div>
    </footer>
  );
}
