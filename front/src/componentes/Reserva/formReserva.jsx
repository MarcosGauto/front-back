import ReservaHome from "./Reserva";
import { useState } from "react";
import "./formReserva.css"

const API_URL = "http://127.0.0.1:3001"
const FormReserva = ({ cabañasDisponibles,}) =>{  //no asigna nombre a la funcion porque el return va el reswltardo en formReserva // 
    
    const [cabañaSeleccionada, setCabañaSeleccionada] = useState(0);
    const [cantidadMaxima, setCantidadMaxima] = useState(4) //cantidad maxima de personas de la cabaña seleccionada
    const [cantidadDePersonas, setCantidadDePersonas] = useState(1);
    // estado de las fechas
    const [date, setDate] = useState([])

    const getNombres = () => {
        let nombres = []; // array que se autocompleta con los nombres
        for (let i = 0; i < cabañasDisponibles.length; i++) {  //foreach por cada cabaña dentro de cabañas disponible
            nombres.push(<option key={i} value={i}>{cabañasDisponibles[i].nombre}</option>) // pusheando el nombre de la cabaña
        };
        return nombres // returnormos nombres-
    }

     // E: evento; target: elemento que dispara el evento; value: valor del elemento que dispara el evento
    const setCantidad = (e) => {
        const indice = e.target.value; 
        setCabañaSeleccionada(cabañasDisponibles[indice]);
        setCantidadMaxima(cabañasDisponibles[indice].cantidadPersonas);
    };

    const datesave = async () => {
    
        console.log('Fecha:', date);

        let response = await fetch(`${API_URL}/reservas/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inicio: date[0],
                final: date[1],
                cantidad: cantidadDePersonas,
                cabaña: cabañaSeleccionada.nombre
            })
        });
        
        let data = await response.json();

        if (!data.message) {
            // Mostrar un alert
            alert('Reserva guardada')
        } else {
            // Mostrar un alert(data.message)
            alert(data.message);
        }
            

    }

    return(
        <div className="reservaFecha">
            <form action="#" target="" method="get" name="formDatosPersonales" className="formNav">
                <label htmlFor="Cabañas" method="get"> Tipo de cabaña </label>
                <select method="get" className="opcionCab" onChange={setCantidad}> 
                    {getNombres()}
                </select>
                <label htmlFor="checkout">check in / check out</label>
                <ReservaHome setDate={setDate} />
                <label htmlFor="quantity" id="cantidadPersonas">Cantidad de personas  </label>
                <input type="number" id="quantity" name="quantity" className="cantidad" min="1" max={cantidadMaxima} value={cantidadDePersonas} onChange={(e) => setCantidadDePersonas(e.target.value)}/>
                <button className="button-30" role="button" onClick={datesave}>Reservar</button>
            </form>

        </div>
    )
}

export default FormReserva;