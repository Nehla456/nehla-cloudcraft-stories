import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cv, cvOptions, profile } from "@/data/portfolio";
import { CopyEmailButton } from "./CopyEmailButton";

export function CvActions() {
  const options = cvOptions(cv, profile.email);
  const hasDownload = options.some((o) => o.kind === "download");
  return (
    <>
      {options.map((o) =>
        o.kind === "download" ? (
          <Button key="download" asChild variant="hero" size="xl">
            <a href={o.href} download={o.filename}>
              <Download /> Download CV
            </a>
          </Button>
        ) : (
          <Button key="email" asChild variant="ghostInk" size="xl">
            <a href={o.href}>
              <FileText /> {hasDownload ? "Request CV by email" : "Request my CV"}
            </a>
          </Button>
        ),
      )}
      <CopyEmailButton email={profile.email} />
    </>
  );
}
