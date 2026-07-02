import logo from "@/assets/logo.png";
import productsData from "./products.json";
import { getProductImageUrl } from "./imageLoader";

export const IMAGES = {
  logo,
};

export const BRAND = productsData.brand;

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

// Transform products to use properly imported images
export const PRODUCTS: Product[] = productsData.products.map((product) => ({
  ...product,
  images: product.images.map((imagePath) => getProductImageUrl(imagePath)),
}));

// Transform categories to use properly imported cover images
export const CATEGORIES = productsData.categories.map((category) => ({
  ...category,
  cover: getProductImageUrl(category.cover),
}));

// Transform and export hero images
export const HERO_IMAGES = productsData.hero.map((imagePath) => getProductImageUrl(imagePath));

// Transform and export glimpse images
export const GLIMPSE_IMAGES = productsData.glimpse.map((imagePath) => getProductImageUrl(imagePath));

// Transform and export bestseller images
export const BESTSELLER_IMAGES = productsData.bestsellers.map((imagePath) => getProductImageUrl(imagePath));

// Export bestseller mapping
export const BESTSELLERS_MAPPING = productsData.bestsellersMapping;

// Helper function to get product ID from bestseller image
export const getBestsellerProductId = (imagePath: string): string | undefined => {
  const mapping = BESTSELLERS_MAPPING.find((m) => m.image === imagePath);
  return mapping?.productId;
};

export const REVIEWS = [
  { name: "Priya S.", text: "Absolutely loved the customized magnets. Beautiful finish and timely delivery." },
  { name: "Kavya M.", text: "The perfect return gifts for my daughter's birthday. Everyone loved them." },
  { name: "Sneha R.", text: "Budget-friendly and excellent quality. Will definitely order again." },
  { name: "Deepa N.", text: "The Lippan art piece exceeded my expectations. Highly recommended." },
];

export const productCountByCategory = (slug: string) =>
  PRODUCTS.filter((p) => p.category === slug).length;
