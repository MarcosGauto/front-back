import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./contacto.css";

const API_URL = "http://127.0.0.1:3001"



const Contacto = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({});
    const onSubmit = (data) => {
        console.log(data);

}


    return (
        <>
            <div>
                <div className="borderform">
                    <form onSubmit={handleSubmit(onSubmit)} className="contact" action="/enviar" method="post">
                        <h2> Formulario de Contacto </h2>
                        <div className="contactregister">
                            <input type="text" placeholder="Nombre" for="nombre" {...register('nombre', { require: true, maslength: 10 })} className="typetext" />
                            {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>}
                            {errors.nombre?.type === 'maxlength' && <p> El campo debe contener mas 10 caracteres </p>}
                        </div>

                        <div className="contactregister">
                            <input type="text" placeholder="Apellido"{...register('apellido', { require: true})} className="typetext" />
                        </div>

                        <div className="contactregister">
                            <input type="tel" placeholder="Telefono"{...register('number', { require: true})} className="typetext" /></div>
                        <div className="contactregister">
                            <input type="number" min="1" max="8" placeholder="Personas" step="1"{...register('tel', { require: true })} className="typetext" />
                            <div className="contactregister">
                                <input type="email" placeholder="Email" for="email" {...register('email', { pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })} className="typetext" />
                                {errors.email?.type === 'pattern' && <p> El formato es incorrecto </p>}
                            </div>

                            <div className="contactregister">
                                <textarea type="text" placeholder="Comentario" size="small" for="mensaje" {...register("text", { require: true, minlength: 10 })} className="typetext">
                                </textarea>
                            </div>
                            <label for="Cabañas"> Tipo de cabaña</label>
                            <select className="tipocab">
                                <option value="cab2"> Cabaña1</option>
                                <option value="cab2"> Cabaña2</option>
                                <option value="cab3"> Cabaña3</option>
                            </select>
                        </div>
                        <div className="enviar">
                            <input type="submit" value="Enviar"/>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contacto;