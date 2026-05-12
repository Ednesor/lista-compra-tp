import { useProducts } from '../hooks/useProducts';
import { ProductItem } from './ProductItem';
import { ProductForm } from './ProductForm';

export function ShoppingListPage() {
  const { data: products = [], isLoading } = useProducts();

  if (isLoading) return <p>Cargando...</p>;

  const pending = products.filter((p) => !p.checked);
  const completed = products.filter((p) => p.checked);

  return (
    <div>
      <h1>Lista de Compras</h1>
      <ProductForm />
      <section>
        <h2>Pendientes ({pending.length})</h2>
        <ul>
          {pending.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </section>
      <section>
        <h2>Comprados ({completed.length})</h2>
        <ul>
          {completed.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </div>
  );
}
