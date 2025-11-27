```
└── 📁src
├── 📁assets
│   ├── 📁fonts       // Para fuentes personalizadas.
│   └── 📁images      // Para imágenes estáticas (logotipos, banners, etc.).
│       ├── astro-logo.svg
│       └── background.jpg
├── 📁components      // Componentes reutilizables.
│   ├── 📁ui          // Componentes de interfaz de usuario (Botones, Inputs, etc.)
│   │   ├── Button.astro
│   │   └── Spinner.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── HeroSection.astro
│   ├── ProductCard.astro
│   ├── Breadcrumbs.astro
│   └── ErrorMessage.astro // Para mostrar errores de API/red.
├── 📁data            // Para datos estáticos que no provienen de la API (ej. menú de navegación).
│   └── navigation.ts // O .js, si usas JS simple.
├── 📁layouts
│   └── Layout.astro
├── 📁lib             // Para utilidades generales, funciones de ayuda.
│   ├── 📁utils       // Funciones utilitarias (formato de moneda, validación, etc.).
│   │   └── formatters.ts
│   └── api           // Lógica de consumo de API (¡CRUCIAL!).
│       └── productApi.ts // Funciones de fetch para productos.
├── 📁pages           // Rutas del sitio web.
│   ├── 📁product
│   │   └── [slug].astro  // Ruta dinámica para detalles de producto.
│   ├── 404.astro         // Página de error 404 (buena práctica).
│   ├── cart.astro
│   ├── checkout.astro    // ¡Falta importante! La página de pago.
│   ├── index.astro
│   ├── products.astro    // Página de lista/catálogo de productos.
│   └── about.astro       // Página informativa estándar.
├── 📁styles
│   └── global.css
└── 📁types           // ¡CRUCIAL! Definiciones de tipos/interfaces de TypeScript.
├── product.ts      // Interfaces para la estructura de los datos del producto.
└── apiResponse.ts  // Interfaces para la respuesta genérica de la API.
```
