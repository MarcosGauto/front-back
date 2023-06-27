import React, { useState } from "react";
import Imagen from "./Imagen";
import"./Galeria.css"

const Galeria =() => {
    //cantidadDeimagenes define las imagenes a mostrar
    let cantidadDeImagenes = 9;
    //inicaLista es una funcion flecha con un parametro cantidad. 
    const iniciaLista = (cantidad) =>{
        //lista el array vacio que se va llenando y muestra las imagenes.
        let lista =[]
        //recorre el array y lo pushea.
        for(let i = 0; i < cantidad; i++){
            lista.push(<Imagen key={i} id={i} />)
        }
        return lista;
    }

//  listaImagenes es una lista global, se utliza el set para cambiar el estado de esa lista ( cambiar o agregar imagenes)
//useState para definirlo como estado de React ( nada mas). Y se le pasa la funcion junto con la cantidad de imagenes.

    const [listaImagenes, setListaImagenes] = useState(iniciaLista(cantidadDeImagenes));


    return(
        <div className="galeria">
        {/* Se llama a la lista */}
            {listaImagenes}

        </div>
    )
}

export default Galeria;