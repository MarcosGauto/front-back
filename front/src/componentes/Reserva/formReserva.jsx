import ReservaHome from "./Reserva";

const FormReserva = ({ cabañasDisponibles }) =>{  //no asigna nombre a la funcion porque el return va el reswltardo en formReserva // 
    
    const getNombres = () => {
        let nombres = []; // array que se autocompleta con los nombres
        for (let i = 0; i < cabañasDisponibles.length; i++) {  //foreach por cada cabaña dentro de cabañas disponible
            nombres.push(<option value={cabañasDisponibles[i].nombre}>{cabañasDisponibles[i].nombre}</option>) // pusheando el nombre de la cabaña
        }
        return nombres // returnormos nombres-
    }


    return(
        <div className="reservaFecha">
            <form action="#" target="" method="get" name="formDatosPersonales">
                <label htmlFor="Cabañas" method="get"> Tipo de cabaña </label>
                <select method="get" className="opcionCab">
                    {getNombres()}
                </select>
                <label htmlFor="checkout">check in / check out</label>
                <ReservaHome />
                <label for="quantity">Cantidad de personas</label>
                <input type="number" id="quantity" name="quantity" min="1" max="5"/>
            </form>

        </div>
    )
}

export default FormReserva;