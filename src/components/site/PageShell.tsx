import type { ReactNode } from "react";
import { PlaceholderNotice } from "./Placeholder";
import { SiteHeader } from "./SiteHeader";
import { LetsTalk, SiteFooter } from "./SiteFooter";

export function PageShell({
  children,
  cta = true,
  fill = false,
}: {
  children: ReactNode;
  cta?: boolean;
  fill?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PlaceholderNotice />
      <main className={fill ? "flex flex-1 flex-col bg-ink [&>section]:flex-1" : "flex-1"}>{children}</main>
      {cta && <LetsTalk />}
      <SiteFooter />
    </div>
  );
}
