import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, productCountByCategory } from "@/data/products";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "All Categories — Heartmade Harmony" },
      { name: "description", content: "Browse all handmade categories — Lippan, Kundan, resin, silk thread, paintings, kids accessories and more." },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  const [q, setQ] = useState("");
  const filtered = CATEGORIES.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Collection</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Product Categories</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Pick a category to explore handmade creations crafted with love.
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-md">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search categories…"
          className="w-full rounded-full border border-border bg-card/80 px-5 py-3 text-sm shadow-[var(--shadow-card)] outline-none placeholder:text-muted-foreground focus:border-primary"
        />
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <Link
            key={c.slug}
            to="/category/$slug"
            params={{ slug: c.slug }}
            className="group relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
              <img src={c.cover} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h3 className="text-2xl drop-shadow">{c.name}</h3>
              <p className="mt-1 text-xs opacity-90">
                {productCountByCategory(c.slug)} products · {c.subs.slice(0, 3).join(" · ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
