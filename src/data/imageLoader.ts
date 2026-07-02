// Dynamically import all product images from the products folder
const imageModules = import.meta.glob<{ default: string }>(
  "@/assets/products/**/*.{jpg,JPG,jpeg,png,gif,webp}",
  { eager: true }
);

// Create a map of image filenames to their paths
const imageMap: Record<string, string> = {};

Object.entries(imageModules).forEach(([path, module]) => {
  // Extract filename from path (e.g., "/assets/products/kundan_hairband_1.jpg" -> "kundan_hairband_1.jpg")
  const filename = path.split("/").pop() || "";
  imageMap[filename] = module.default;
});

/**
 * Get the imported image URL for a product image
 * @param imagePath - The image path from JSON (e.g., "/assets/products/kundan_hairband_1.jpg")
 * @returns The imported image URL or the original path as fallback
 */
export function getProductImageUrl(imagePath: string): string {
  if (!imagePath) return "";
  
  // Extract filename from path
  const filename = imagePath.split("/").pop() || "";
  
  // Return mapped image or fallback to original path
  return imageMap[filename] || imagePath;
}

export default imageMap;
