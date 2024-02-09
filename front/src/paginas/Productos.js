import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ProductoItem from '../componentes/productos/ProductoItem';

const Productos = (props) => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/Productos');
            setProductos(response.data);
            setLoading(false);
        };
        cargarProductos();
    }, []);
    return (
        <main>
            <div>
                <h1 style={{color: "white", marginTop: "130px", marginBottom: "-100px"}}>Hacenos tu pedido al whatsapp: 15-XXXX-XXXX</h1>
                <section style={{display:"flex", flexWrap:"wrap"}}>
                    {loading ? (
                            <p>Cargando ...</p>
                        ) : (
                            productos.map(item => <ProductoItem key={item.codigo}
                                descripcion = {item.descripcion} cantidad={item.cantidad} 
                                precio={item.precio} imagen={item.imagen}/>)
                        )}
                </section>
            </div>
        </main>
    );
}

export default Productos;