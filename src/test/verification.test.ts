import { describe, expect, it } from "vitest";
import { cvOptions, isPlaceholder } from "@/data/portfolio";

describe("placeholder marking", () => {
  it("treats an item without a verified flag as a placeholder", () => {
    expect(isPlaceholder({})).toBe(true);
  });

  it("treats an item marked verified as real", () => {
    expect(isPlaceholder({ verified: true })).toBe(false);
  });
});

describe("CV options", () => {
  it("offers only the email request when no CV file is set", () => {
    const opts = cvOptions({ file: null, filename: "cv.pdf" }, "me@example.com");
    expect(opts.map((o) => o.kind)).toEqual(["email"]);
  });

  it("offers the download first and keeps the email request as fallback", () => {
    const opts = cvOptions({ file: "/downloads/cv.pdf", filename: "cv.pdf" }, "me@example.com");
    expect(opts.map((o) => o.kind)).toEqual(["download", "email"]);
    expect(opts[0]).toMatchObject({ href: "/downloads/cv.pdf", filename: "cv.pdf" });
    expect(opts[1]?.href).toBe("mailto:me@example.com?subject=CV%20request");
  });
});
