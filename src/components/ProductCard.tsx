import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group block overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="aspect-[4/5] overflow-hidden bg-secondary/40">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg leading-tight">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium text-primary">Starting {product.price}</span>
          <span className="text-xs text-foreground/60 transition-colors group-hover:text-primary">View →</span>
        </div>
      </div>
    </Link>
  );
}
