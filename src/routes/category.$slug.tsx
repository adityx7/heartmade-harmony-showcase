import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }): { cat: (typeof CATEGORIES)[number]; products: Product[] } => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { cat, products: PRODUCTS.filter((p) => p.category === cat.slug) };
  },
  head: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    const title = cat ? `${cat.name} — Heartmade Harmony` : "Category — Heartmade Harmony";
    return {
      meta: [
        { title },
        { name: "description", content: `Shop our ${cat?.name ?? "handmade"} collection — personalised, budget-friendly and made with love.` },
      ],
      links: [{ rel: "canonical", href: `/category/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl">Category not found</h1>
      <Link to="/categories" className="mt-4 inline-block text-primary hover:underline">Back to categories</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div role="alert" className="p-10 text-center">{error.message}</div>,
  component: CategoryPage,
});

function CategoryPage() {
  const { cat, products } = Route.useLoaderData();
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> /{" "}
        <Link to="/categories" className="hover:text-primary">Categories</Link> /{" "}
        <span className="text-foreground">{cat.name}</span>
      </nav>
      <h1 className="mt-4 text-4xl sm:text-5xl">{cat.name}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{cat.subs.join(" · ")}</p>

      {products.length === 0 ? (
        <div className="mt-12 rounded-3xl bg-card p-10 text-center shadow-[var(--shadow-card)]">
          <p className="text-muted-foreground">
            New pieces coming soon. Reach out for custom orders!
          </p>
          <Link to="/contact" className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground">
            Enquire
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p: Product) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </section>
  );
}
