import React from 'react';
import '../estilos/Home.css';

const Home = (props) => {
    return (
        <div className='bhome'>
            <main className="principal">
                <div className="Contenido">
                    <section className="Presentacion">
                    <h2>Bienvenido a Mi Jardin - Mi Espacio</h2>
                    <p>
                        Pagina creada para los amantes de la jardineria amateur, en la misma
                        te enseñaremos desde como mantener tu pequeña huerta hasta como
                        diseñar un parque en tu casa mediante articulos propios y de
                        nuestros amigos. Quedate con nosotros para conocer mas!
                    </p>
                    </section>
                    <h2>Nuestro equipo</h2>
                <div className="Articulos">
                    <div className="Articulo">
                        <img src="../img/Redactor.png" alt="redaccion" />
                        <h4>Redaccion</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                            placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                            explicabo quia tenetur aut totam possimus numquam minus, quisquam
                            minima quo. Quisquam, iusto.
                        </p>
                    </div>
                    <div className="Articulo">
                        <img src="../img/Edicion.png" alt="edicion" />
                        <h4>Edicion</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                            placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                            explicabo quia tenetur aut totam possimus numquam minus, quisquam
                            minima quo. Quisquam, iusto.
                        </p>
                    </div>
                    <div className="Articulo">
                        <img src="../img/vendedora.png" alt="ventas" />
                        <h4>Ventas</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                            placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                            explicabo quia tenetur aut totam possimus numquam minus, quisquam
                            minima quo. Quisquam, iusto.
                        </p>
                    </div>
                    <div className="Articulo">
                        <img src="../img/redes.png" alt="redes" />
                        <h4>Redes Sociales</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                            placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                            explicabo quia tenetur aut totam possimus numquam minus, quisquam
                            minima quo. Quisquam, iusto.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
    );
}

export default Home;