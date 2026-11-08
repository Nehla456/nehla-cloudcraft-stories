import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { profile } from "@/data/portfolio";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: seo(
      "Let's talk — Nehla K J, Cloud DevOps Engineer",
      "Hire Nehla K J for cloud platform, CI/CD, Terraform and DevSecOps work in banking, healthcare and aerospace.",
    ),
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Add your name").max(100),
  email: z.string().trim().email("Add a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "A sentence or two, please").max(2000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, email, company, message } = parsed.data;
    const subject = `Project enquiry from ${name}${company ? ` (${company})` : ""}`;
    const body = `${message}\n\n— ${name}\n${email}${company ? `\n${company}` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <PageShell cta={false}>
      <section className="section-ink relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 text-ink-foreground" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow text-primary-glow">Let's talk</p>
            <h1 className="mt-5 text-5xl font-bold leading-[0.95] md:text-7xl">
              Got something slow, fragile or <span className="text-gradient">expensive?</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink-muted">
              Send me the problem. I reply within one working day with what I'd look at first.
            </p>
            <ul className="mt-10 space-y-3">
              {[
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
                { icon: Github, label: "GitHub", href: profile.github },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-lg transition-colors hover:text-primary-glow"
                  >
                    <span className="grid size-10 place-items-center rounded-full border border-ink-border transition-colors group-hover:border-primary-glow">
                      <Icon className="size-4" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild variant="ghostInk" size="xl" className="mt-10">
              <a href={`mailto:${profile.email}?subject=${encodeURIComponent("CV request")}`}>
                <FileText /> Request my CV
              </a>
            </Button>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-elegant md:p-10"
            >
              <h2 className="text-3xl font-bold">Start a conversation</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors["name"]}>
                  <Input id="name" name="name" autoComplete="name" className="h-11" />
                </Field>
                <Field id="email" label="Email" error={errors["email"]}>
                  <Input id="email" name="email" type="email" autoComplete="email" className="h-11" />
                </Field>
                <Field id="company" label="Company (optional)" className="sm:col-span-2">
                  <Input id="company" name="company" autoComplete="organization" className="h-11" />
                </Field>
                <Field id="message" label="What's the problem?" error={errors["message"]} className="sm:col-span-2">
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="e.g. Releases take a day, and our last audit flagged IAM."
                  />
                </Field>
              </div>
              <Button type="submit" variant="hero" size="xl" className="mt-8 w-full">
                Send message <ArrowUpRight />
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">Opens your email app with the message ready to send.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  className?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block font-semibold">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
