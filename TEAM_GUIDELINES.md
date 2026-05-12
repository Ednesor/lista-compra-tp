# 🛒 Lista de Compra TP - Team Guidelines

¡Bienvenidos al proyecto, equipo! Este documento es el contrato sagrado para que trabajemos en armonía.

## 🏗️ Arquitectura del Proyecto (Screaming Architecture)
Usamos una estructura basada en módulos. Cada uno trabaja en su cueva:
- `src/modules/auth`: Todo lo referente a login y sesión.
- `src/modules/shopping-list`: La lógica central de la lista.
- `src/router`: Configuración de rutas.
- `src/api`: Configuración de base para las llamadas al servidor.

## 📦 Contrato de Datos (Mati & Edgar - ¡OJO ACÁ!)
Para que todo encaje, el objeto **Product** debe tener esta forma:

```typescript
interface Product {
  id: string;          // Generado por json-server
  name: string;        // Nombre del producto (ej: "Leche")
  quantity: number;    // Cantidad (ej: 2)
  category: string;    // Categoría (ej: "Lácteos")
  isCompleted: boolean; // Si ya se compró o no
  createdAt: string;   // Fecha de creación (ISO string)
}
```

## 🚀 Flujo de Trabajo
1. **Mati**: Define el `db.json` siguiendo el contrato de arriba.
2. **Lean**: Configura el `AppRouter` apuntando a las páginas de los módulos.
3. **Eze**: Implementa el store de Auth en `zustand`.
4. **Edgar**: Crea los hooks con `TanStack Query` para el CRUD de productos.

## 💅 Estándares de Código
- **Componentes**: PascalCase (ej: `ProductItem.tsx`).
- **Hooks**: camelCase con prefijo use (ej: `useShoppingList.ts`).
- **CSS**: Vanilla CSS o lo que decida el equipo, pero mantenelo limpio.
- **Imports**: Siempre tratá de usar los `index.ts` de cada módulo para exportar.

---
¡DALE QUE ESTO SALE VOLANDO! 🚀