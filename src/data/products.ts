import logo from "@/assets/logo.png.asset.json";
import kundanBangles from "@/assets/kundan-bangles.png.asset.json";
import kundanHairband from "@/assets/kundan-hairband.png.asset.json";
import fridgeMagnets from "@/assets/fridge-magnets.jpg";
import lippanArt from "@/assets/lippan-art.jpg";
import resinWork from "@/assets/resin-work.jpg";
import namePlate from "@/assets/name-plate.jpg";
import silkBangles from "@/assets/silk-thread-bangles.jpg";
import paintings from "@/assets/paintings.jpg";
import bowClips from "@/assets/bow-clips.jpg";
import diyas from "@/assets/diyas.jpg";

export const IMAGES = {
  logo: logo.url,
  kundanBangles: kundanBangles.url,
  kundanHairband: kundanHairband.url,
  fridgeMagnets,
  lippanArt,
  resinWork,
  namePlate,
  silkBangles,
  paintings,
  bowClips,
  diyas,
};

export const BRAND = {
  name: "Heartmade Harmony",
  tagline: "Made just for you!",
  instagram: "heartmade_harmony",
  instagramUrl: "https://instagram.com/heartmade_harmony",
  whatsapp: "+919999999999",
  whatsappDisplay: "+91 99999 99999",
  email: "hello@heartmadeharmony.com",
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  images: string[];
  size?: string;
  material?: string;
  customisation?: string;
  delivery?: string;
  available?: boolean;
  reel?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "kundan-hairlong-clip",
    name: "Kundan HairLong Clip",
    category: "hair-accessories",
    price: "₹299",
    description: "Elegant kundan-embellished hair long clips. Perfect as personalised return gifts.",
    images: [IMAGES.kundanBangles, IMAGES.kundanHairband],
    size: "Standard",
    material: "Kundan stones, gold-plated base",
    customisation: "Choose your stone colour combination",
    delivery: "5–7 days",
    available: true,
  },
  {
    id: "kundan-hairband",
    name: "Kundan Hairband",
    category: "hair-accessories",
    price: "₹249",
    description: "Stunning kundan flower hairband with vibrant stonework. A perfect return gift idea.",
    images: [IMAGES.kundanHairband, IMAGES.kundanBangles],
    size: "One size",
    material: "Kundan, elastic band",
    customisation: "Colour customisable",
    delivery: "5–7 days",
    available: true,
  },
  {
    id: "fridge-magnets",
    name: "Customised Fridge Magnets",
    category: "magnets",
    price: "₹149",
    description: "Hand-painted personalised fridge magnets — names, faces or favourite quotes.",
    images: [IMAGES.fridgeMagnets],
    size: "2.5\" / 3\"",
    material: "Clay & acrylic paint",
    customisation: "Name, theme & colour customisable",
    delivery: "7–10 days",
    available: true,
  },
  {
    id: "lippan-art",
    name: "Lippan Art Wall Hanging",
    category: "lippan",
    price: "₹899",
    description: "Traditional Kutch mirror & clay Lippan art — entirely handcrafted with care.",
    images: [IMAGES.lippanArt],
    size: "12\" round / customisable",
    material: "Clay, mirrors, beads",
    customisation: "Size & colour customisable",
    delivery: "10–14 days",
    available: true,
  },
  {
    id: "resin-work",
    name: "Pressed-Flower Resin Coasters",
    category: "resin",
    price: "₹499",
    description: "Crystal-clear resin coasters with real pressed flowers — set of 4.",
    images: [IMAGES.resinWork],
    size: "Set of 4",
    material: "Epoxy resin, dried flowers",
    customisation: "Choose flower colour & shape",
    delivery: "7–10 days",
    available: true,
  },
  {
    id: "name-plate",
    name: "Hand-painted Name Plate",
    category: "name-plates",
    price: "₹799",
    description: "Customised wooden name plate, hand-painted with delicate floral motifs.",
    images: [IMAGES.namePlate],
    size: "12\" x 5\"",
    material: "MDF wood, acrylic paint",
    customisation: "Name, font & florals",
    delivery: "7–10 days",
    available: true,
  },
  {
    id: "silk-thread-bangles",
    name: "Silk Thread Bangles",
    category: "silk-thread",
    price: "₹349",
    description: "Pastel silk thread bangles — soft, elegant and perfect for every occasion.",
    images: [IMAGES.silkBangles],
    size: "2.4 – 2.8 inch",
    material: "Silk thread, beads",
    customisation: "Colour combinations on request",
    delivery: "5–7 days",
    available: true,
  },
  {
    id: "floral-painting",
    name: "Floral Canvas Painting",
    category: "paintings",
    price: "₹1,299",
    description: "Original hand-painted canvas — soft florals in pastel tones.",
    images: [IMAGES.paintings],
    size: "12\" x 16\"",
    material: "Canvas, acrylic",
    customisation: "Custom size on request",
    delivery: "10–14 days",
    available: true,
  },
  {
    id: "bow-clips",
    name: "Pastel Bow Clips",
    category: "kids",
    price: "₹129",
    description: "Adorable pastel bow clips for little ones — set of 4.",
    images: [IMAGES.bowClips],
    size: "Small / Medium",
    material: "Satin ribbon",
    customisation: "Pick your colours",
    delivery: "3–5 days",
    available: true,
  },
  {
    id: "decorated-diyas",
    name: "Decorated Diyas",
    category: "hand-painted",
    price: "₹399",
    description: "Festive hand-decorated diyas — set of 6. Perfect for Diwali return gifts.",
    images: [IMAGES.diyas],
    size: "Set of 6",
    material: "Clay diyas, paint, beads",
    customisation: "Colour theme on request",
    delivery: "5–7 days",
    available: true,
  },
];

