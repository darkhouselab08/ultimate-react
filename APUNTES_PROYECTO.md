# 🛠️ PROYECTO MAESTRO: Renova-Hub (Muebles & Restauración)

Este documento sirve como contexto principal para el desarrollo del ecosistema.

## 1. La Fachada: Landing Page & Galería "Mágica"
- **El Gancho (UI/UX):** Componente interactivo "Antes y Después" con slider para transformaciones de muebles.
- **Optimización (Next.js):** Uso de `next/image` para carga ultrarrápida de fotos de alta resolución (evitar rebote de usuarios).

## 2. El Cerebro: Dashboard & Captación de Leads
- **Lead Magnet:** Cotizador automático con subida de imágenes para obtener estimados de restauración.
- **Sincronización (React Query/SWR):** Actualización de contenido (videos del taller, estados de pedido) en tiempo real sin refrescar la página.

## 3. El Motor Comercial: E-commerce & SEO (Fullstack)
- **SEO Dinámico:** Generación de páginas por servidor (SSR) para cada producto (ej. Pinturas Chalky). URLs amigables para Google.
- **Estado Global:** Carrito de compras persistente entre dispositivos (iPhone <-> Mac Pro).

## 💡 Recomendaciones Técnicas (Toque Maestro)
- **IA de Color:** Integración de API para recomendación de colores basada en fotos de la sala del usuario.
- **Arquitectura Multi-Rol:** Dashboard dividido:
    - *Vista Admin:* Inventario y métricas de ventas (Gráficos).
    - *Vista Cliente:* Estado de restauración y tutoriales premium.
- **Micro-interacciones:** Uso de *Framer Motion* para que el carrito y botones se sientan "vivos" y profesionales.

---
**INSTRUCCIÓN PARA GEMINI (AGY):**
Usa este archivo para guiar mis sesiones de código. Prioriza siempre la escalabilidad y el rendimiento que Next.js ofrece.
