import React, { useState } from "react";
import "./contacto.css";

const API_URL = "http://127.0.0.1:3001"

const Contacto = () => {
    
    const [userInfo, setUserInfo] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        personas: "",
        email: "",
        mensaje: ""
    });

    const sendForm = async (event) => {
        event.preventDefault();

        console.log('formulario:', userInfo);
    
        let response = await fetch(`${API_URL}/formulario/enviar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                /// aca poner variables de estado
            })
        });

        let data = await response.json();

        console.log(data);

        if (data.confirmacion) {
            alert('Tu mail fue enviado correctamente.');
        } else
            alert('Error');
    } 


    return (
        <>
            <div>
                <div className="borderform">
                    <form className="contact" action="/enviar" method="post">
                        <h2> Formulario de Contacto </h2>
                        <div className="contactregister">
                            <input type="text" placeholder="Nombre" htmlFor="nombre" className="typetext" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, nombre: e.target.value })}/>
                        </div>

                        <div className="contactregister">
                            <input type="text" placeholder="Apellido" htmlFor="apellido" className="typetext" value={userInfo.apellido} onChange={(e) => setUserInfo({ ...userInfo, apellido: e.target.value })}/>
                        </div>

                        <div className="contactregister">
                            <input type="tel" placeholder="Telefono" className="typetext" value={userInfo.telefono} onChange={(e) => setUserInfo({ ...userInfo, telefono: e.target.value })}/></div>
                        <div className="contactregister">
                            <input type="number" min="1" max="8" placeholder="Personas" step="1"className="typetext" value={userInfo.personas} onChange={(e) => setUserInfo({ ...userInfo, personas: e.target.value })}/>
                            <div className="contactregister">
                                <input type="email" placeholder="Email" htmlFor="email" className="typetext" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}/>
                            </div>

                            <div className="contactregister">
                                <textarea type="text" placeholder="Comentario" size="small" htmlFor="mensaje" className="typetext" value={userInfo.mensaje} onChange={(e) => setUserInfo({ ...userInfo, mensaje: e.target.value })}>
                                </textarea>
                            </div>
                            <label htmlFor="Cabañas"> Tipo de cabaña</label>
                            <select className="tipocab">
                                <option value="cab2"> Cabaña1</option>
                                <option value="cab2"> Cabaña2</option>
                                <option value="cab3"> Cabaña3</option>
                            </select>
                        </div>
                        <div className="enviar">
                            <input type="submit" onClick={sendForm} value="Enviar"/>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contacto;