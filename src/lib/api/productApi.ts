// src/lib/api/productApi.ts

// Asegúrate de que esta ruta apunte correctamente a src/lib/data/products.json
import productsData from "@/lib/api/products.json";
// Asegúrate de que esta ruta apunte correctamente a src/types/product.ts
import type { Product } from "../../types/product";

// 1. Define el tipo exacto de la estructura que viene de products.json.
// Esto ayuda a TypeScript a entender la estructura "cruda".
interface ProductJson {
  id: number;
  name: string;
  slug: string; // Para rutas amigables (ej: /product/auriculares-inalambricos-pro)
  description: string;
  price: number; // Precio en USD
  isNew: boolean; // Para marcar productos nuevos o destacados
  category: string; // Ej: 'audio', 'wearables', 'computing'
  image_url: string; // URL o ruta a una imagen de producto
  stock: number;
  tags: string[];
  rating: number;
}

/**
 * Función de mapeo para transformar la estructura de datos del JSON local
 * a la estructura requerida por la interfaz 'Product'.
 * @param jsonProduct El objeto tal como está en products.json
 * @returns El objeto transformado para que coincida con la interfaz Product.
 */
function mapProductData(jsonProduct: ProductJson): Product {
  // Aquí se realiza la transformación de los nombres de campos del JSON
  // a los nombres de campos de la interfaz Product.
  return {
    id: jsonProduct.id,
    slug: jsonProduct.slug,
    name: jsonProduct.name,
    description: jsonProduct.description,
    price: jsonProduct.price,
    image_url: jsonProduct.image_url,
    category: jsonProduct.category,
    // La interfaz 'Product' requiere 'isNew', la calculamos si tiene el tag 'Nuevo'
    isNew: jsonProduct.isNew ? true : false,
    // Propiedades adicionales que sí coinciden:
    stock: jsonProduct.stock,
    tags: jsonProduct.tags,
    rating: jsonProduct.rating,
  };
}

/**
 * Retorna todos los productos del catálogo de forma simulada,
 * asegurando que los datos cumplan con la interfaz Product.
 * @returns {Promise<Product[]>} Una promesa que resuelve con el array de productos.
 */
export async function getProducts(): Promise<Product[]> {
  // Aquí se realiza la aserción de tipo para que TypeScript confíe en el formato del JSON
  const productsJsonArray = productsData as ProductJson[];

  // Mapea cada producto al formato correcto de Product[]
  const mappedProducts = productsJsonArray.map(mapProductData);

  return mappedProducts;
}

/**
 * Retorna un producto específico buscando por su slug.
 * @param {string} slug El slug único del producto.
 * @returns {Promise<Product | undefined>} Una promesa que resuelve con el producto o undefined si no se encuentra.
 */
export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  // Busca el producto en el array de datos como JSON
  const productJson = productsData.find((p: any) => p.slug === slug);

  if (!productJson) {
    return undefined;
  }

  // Mapea el producto individual al formato Product antes de retornarlo.
  return mapProductData(productJson as ProductJson);
}
