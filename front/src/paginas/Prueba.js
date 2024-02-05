import React from 'react';
import '../estilos/Prueba.css';

const Prueba = (props) => {
    return (
        <div>
            <main className="principal">
                <div className="Contenido">
                    <section className="Nota">
                        <h2>Esta pagina es una Prueba</h2>
                        <p>
                            Hola aqui deberia ir el contenido de la nota!
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Prueba;