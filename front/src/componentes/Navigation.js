import React from 'react';
import { NavLink } from 'react-router-dom';
import '../estilos/Nav.css';

const Navigation = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className='{({isActive}) => isActive ? "activo" : undefined}'>Inicio</NavLink></li>
                    <li><NavLink to="/Posts" className='{({isActive}) => isActive ? "activo" : undefined}'>Posts</NavLink></li>
                    <li><NavLink to="/Productos" className='{({isActive}) => isActive ? "activo" : undefined}'>Productos</NavLink></li>
                    <li><NavLink to="/Contacto" className='{({isActive}) => isActive ? "activo" : undefined}'>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;