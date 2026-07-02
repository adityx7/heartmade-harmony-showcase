import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES, PRODUCTS, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const CATEGORY_OPTIONS = [{ slug: "all", name: "All categories" }, ...CATEGORIES];

const getPriceValue = (price: string) => {
  const numeric = price.replace(/[^\d]/g, "");
  return numeric ? Number(numeric) : 0;
};

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "All Products — Heartmade Harmony" },
      { name: "description", content: "Browse every handmade product and filter by name, category, and price range." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = PRODUCTS.filter((product) => {
    const searchText = query.trim().toLowerCase();
    const categoryLabel = CATEGORIES.find((entry) => entry.slug === product.category)?.name ?? product.category.replace(/-/g, " ");
    const priceValue = getPriceValue(product.price);
    const min = minPrice === "" ? undefined : Number(minPrice);
    const max = maxPrice === "" ? undefined : Number(maxPrice);

    const matchesSearch =
      searchText === "" ||
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      categoryLabel.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText);
    const matchesCategory = category === "all" || product.category === category;
    const matchesMin = min === undefined || priceValue >= min;
    const matchesMax = max === undefined || priceValue <= max;

    return matchesSearch && matchesCategory && matchesMin && matchesMax;
  });

  const hasFilters = query || category !== "all" || minPrice !== "" || maxPrice !== "";

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> / <span className="text-foreground">All Products</span>
      </nav>

      <div className="mt-4 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Shop Everything</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">All Products</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Search by product name, category, or price range. Open any product to see the full description, details, and enquiry options.
        </p>
      </div>

      <div className="mt-8 rounded-[2rem] border border-[var(--blush)]/30 bg-card/80 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:p-6">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Filters
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <label className="lg:col-span-5">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">Search</span>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, names, categories..."
                className="w-full rounded-full border border-border bg-background px-11 py-3 text-sm outline-none transition focus:border-primary"
              />
            </div>
          </label>

          <label className="lg:col-span-3">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">Category</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            >
              {CATEGORY_OPTIONS.map((option) => (
                <option key={option.slug} value={option.slug}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>

          <label className="lg:col-span-2">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">Min price</span>
            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="0"
              className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </label>

          <label className="lg:col-span-2">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">Max price</span>
            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="10000"
              className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </label>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4 text-sm text-muted-foreground">
          <p>
            Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> of <span className="font-medium text-foreground">{PRODUCTS.length}</span> products
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
                setMinPrice("");
                setMaxPrice("");
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              <X className="h-3.5 w-3.5" />
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="mt-10 rounded-3xl bg-card p-10 text-center shadow-[var(--shadow-card)]">
          <p className="text-muted-foreground">No products matched those filters. Try widening the price range or clearing the search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setMinPrice("");
              setMaxPrice("");
            }}
            className="mt-4 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}