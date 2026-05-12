import type { Product } from '../types';
import { useToggleDone, useDeleteProduct } from '../hooks/useProducts';

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const toggleDone = useToggleDone();
  const deleteProduct = useDeleteProduct();

  const handleToggle = () => {
    toggleDone.mutate({ id: product.id!, done: !product.checked });
  };

  const handleDelete = () => {
    deleteProduct.mutate(product.id!);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={product.checked ?? false}
          onChange={handleToggle}
        />
        <span style={{ textDecoration: product.checked ? 'line-through' : 'none' }}>
          {product.name} - {product.quantity} {product.unit}
        </span>
      </label>
      <button type="button" onClick={handleDelete}>
        Eliminar
      </button>
    </li>
  );
}
