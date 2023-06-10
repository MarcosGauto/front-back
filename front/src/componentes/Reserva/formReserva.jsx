import ReservaHome from "./Reserva";
import { useState } from "react";

const FormReserva = ({ cabañasDisponibles }) =>{  //no asigna nombre a la funcion porque el return va el reswltardo en formReserva // 
    
    const [cantidadMaxima, setCantidadMaxima] = useState(cabañasDisponibles[0].cantidad_de_personas) //cantidad maxima de personas de la cabaña seleccionada

    const getNombres = () => {
        let nombres = []; // array que se autocompleta con los nombres
        for (let i = 0; i < cabañasDisponibles.length; i++) {  //foreach por cada cabaña dentro de cabañas disponible
            nombres.push(<option value={cabañasDisponibles[i].nombre}>{cabañasDisponibles[i].nombre}</option>) // pusheando el nombre de la cabaña
        }
        return nombres // returnormos nombres-
    }

     // E: evento; target: elemento que dispara el evento; value: valor del elemento que dispara el evento
    const setCantidad = (e) => {
    const indice = e.target.value; 
    setCantidadMaxima(cabañasDisponibles[indice].cantidad_de_personas);
    }



    return(
        <div className="reservaFecha">
            <form action="#" target="" method="get" name="formDatosPersonales">
                <label htmlFor="Cabañas" method="get"> Tipo de cabaña </label>
                <select method="get" className="opcionCab" onChange={ () => {setCantidad()}}> 
                    {getNombres()}
                </select>
                <label htmlFor="checkout">check in / check out</label>
                <ReservaHome />
                <label for="quantity">Cantidad de personas (Máximo: {{cantidadMaxima}}) </label>
                <input type="number" id="quantity" name="quantity" min="1" max={cantidadMaxima} />
            </form>

        </div>
    )
}

export default FormReserva;