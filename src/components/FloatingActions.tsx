import { BRAND } from "@/data/products";
import { Instagram, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const wa = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi ${BRAND.name}, I would like to enquire about your products.`
  )}`;
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={BRAND.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
      >
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );
}
