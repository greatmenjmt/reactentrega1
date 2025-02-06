import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const productos = [
  { id: '1', nombre: 'Producto A', categoria: 'categoria1', descripcion: 'Descripción del producto A' },
  { id: '2', nombre: 'Producto B', categoria: 'categoria2', descripcion: 'Descripción del producto B' },
  { id: '3', nombre: 'Producto C', categoria: 'categoria1', descripcion: 'Descripción del producto C' },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProducto = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((p) => p.id === id));
      }, 1000);
    });

    obtenerProducto.then((res) => setProducto(res));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
