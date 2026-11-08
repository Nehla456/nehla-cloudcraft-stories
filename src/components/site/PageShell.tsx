import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { LetsTalk, SiteFooter } from "./SiteFooter";

export function PageShell({ children, cta = true }: { children: ReactNode; cta?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {cta && <LetsTalk />}
      <SiteFooter />
    </div>
  );
}
