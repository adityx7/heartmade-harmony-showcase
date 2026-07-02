import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { BRAND, IMAGES } from "@/data/products";

export function SiteFooter() {
  const wa = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`;
  return (
    <footer className="mt-24 border-t border-[var(--blush)]/30 bg-gradient-to-b from-transparent to-[var(--cream)]/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt={BRAND.name} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="brand text-2xl text-primary">{BRAND.name}</div>
              <div className="text-xs text-muted-foreground">{BRAND.tagline}</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Crafting Memories, One Handmade Creation at a Time ❤️
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium uppercase tracking-widest text-foreground/80">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/categories" className="hover:text-primary">Categories</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium uppercase tracking-widest text-foreground/80">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                <Instagram className="h-4 w-4" /> @{BRAND.instagram}
              </a>
            </li>
            <li>
              <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                <MessageCircle className="h-4 w-4" /> {BRAND.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> {BRAND.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium uppercase tracking-widest text-foreground/80">Bulk Orders</h4>
          <p className="text-sm text-muted-foreground">
            Weddings, birthdays, baby showers, corporate events & return gifts.
            Reach out for custom orders.
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--blush)]/30 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
