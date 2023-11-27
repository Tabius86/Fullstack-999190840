import React from 'react';

const Header = (props) => {
    return (
        <>
            <header>
                <div className='holder'>
                    <img src='../img/cabecera.png' width='100' alt='imagen_header'></img>
                    <h1>Mi Jardin - Mi Espacio</h1>  
                </div>
            </header>
        </>
    );
}

export default Header;