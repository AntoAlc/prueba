import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import './SuccessfulAddAccomodation.css'

const SuccessfulAccomodation = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/administracion");
    }

    return (
        <div className="successful-message-container">
            <FontAwesomeIcon className="successful-icon" icon={faCheckCircle} />
            <p className="highlighted-text">¡Muchas gracias!</p>
            <p className="normal-text">Su alojamiento se ha cargado con éxito</p>
            <button type="button" className="ok-button" onClick={handleClick}>ok</button>
        </div>
    )
}

export default SuccessfulAccomodation;