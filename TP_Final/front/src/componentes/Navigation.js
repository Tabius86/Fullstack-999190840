import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Posts">Posts</Link></li>
                    <li><Link to="/Productos">Productos</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;