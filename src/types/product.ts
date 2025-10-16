/**
 * Define la estructura de un solo producto en la tienda.
 */
export interface Product {
  id: number;
  slug: string; // Para rutas amigables (ej: /product/auriculares-inalambricos-pro)
  name: string;
  description: string;
  price: number; // Precio en USD
  isNew: boolean; // Para marcar productos nuevos o destacados
  category: string; // Ej: 'audio', 'wearables', 'computing'
  image_url: string; // URL o ruta a una imagen de producto
  stock: number;
  tags: string[];
  rating: number;
}
