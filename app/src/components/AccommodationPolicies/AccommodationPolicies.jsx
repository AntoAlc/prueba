import React from 'react';
import './AccommodationPolicies.css'

const AccommodationPolicies = (props) => {
    return (
        <section className="sectionNormas">
            <h2>Qué tienes que saber</h2>
            <hr />
            <div className="contenedorNormas">
                <div className="contenendorNormasCasa">
                    <h3>Normas de la casa</h3>
                    <p>
                        {props.normasDeLaCasa}
                    </p>
                </div>
                <div className="contenedorSaludSeguridad">
                    <h3>Salud y seguridad</h3>
                    <p>{props.saludYseguridad}</p>
                </div>
                <div className="contenedorPoliticasCancelacion">
                    <h3>Política de cancelación</h3>
                    <p>{props.politicasDeCancelacion}</p>
                </div>
            </div>
        </section>
    )
}

export default AccommodationPolicies;