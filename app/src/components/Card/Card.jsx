import React, { Fragment } from "react";
import { Router, Link } from "react-router-dom";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from '../Rating/Rating'
import "./Card.css";
//rate documentation: https://openbase.com/js/rc-rate

function Card(props) {
    const data = { ...props.data };
    const accommodationId = props.data.id;
    //const url = "/alojamientos/" + data.id
    const testId = "card-" + data.id;

    const generarPuntuacion = () => {
        const scores = data.scores
        let scoresSum = 0
        scores.map(score => scoresSum += score.score)

        if (scores.length > 0) {
            return Math.round((scoresSum / scores.length) * 2);
        } else {
            return null
        }

    }

    const convertirARanking = () => {
        const puntuacion = generarPuntuacion();
        if (puntuacion === null) {
            return ""
        }

        if (puntuacion <= 3) {
            return "MALO"
        }
        else if (puntuacion <= 5) {
            return "BUENO"
        }
        else if (puntuacion <= 8) {
            return "MUY BUENO"
        }
        else if (puntuacion <= 10) {
            return "EXCELENTE"
        }

    }

    return (
        <Fragment>
            <Link to={`/alojamientos/${accommodationId}`} className="etiqueta-container" data-testid={testId}>
                <div className="card-container-recomendaciones">
                    {
                        data.name.length < 35 ?
                            <div className="card-img">
                                <img src={data.images[0].urlImage} alt={data.category.category}></img>
                            </div>
                            :
                            <div className="card-img tresRenglones">
                                <img src={data.images[0].urlImage} alt={data.category.category}></img>
                            </div>
                    }
                    <div className="card-text-recomendaciones">
                        {
                            data.scores.length > 0 ?
                                <div className="nombre-puntuacion">
                                    <div className="nombre-alojamiento">
                                        <div className="categoria-estrellas">
                                            <p>{data.category.category}</p>
                                            <Rating scores={data.scores} />
                                        </div>
                                        <h5>{data.name}</h5>
                                    </div>
                                    <div className="puntuacion">
                                        <div className="ocho-container">
                                            <p className="ocho">{generarPuntuacion()}</p>
                                        </div>
                                        <p>{convertirARanking()}</p>
                                    </div>
                                </div>
                                :
                                <div className="nombre-puntuacion">
                                    <div className="nombre-alojamiento sinPuntuacion">
                                        <h5>{data.name}</h5>
                                    </div>

                                </div>
                        }

                        <div className="ubicacion">
                            <div>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <p>A 940m del centro</p>
                                <Link href="">MOSTRAR EN EL MAPA</Link>
                            </div>
                            <div className="iconos-wifi-swimming">
                                {
                                    data.characteristics.map(characteristic =>
                                        <FontAwesomeIcon icon={characteristic.icon} />
                                    )
                                }
                            </div>
                        </div>
                        <div className="descripcion">
                            {
                                data.description.length > 45 ?
                                    <p>{data.description.slice(0, 45) + "..."}<Link className="enlace-mas" href=""> más...</Link> </p>
                                    :
                                    <p>{data.description}<Link className="enlace-mas" href=""> más...</Link> </p>
                            }
                        </div>
                        <div className="ver-mas">
                            <Link href="" >
                                ver más
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment >
    )
}
export default Card;
