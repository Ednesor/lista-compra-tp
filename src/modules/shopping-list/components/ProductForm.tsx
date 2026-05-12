import { useState } from 'react';
import { useCreateProduct } from '../hooks/useProducts';

export function ProductForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('kg');
  const createProduct = useCreateProduct();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createProduct.mutate(
      { name, quantity, unit, checked: false },
      {
        onSuccess: () => {
          setName('');
          setQuantity(1);
          setUnit('kg');
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        required
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="L">L</option>
        <option value="mL">mL</option>
        <option value="unidades">unidades</option>
      </select>
      <button type="submit" disabled={createProduct.isPending}>
        Agregar
      </button>
    </form>
  );
}