export const CATEGORIES = [
  { slug: "magnets", name: "Customised Fridge Magnets", cover: IMAGES.fridgeMagnets, subs: ["Devi Magnet", "Clay Magnets", "Paint Magnets"] },
  { slug: "silk-thread", name: "Silk Thread", cover: IMAGES.silkBangles, subs: ["Bangles", "Saree Pin", "Broach", "Earrings"] },
  { slug: "lippan", name: "Customised Lippan Art", cover: IMAGES.lippanArt, subs: ["Name Plates", "Wall Hangings"] },
  { slug: "kids", name: "Kids Section", cover: IMAGES.bowClips, subs: ["Bow Clips", "Fridge Magnets", "Scrunchies"] },
  { slug: "rangoli", name: "Kundan Rangoli", cover: IMAGES.kundanBangles, subs: ["Rangoli"] },
  { slug: "hair-accessories", name: "Hair Accessories", cover: IMAGES.kundanHairband, subs: ["Kundan Rubber Band", "Jade Bille", "Kundan Clips", "Jasmine Clips", "Butterfly Clips", "Mane"] },
  { slug: "hand-painted", name: "Hand Painted", cover: IMAGES.diyas, subs: ["Diyas", "Necklace Sets"] },
  { slug: "resin", name: "Resin Work", cover: IMAGES.resinWork, subs: ["Coasters", "Jewellery"] },
  { slug: "paintings", name: "Paintings", cover: IMAGES.paintings, subs: ["Canvas", "Doll Decorations"] },
  { slug: "name-plates", name: "Name Plates", cover: IMAGES.namePlate, subs: ["Wooden", "Acrylic"] },
];

export const REVIEWS = [
  { name: "Priya S.", text: "Absolutely loved the customized magnets. Beautiful finish and timely delivery." },
  { name: "Kavya M.", text: "The perfect return gifts for my daughter's birthday. Everyone loved them." },
  { name: "Sneha R.", text: "Budget-friendly and excellent quality. Will definitely order again." },
  { name: "Deepa N.", text: "The Lippan art piece exceeded my expectations. Highly recommended." },
];

export const productCountByCategory = (slug: string) =>
  PRODUCTS.filter((p) => p.category === slug).length;
