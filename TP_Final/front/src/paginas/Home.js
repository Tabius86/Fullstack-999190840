import React from 'react';
import '../estilos/Home.css';

const Home = (props) => {
    return (
        <div>
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
                    <h2>Articulos Destacados</h2>
                </div>
            <div className="Articulos">
                <div className="Articulo">
                    <img src="../img/posts/Huerta en macetas.png" alt="huerta" />
                    <h4>Huerta en macetas</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                        placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                        explicabo quia tenetur aut totam possimus numquam minus, quisquam
                        minima quo. Quisquam, iusto. <a href="prueba.html">Leer</a>
                    </p>
                </div>
                <div className="Articulo">
                    <img src="../img/posts/fertilizantes.png" alt="npk" />
                    <h4>Aprende que fertilizantes llevan tus plantas</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                        placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                        explicabo quia tenetur aut totam possimus numquam minus, quisquam
                        minima quo. Quisquam, iusto. <a href="prueba.html">Leer</a>
                    </p>
                </div>
                <div className="Articulo">
                    <img src="../img/posts/macetas.png" alt="macetas" />
                    <h4>Que plantas van bien en macetas</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                        placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                        explicabo quia tenetur aut totam possimus numquam minus, quisquam
                        minima quo. Quisquam, iusto. <a href="prueba.html">Leer</a>
                    </p>
                </div>
                <div className="Articulo">
                    <img src="../img/posts/cesped.png" alt="cesped" />
                    <h4>El cuidado del cesped</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                        placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                        explicabo quia tenetur aut totam possimus numquam minus, quisquam
                        minima quo. Quisquam, iusto. <a href="prueba.html">Leer</a>
                    </p>
                </div>
                <div className="Articulo">
                    <img src="../img/posts/plagas.png" alt="bichos" />
                    <h4>Las plagas del verano - Como combatirlas</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                        placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                        explicabo quia tenetur aut totam possimus numquam minus, quisquam
                        minima quo. Quisquam, iusto. <a href="prueba.html">Leer</a>
                    </p>
                </div>
                <div className="Articulo">
                    <img src="../img/posts/herramientas.png" alt="herramientas" />
                    <h4>Herramientas de Jardineria</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                        placeat consequuntur. Eligendi, molestiae ex quasi in reiciendis
                        explicabo quia tenetur aut totam possimus numquam minus, quisquam
                        minima quo. Quisquam, iusto. <a href="prueba.html">Leer</a>
                    </p>
                </div>
            </div>
    </main>
        </div>
    );
}

export default Home;