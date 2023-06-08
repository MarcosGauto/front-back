import React, { useState, useEffect } from "react";
import "./Home.css";
import FormReserva from "../Reserva/formReserva";

const API_URL = "http://127.0.0.1:3001"

const Home = () => {
    const [listaDeCabañas, setListaDeCabañas] = useState([]);

    useEffect(() => { 
        getCabañas();
    }, []);

    function getCabañas() {
        try{
            fetch(`${API_URL}/alojamientos/`)
            .then(response => { // el .then espera la respuesta del fetch
                return response.json(); // la respuesta es json
            })
            .then((json) => {
                console.log(json);
                setListaDeCabañas (json.alojamientos); //devuelve el json
            })
        }catch(error){
            console.error(error.message);
        }
    }

    return (

        <section className="sectionintro">
            <FormReserva cabañasDisponibles={listaDeCabañas}/>
            <div className="imgdiv">
                <img className="imgcss" alt="imgintro" />
            </div>
            <div className="divtext">
                <h2 className="textIntro">
                    <p>Un entorno de ensueño con la naturaleza en todo su esplendor </p>
                </h2>

            </div>

        </section>

    );

    

}

export default Home;