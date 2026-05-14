import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { CategoryMetadata, getCategoryMetadata } from "./categories";
import { Service, ServiceMetadata } from "./types";

const root = path.join(process.cwd(), "src", "contents", "services");

// Helper function to recursively get all MDX files from subdirectories
function getAllMdxFiles(dir: string): string[] {
  const files: string[] = [];

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // Recursively scan subdirectories
      files.push(...getAllMdxFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

// Helper function to get category from file path
function getCategoryFromPath(filePath: string): string {
  const relativePath = path.relative(root, filePath);
  const pathParts = relativePath.split(path.sep);

  // If the file is in a subdirectory, use that as the category
  if (pathParts.length > 1) {
    return pathParts[0];
  }

  // If no subdirectory, extract category from frontmatter
  return "";
}

export function getServiceBySlug(slug: string, category?: string): Service | null {
  try {
    let filePath: string;

    if (category) {
      // Look in specific category folder
      filePath = path.join(root, category, `${slug}.mdx`);
    } else {
      // Search all subdirectories for the slug
      const allFiles = getAllMdxFiles(root);
      const targetFile = allFiles.find((file) => {
        const fileName = path.basename(file, ".mdx");
        return fileName === slug;
      });

      if (!targetFile) {
        return null;
      }

      filePath = targetFile;
    }

    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);

    const serviceCategory = category || getCategoryFromPath(filePath);

    return {
      metadata: {
        ...(data as ServiceMetadata),
        slug,
        category: serviceCategory,
      },
      content,
    };
  } catch {
    return null;
  }
}

export function getServices(limit?: number, category?: string): ServiceMetadata[] {
  let files: string[];

  if (category) {
    // Get files from specific category
    const categoryPath = path.join(root, category);
    if (!fs.existsSync(categoryPath)) {
      return [];
    }
    files = getAllMdxFiles(categoryPath);
  } else {
    // Get all files from all categories
    files = getAllMdxFiles(root);
  }

  const services = files.map((filePath) => {
    const slug = path.basename(filePath, ".mdx");
    const fileCategory = category || getCategoryFromPath(filePath);

    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data } = matter(fileContent);

    return {
      ...(data as ServiceMetadata),
      slug,
      category: fileCategory,
    };
  });

  // Sort by id in ascending order
  services.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

  if (limit) {
    return services.slice(0, limit);
  }

  return services;
}

export function getCategories(): string[] {
  const categories = new Set<string>();

  const items = fs.readdirSync(root, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      categories.add(item.name);
    }
  }

  return Array.from(categories).sort();
}

export function getServicesByCategory(category: string, limit?: number): ServiceMetadata[] {
  return getServices(limit, category);
}

export function getCategoriesWithMetadata(): CategoryMetadata[] {
  const categoryIds = getCategories();

  return categoryIds.map((categoryId) => getCategoryMetadata(categoryId));
}

export function getServiceMetadata(filepath: string): ServiceMetadata & { slug: string } {
  const slug = path.basename(filepath, ".mdx");
  const fileCategory = getCategoryFromPath(filepath);

  const filePath = path.join(root, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);

  return { ...(data as ServiceMetadata), slug, category: fileCategory };
}
