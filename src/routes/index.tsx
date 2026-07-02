import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Sparkles, Package, Gift, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { BRAND, CATEGORIES, IMAGES, PRODUCTS, REVIEWS, HERO_IMAGES, GLIMPSE_IMAGES, BESTSELLER_IMAGES, BESTSELLERS_MAPPING } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heartmade Harmony — Handcrafted Customised Gifts" },
      { name: "description", content: "Handcrafted, personalised gifts and art — Lippan, Kundan, resin, silk thread, paintings. Made just for you." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const SLIDES = HERO_IMAGES.map((image, idx) => {
  const titles = [
    { title: "Handcrafted with Love,", accent: "Made Just for You ❤️" },
    { title: "Customised Gifts That", accent: "Create Lasting Memories" },
    { title: "Budget-Friendly Creations", accent: "for Every Occasion" },
    { title: "Unique Return Gifts,", accent: "Personalised for Loved Ones" },
    { title: "Artisan Crafted,", accent: "Handmade for You" },
    { title: "Timeless Elegance,", accent: "Beautifully Personalized" },
    { title: "Premium Quality,", accent: "Affordable Luxury" },
    { title: "Every Piece,", accent: "A Work of Art" },
  ];
  return { image, ...titles[idx % titles.length] };
});

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const wa = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`;
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12">
      <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
          {SLIDES.map((s, idx) => (
            <img
              key={idx}
              src={s.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <img src={IMAGES.logo} alt={BRAND.name} className="float mb-4 h-20 w-20 object-contain shadow-[var(--shadow-soft)] sm:h-24 sm:w-24" />
            <div key={i} className="fade-up max-w-3xl">
              <h1 className="text-3xl text-white drop-shadow-lg sm:text-5xl lg:text-6xl" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                {SLIDES[i].title}
                <span className="script mt-1 block text-pink-200 drop-shadow-lg" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>{SLIDES[i].accent}</span>
              </h1>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/categories"
                className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:scale-105"
              >
                Shop Collection
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-foreground/20 bg-white/70 px-7 py-3 text-sm font-medium backdrop-blur transition hover:bg-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <button
          aria-label="Previous"
          onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/70 backdrop-blur transition hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next"
          onClick={() => setI((p) => (p + 1) % SLIDES.length)}
          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/70 backdrop-blur transition hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-white/80"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "100+", label: "Customized Products Delivered" },
    { value: "50+", label: "Happy Returning Customers" },
    { value: "✓", label: "Bulk Orders Accepted" },
    { value: "❤", label: "Made With Love & Creativity" },
  ];
  return (
    <section className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="glass-card rounded-3xl p-6 text-center">
          <div className="script text-4xl text-primary sm:text-5xl">{s.value}</div>
          <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
        </div>
      ))}
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Sparkles, title: "Fully Customisable", text: "Every product can be personalised to your requirements." },
    { icon: Heart, title: "Budget Friendly", text: "Premium handmade products at affordable prices." },
    { icon: Package, title: "Bulk Orders Accepted", text: "Weddings, birthdays, baby showers & return gifts." },
    { icon: Gift, title: "Handmade With Care", text: "Every item crafted with attention to detail." },
  ];
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Why Choose Us</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Why Heartmade Harmony?</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group rounded-3xl bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--blush)] to-[var(--lavender)] text-primary-foreground">
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

function Showcase() {
  // 4:3 layout — 4 vertical cards + 3 horizontal cards
  const verticals = GLIMPSE_IMAGES.slice(0, 4);
  const horizontals = GLIMPSE_IMAGES.slice(4, 7);
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">A Glimpse of Our Craft</h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {verticals.map((src, idx) => (
          <div key={idx} className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <div className="aspect-[3/4] overflow-hidden bg-secondary/40">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-4 sm:gap-5 md:grid-cols-3">
        {horizontals.map((src, idx) => (
          <div key={idx} className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Best Sellers</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Loved by Our Customers</h2>
        </div>
        <Link to="/categories" className="hidden text-sm text-primary hover:underline sm:block">View all →</Link>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {BESTSELLER_IMAGES.map((src, idx) => {
          const imageFileName = src.split("/").pop() || "";
          const mapping = BESTSELLERS_MAPPING.find((m) => m.image.includes(imageFileName));
          const productId = mapping?.productId;

          const card = (
            <div className="aspect-[3/4] overflow-hidden bg-secondary/40">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          );

          return productId ? (
            <Link
              key={idx}
              to="/product/$id"
              params={{ id: productId }}
              className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)] cursor-pointer"
            >
              {card}
            </Link>
          ) : (
            <div key={idx} className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Explore</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Shop by Category</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.slice(0, 8).map((c) => (
          <Link
            key={c.slug}
            to="/category/$slug"
            params={{ slug: c.slug }}
            className="group relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)]"
          >
            <div className="aspect-square overflow-hidden bg-secondary/40">
              <img src={c.cover} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg drop-shadow">{c.name}</h3>
              <p className="text-xs opacity-90">{c.subs.length} sub-categories</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Reviews</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Kind Words From Our Customers</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {REVIEWS.map((r) => (
          <div key={r.name} className="rounded-3xl bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-3 text-sm text-foreground/80">"{r.text}"</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InstaCTA() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--blush)] via-[var(--peach)] to-[var(--lavender)] p-10 text-center shadow-[var(--shadow-soft)] sm:p-16">
        <p className="script text-3xl text-foreground sm:text-4xl">Follow our craft journey</p>
        <h3 className="mt-2 text-4xl sm:text-5xl">@{BRAND.instagram}</h3>
        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm text-background transition hover:opacity-90"
        >
          Visit Instagram
        </a>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyUs />
      <Showcase />
      <BestSellers />
      <Categories />
      <Reviews />
      <InstaCTA />
    </>
  );
}
