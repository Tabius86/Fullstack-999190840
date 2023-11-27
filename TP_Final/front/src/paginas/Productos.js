import React from 'react';
import '../estilos/Productos.css'

const Productos = (props) => {
    return (
        <div>
            <main className="principal">
                <div className="grilla">
                    <div className="contenedor" id="contenedor1">
                        <div className="carrusel" id="carrusel1">
                            <div className="item" id="item-1">
                                <div className="tarjeta" id="tarjeta1">
                                    <img
                                    src='./img/items/item1-1.png'
                                    alt="imagen1-1"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-3"><i>&lt;</i></a>
                                    <a className="a" href="#item-2"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-2">
                                <div className="tarjeta" id="tarjeta2">
                                    <img
                                    src="./img/items/item1-2.png"
                                    alt="imagen1-2"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-1"><i>&lt;</i></a>
                                    <a className="a" href="#item-3"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-3">
                                <div className="tarjeta" id="tarjeta3">
                                    <img
                                    src="./img/items/item1-3.png"
                                    alt="imagen1-3"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-2"><i>&lt;</i></a>
                                    <a className="a" href="#item-1"><i>&gt;</i></a>
                                </div>
                            </div>
                        </div>
                        <div className="contenedorpuntos" id="contenedorpuntos1">
                            <a href="#item-1">1</a>
                            <a href="#item-2">2</a>
                            <a href="#item-3">3</a>
                        </div>
                        <div className="contenedordesc" id="contenedordesc1">
                            <p>Esta es la descripcion del producto</p>
                        </div>
                    </div>
                    <div className="contenedor" id="contenedor2">
                        <div className="carrusel" id="carrusel2">
                            <div className="item" id="item-2-1">
                                <div className="tarjeta" id="tarjeta1">
                                    <img
                                    src="./img/items/item2-1.png"
                                    alt="imagen2-1"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-2-3"><i>&lt;</i></a>
                                    <a className="a" href="#item-2-2"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-2-2">
                                <div className="tarjeta" id="tarjeta2">
                                    <img
                                    src="./img/items/item2-2.png"
                                    alt="imagen2-2"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-2-1"><i>&lt;</i></a>
                                    <a className="a" href="#item-2-3"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-2-3">
                                <div className="tarjeta" id="tarjeta3">
                                    <img
                                    src="./img/items/item2-3.png"
                                    alt="imagen2-3"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-2-2"><i>&lt;</i></a>
                                    <a className="a" href="#item-2-1"><i>&gt;</i></a>
                                </div>
                            </div>
                        </div>
                        <div className="contenedorpuntos" id="contenedorpuntos2">
                            <a href="#item-2-1">1</a>
                            <a href="#item-2-2">2</a>
                            <a href="#item-2-3">3</a>
                        </div>
                        <div className="contenedordesc" id="contenedordesc2">
                            <p>Esta es la descripcion del producto 2</p>
                        </div>
                    </div>
                    <div className="contenedor" id="contenedor3">
                        <div className="carrusel" id="carrusel3">
                            <div className="item" id="item-3-1">
                                <div className="tarjeta" id="tarjeta1">
                                    <img
                                    src="./img/items/item3-1.png"
                                    alt="imagen3-1"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-3-3"><i>&lt;</i></a>
                                    <a className="a" href="#item-3-2"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-3-2">
                                <div className="tarjeta" id="tarjeta2">
                                    <img
                                    src="./img/items/item3-2.png"
                                    alt="imagen3-2"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-3-1"><i>&lt;</i></a>
                                    <a className="a" href="#item-3-3"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-3-3">
                                <div className="tarjeta" id="tarjeta3">
                                    <img
                                    src="./img/items/item3-3.png"
                                    alt="imagen3-3"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-3-2"><i>&lt;</i></a>
                                    <a className="a" href="#item-3-1"><i>&gt;</i></a>
                                </div>
                            </div>
                        </div>
                        <div className="contenedorpuntos" id="contenedorpuntos3">
                            <a href="#item-3-1">1</a>
                            <a href="#item-3-2">2</a>
                            <a href="#item-3-3">3</a>
                        </div>
                        <div className="contenedordesc" id="contenedordesc3">
                            <p>Esta es la descripcion del producto 3</p>
                        </div>
                    </div>
                    <div className="contenedor" id="contenedor4">
                        <div className="carrusel" id="carrusel4">
                            <div className="item" id="item-4-1">
                                <div className="tarjeta" id="tarjeta1">
                                    <img
                                    src="./img/items/item4-1.png"
                                    alt="imagen4-1"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-4-3"><i>&lt;</i></a>
                                    <a className="a" href="#item-4-2"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-4-2">
                                <div className="tarjeta" id="tarjeta2">
                                    <img
                                    src="./img/items/item4-2.png"
                                    alt="imagen4-2"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-4-1"><i>&lt;</i></a>
                                    <a className="a" href="#item-4-3"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-4-3">
                                <div className="tarjeta" id="tarjeta3">
                                    <img
                                    src="./img/items/item4-3.png"
                                    alt="imagen4-3"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-4-2"><i>&lt;</i></a>
                                    <a className="a" href="#item-4-1"><i>&gt;</i></a>
                                </div>
                            </div>
                        </div>
                        <div className="contenedorpuntos" id="contenedorpuntos4">
                            <a href="#item-4-1">1</a>
                            <a href="#item-4-2">2</a>
                            <a href="#item-4-3">3</a>
                        </div>
                        <div className="contenedordesc" id="contenedordesc4">
                            <p>Esta es la descripcion del producto 4</p>
                        </div>
                    </div>
                    <div className="contenedor" id="contenedor5">
                        <div className="carrusel" id="carrusel5">
                            <div className="item" id="item-5-1">
                                <div className="tarjeta" id="tarjeta1">
                                    <img
                                    src="./img/items/item5-1.png"
                                    alt="imagen5-1"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-5-3"><i>&lt;</i></a>
                                    <a className="a" href="#item-5-2"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-5-2">
                                <div className="tarjeta" id="tarjeta2">
                                    <img
                                    src="./img/items/item5-2.png"
                                    alt="imagen5-2"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-5-1"><i>&lt;</i></a>
                                    <a className="a" href="#item-5-3"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-5-3">
                                <div className="tarjeta" id="tarjeta3">
                                    <img
                                    src="./img/items/item5-3.png"
                                    alt="imagen5-3"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-5-2"><i>&lt;</i></a>
                                    <a className="a" href="#item-5-1"><i>&gt;</i></a>
                                </div>
                            </div>
                        </div>
                        <div className="contenedorpuntos" id="contenedorpuntos5">
                            <a href="#item-5-1">1</a>
                            <a href="#item-5-2">2</a>
                            <a href="#item-5-3">3</a>
                        </div>
                        <div className="contenedordesc" id="contenedordesc5">
                            <p>Esta es la descripcion del producto 5</p>
                        </div>
                    </div>
                    <div className="contenedor" id="contenedor6">
                        <div className="carrusel" id="carrusel6">
                            <div className="item" id="item-6-1">
                                <div className="tarjeta" id="tarjeta1">
                                    <img
                                    src="./img/items/item6-1.png"
                                    alt="imagen6-1"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-6-3"><i>&lt;</i></a>
                                    <a className="a" href="#item-6-2"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-6-2">
                                <div className="tarjeta" id="tarjeta2">
                                    <img
                                    src="./img/items/item6-2.png"
                                    alt="imagen6-2"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-6-1"><i>&lt;</i></a>
                                    <a className="a" href="#item-6-3"><i>&gt;</i></a>
                                </div>
                            </div>
                            <div className="item" id="item-6-3">
                                <div className="tarjeta" id="tarjeta3">
                                    <img
                                    src="./img/items/item6-3.png"
                                    alt="imagen6-3"
                                    />
                                </div>
                                <div className="flechas">
                                    <a className="a" href="#item-6-2"><i>&lt;</i></a>
                                    <a className="a" href="#item-6-1"><i>&gt;</i></a>
                                </div>
                            </div>
                        </div>
                        <div className="contenedorpuntos" id="contenedorpuntos6">
                            <a href="#item-6-1">1</a>
                            <a href="#item-6-2">2</a>
                            <a href="#item-6-3">3</a>
                        </div>
                        <div className="contenedordesc" id="contenedordesc6">
                            <p>Esta es la descripcion del producto 6</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Productos;