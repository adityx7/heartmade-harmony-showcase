import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, IMAGES } from "@/data/products";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "All Products" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--blush)]/30 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <img src={IMAGES.logo} alt={BRAND.name} className="h-10 w-10 object-contain shrink-0" />
          <div className="min-w-0 leading-tight">
            <div className="brand truncate text-xl text-primary">{BRAND.name}</div>
            <div className="text-[10px] font-medium text-black sm:block">
              {BRAND.tagline}
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full bg-secondary/60 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[var(--blush)]/30 bg-background/95 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm"
                activeProps={{ className: "text-primary font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
