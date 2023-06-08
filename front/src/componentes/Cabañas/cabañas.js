import React from "react";
import img1 from "../../imagen/cabañas/cab1.jpg";
import "./cabañas.css"
import img2 from "../../imagen/cabañas/cab2.jpg";
import img3 from "../../imagen/cabañas/cab6.jpg";


function Cabaña() {
    return (
        <div>
            <div className="cabañas">
                <div className="textcabaña1">
                    <p>Cabaña 1</p>
                </div>
                <div className="caba1">
                    <img src={img1} alt="Cabaña1" width="400px" height="200px" className="imgcab" />
                    <p>Ideal para 2 a 4 personas, se puede disponer de una habitación matrimonial ó también triple individual. Cálido revestimiento en madera y piedra, calefacción central independiente, radiadores en todos los ambientes incluso en el baño. Construcción sólida con diseño de montaña, desarrollada en dos plantas.</p>
                </div>
                <div className="textcabaña1">
                    <p>Cabaña 2</p>
                </div>
                <div className="caba2">
                    <p>Ideal para 2 a 4 personas, se puede disponer de una habitación matrimonial ó también triple individual . Cálido revestimiento en madera y piedra, calefacción central independiente, radiadores en todos los ambientes incluso en el baño. Construcción sólida con diseño de montaña, desarrollada en dos plantas.</p>
                    <img src={img2} alt="Cabaña2" width="400px" height="200px" className="imgcab" />
                </div>
                <div className="textcabaña1">
                    <p>Cabaña 3</p>
                </div>
                <div className="caba1">
                    <img src={img3} alt="Cabaña1" width="400px" height="200px" className="imgcab" />
                    <p>Ideal para 2 a 4 personas, se puede disponer de una habitación matrimonial ó también triple individual. Cálido revestimiento en madera y piedra, calefacción central independiente, radiadores en todos los ambientes incluso en el baño. Construcción sólida con diseño de montaña, desarrollada en dos plantas.</p>
                </div>
            </div>
            <div>
                <p>

                </p>
            </div>
        </div>
    );
}

export default Cabaña;