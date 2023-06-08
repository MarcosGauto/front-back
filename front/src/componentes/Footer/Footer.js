import React from "react";
import face from "./Redes/facebook.svg"
import goo from "./Redes/google.svg"
import insta from "./Redes/instagram.svg"
import linke from "./Redes/linkedin.svg"
import twitt from "./Redes/twitter.svg"
import whatsapp from "./Redes/icons8-whatsapp.svg"

import "./Footer.css";

const Footer = () => {
    return (
        <div className="contenedorFooter">

            <section className="sectionFooter">
                <a className="" href="" role="button">
                    <i className="btn btn-outline-light btn-floating m-1" href="!" role="button" >
                        <img src={face} alt="" /></i>
                </a>


                <a className="btn btn-outline-light btn-floating m-1" href="!" role="button">
                    <i className="fab fa-twitter">
                        <img src={twitt} alt="" /></i>
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-google"></i>
                    <img src={goo} alt="" />
                </a>


                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-instagram">
                    </i>
                    <img src={insta} alt="" />
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fab fa-linkedin-in"><img src={linke} alt="" /></i>
                </a>
            </section>
            <div className="reserva">
                <p>De los pinos 1111 (CP.7609) Mar de Cobo. Bs AS. Argentina.  //  RESERVAS TELEFÓNICAS: 0223-411-1111</p>
            </div>
            <div>
                <div className="whatsapp">
                    <a className="btn-wsp" href="https://api.whatsapp.com/send?phone=11111111" role="button"><i
                        className="whatsapp"><img src={whatsapp} alt="" /></i>
                    </a>
                </div>
            </div>


        </div>

    );
}

export default Footer;

