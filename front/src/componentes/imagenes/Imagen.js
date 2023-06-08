import React from "react";
import "./Imagen.css";

const Imagen = ({ id }) => {
    return (
        <>
            <div className="imagenes">
                <img src={require(`./img/${id}.jpg`)} />
            </div>
        </>
    )
}

export default Imagen;