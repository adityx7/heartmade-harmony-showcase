import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { BRAND, PRODUCTS, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Mail, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }): { product: Product; related: Product[] } => {
    const product = PRODUCTS.find((p) => p.id === params.id);
    if (!product) throw notFound();
    const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
    return { product, related };
  },
  head: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.id);
    return {
      meta: [
        { title: `${product?.name ?? "Product"} — Heartmade Harmony` },
        { name: "description", content: product?.description ?? "Handmade product." },
        { property: "og:image", content: product?.images[0] ?? "" },
      ],
      links: [{ rel: "canonical", href: `/product/${params.id}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl">Product not found</h1>
      <Link to="/categories" className="mt-4 inline-block text-primary hover:underline">Browse categories</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div role="alert" className="p-10 text-center">{error.message}</div>,
  component: ProductPage,
});

function ProductPage() {
  const { product, related } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const instagramLink = product.reel || BRAND.instagramUrl;
  const instagramLabel = product.reel ? "View reel on Instagram" : `View on Instagram: @${BRAND.instagram}`;

  const wa = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi ${BRAND.name}, I would like to enquire about ${product.name}.`
  )}`;
  const mail = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    `Enquiry for ${product.name}`
  )}&body=${encodeURIComponent(
    `Hello ${BRAND.name},\n\nI would like more details regarding ${product.name}.\n\nThank you.`
  )}`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> /{" "}
        <Link to="/category/$slug" params={{ slug: product.category }} className="hover:text-primary capitalize">
          {product.category.replace("-", " ")}
        </Link>{" "}
        / <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <div
            className={`relative overflow-hidden rounded-3xl bg-secondary/40 shadow-[var(--shadow-card)] ${zoom ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            onClick={() => setZoom((z) => !z)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.images[active]}
                alt={product.name}
                className={`h-full w-full object-cover transition-transform duration-500 ${zoom ? "scale-150" : "scale-100"}`}
              />
            </div>
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex items-center justify-between gap-3">
              <button
                onClick={() => setActive((i) => (i - 1 + product.images.length) % product.images.length)}
                className="grid h-10 w-10 place-items-center rounded-full bg-secondary/60 transition hover:bg-secondary"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-3 overflow-x-auto">
                {product.images.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`overflow-hidden rounded-2xl border-2 transition flex-shrink-0 ${i === active ? "border-primary" : "border-transparent"}`}
                  >
                    <img src={img} alt="" className="h-20 w-20 object-cover" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setActive((i) => (i + 1) % product.images.length)}
                className="grid h-10 w-10 place-items-center rounded-full bg-secondary/60 transition hover:bg-secondary"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-2xl text-primary">Starting {product.price}</p>
          <p className="mt-4 text-sm text-foreground/80">{product.description}</p>

          <dl className="mt-6 grid grid-cols-1 gap-3 rounded-3xl bg-card p-6 text-sm shadow-[var(--shadow-card)] sm:grid-cols-2">
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Size</dt><dd>{product.size}</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Material</dt><dd>{product.material}</dd></div>
            <div className="sm:col-span-2"><dt className="text-xs uppercase tracking-widest text-muted-foreground">Customisation</dt><dd>{product.customisation}</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Delivery</dt><dd>{product.delivery}</dd></div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Availability</dt>
              <dd className={product.available ? "text-emerald-700" : "text-destructive"}>
                {product.available ? "In stock — made to order" : "Currently unavailable"}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </a>
            <a href={mail} className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-6 py-3 text-sm font-medium transition hover:bg-secondary">
              <Mail className="h-4 w-4" /> Email Enquiry
            </a>
          </div>

          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm text-primary hover:underline"
          >
            ▶ {instagramLabel}
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl">You may also love</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p: Product) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </section>
  );
}
