import { createFileRoute } from "@tanstack/react-router";
import { BRAND, IMAGES } from "@/data/products";
import { Heart, Palette, Gift } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Heartmade Harmony" },
      { name: "description", content: "Heartmade Harmony specialises in handcrafted gifts, personalised keepsakes, paintings and unique return gifts." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="text-center">
        <img src={IMAGES.logo} alt={BRAND.name} className="mx-auto h-24 w-24 rounded-full object-cover shadow-[var(--shadow-soft)]" />
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary">About Us</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Our Story</h1>
        <p className="script mt-2 text-2xl text-primary">{BRAND.tagline}</p>
      </div>
      <div className="mt-10 space-y-5 text-center text-base leading-relaxed text-foreground/80">
        <p>
          {BRAND.name} specialises in handcrafted gifts, personalised keepsakes,
          paintings, resin art, custom décor and unique return gifts.
        </p>
        <p>
          We believe every gift should tell a story and every creation should
          bring joy. Customisation is at the heart of what we do — at
          budget-friendly prices.
        </p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {[
          { icon: Heart, title: "Made with Love", text: "Every piece begins with a feeling and finishes with care." },
          { icon: Palette, title: "Customised for You", text: "Colours, sizes, names — tailored to your story." },
          { icon: Gift, title: "Bulk & Returns", text: "Perfect for events, weddings and return gifts." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl bg-card p-6 text-center shadow-[var(--shadow-card)]">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--blush)] to-[var(--lavender)] text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
