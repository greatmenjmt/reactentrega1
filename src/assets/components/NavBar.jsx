import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/imagenes/vpn.png" alt="VPN's" width="60" />
        <span>VPN's</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/servicios">Servicios</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <div className="cart">
        <a href="/carrito">
          <span>Carrito</span>
          <span className="cart-count">0</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
