import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './assets/components/NavBar';
import Contenedor from './assets/components/Contenedor';
import ItemListContainer from './assets/components/ItemListContainer';
import ItemDetailContainer from './assets/components/ItemDetailContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}

export default App;
