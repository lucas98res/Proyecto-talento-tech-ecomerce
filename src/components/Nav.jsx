import React from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { CarritoProvider } from '../context/CarritoContext';
import { useAuthContext } from '../context/AuthContext';
import "../styles/nav.css"

function Navbar() {
    const { user, admin } = useAuthContext();
    return (
        <nav className='navbar'>
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>
                <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio </Link></li>
                <li><Link to="/Infotienda" style={{ color: "white", textDecoration: "none" }}>Información</Link></li>
                <li><Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</Link></li>
                <li><Link to="/productos" style={{ color: "white", textDecoration: "none" }}>Productos</Link></li>
                <li><Link to="/Login" style={{ color: "white", textDecoration: "none" }}>Sesión</Link></li>
                <li><Link to="/Carrito" style={{ color: "white", textDecoration: "none" }}>Carrito</Link></li>
                {admin ? <li><Link to="/Admin" style={{ color: "white", textDecoration: "none" }}>Admin</Link></li> : <></>}
                {admin ? <li><Link to="/Admin/agregarProductos" style={{ color: "white", textDecoration: "none" }}>Agregar Productos</Link></li> : <></>}
            </ul>
        </nav >
    );
}
export default Navbar; 
