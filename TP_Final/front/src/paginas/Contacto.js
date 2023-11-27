import React from 'react';
import '../estilos/Contacto.css';

const Contacto = (props) => {
    return (
        <div>
            <main>
                <div>
                    <form className="formulario"> 
                        <div className="container"> 
                            <h2 className="titulo">Contactanos</h2>
                            <input type="text" className="input" placeholder="Nombre:" />
                            <input type="email" className="input" placeholder="Email:" />
                            <textarea
                            className="input input-text"
                            placeholder="Mensaje:"
                            ></textarea>
                            <input className="boton_enviar" type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Contacto;