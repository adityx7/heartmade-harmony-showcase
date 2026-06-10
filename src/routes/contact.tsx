import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { BRAND } from "@/data/products";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Heartmade Harmony" },
      { name: "description", content: "Get in touch with Heartmade Harmony — WhatsApp, email or Instagram. Custom & bulk orders welcome." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(10, "Message too short").max(800),
});

function Contact() {
  const wa = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const mail = `mailto:${BRAND.email}?subject=${encodeURIComponent(`Enquiry from ${form.name}`)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    )}`;
    window.location.href = mail;
    setSent(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Get in Touch</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Let's Create Together</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Have a custom request or bulk order? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <a href={wa} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366]/15 text-[#25D366]"><MessageCircle className="h-6 w-6" /></div>
            <div><div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div><div className="font-medium">{BRAND.whatsappDisplay}</div></div>
          </a>
          <a href={`mailto:${BRAND.email}`} className="flex items-center gap-4 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--blush)]/40 text-primary"><Mail className="h-6 w-6" /></div>
            <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div><div className="font-medium">{BRAND.email}</div></div>
          </a>
          <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-tr from-[#f58529]/20 via-[#dd2a7b]/20 to-[#8134af]/20 text-[#dd2a7b]"><Instagram className="h-6 w-6" /></div>
            <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div><div className="font-medium">@{BRAND.instagram}</div></div>
          </a>
          <div className="flex items-center gap-4 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)]">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--sage)]/40 text-foreground"><MapPin className="h-6 w-6" /></div>
            <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div><div className="font-medium">Shipping pan-India</div></div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-3xl bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          {sent ? (
            <div className="grid place-items-center py-10 text-center">
              <p className="script text-3xl text-primary">Thank you!</p>
              <p className="mt-2 text-sm text-muted-foreground">Your email client has opened — we'll reply soon.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {[
                { k: "name", label: "Name", type: "text" },
                { k: "email", label: "Email", type: "email" },
                { k: "phone", label: "Phone", type: "tel" },
              ].map(({ k, label, type }) => (
                <div key={k}>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
                  <input
                    type={type}
                    value={(form as any)[k]}
                    onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                    className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                  {errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>}
                </div>
              ))}
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                Send Message
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
