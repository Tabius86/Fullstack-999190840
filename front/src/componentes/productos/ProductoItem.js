import React from "react";

const ProductoItem = (props) => {
    const {codigo, descripcion, cantidad, precio, imagen} = props;
    return (
                    <div style={{height: "200px", width: "300px",marginTop: "150px"}}>
                        <img src={imagen} style={{color: "white", width: "200px", height: "200px", borderRadius: "20%"}} alt="imagen no disponible"></img>
                        <h3 style={{color: "white"}}>{descripcion}</h3>
                        <h4 style={{color: "white"}}>Stock: {cantidad}</h4>
                        <h4 style={{color: "white"}}>Precio: ${precio}</h4>
                    </div>
    );
}

export default ProductoItem;