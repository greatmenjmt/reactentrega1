import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const productos = [
  { id: '1', nombre: 'Producto A', categoria: 'categoria1' },
  { id: '2', nombre: 'Producto B', categoria: 'categoria2' },
  { id: '3', nombre: 'Producto C', categoria: 'categoria1' },
];

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoria
            ? productos.filter((p) => p.categoria === categoria)
            : productos
        );
      }, 1000);
    });

    obtenerProductos.then((res) => setItems(res));
  }, [categoria]);

  return (
    <div>
      <h2>{categoria ? `Productos de ${categoria}` : 'Todos los productos'}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/producto/${item.id}`}>{item.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
