import React from "react";

const ProductoItem = (props) => {
    const {codigo, descripcion, cantidad, precio, imagen} = props;
    return (
                    <div style={{marginTop:"150px"}}>
                        <img src={imagen} alt="imagen no disponible" style={{display:"flex",margin:"100px", marginBottom:"-90px", justifyContent:"center", maxWidth:"200px", alignItems:"center", height:"200px", objectFit:"fill", borderRadius:"20%"}}></img>
                        <div style={{backgroundSize:"cover", height: "200px", width: "200px", margin:"100px", marginBottom:"-180px"}} >
                            <h3 style={{color: "white"}}>{descripcion}</h3>
                            <h4 style={{color: "white"}}>Stock: {cantidad}</h4>
                            <h4 style={{color: "white"}}>Precio: ${precio}</h4>
                        </div>
                    </div>
    );
}

export default ProductoItem;