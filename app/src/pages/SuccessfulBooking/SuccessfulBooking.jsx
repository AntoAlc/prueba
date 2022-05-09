import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import './SuccessfulBooking.css'

const SuccessfulBooking = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <div className="successful-message-container">
            <FontAwesomeIcon className="successful-icon" icon={faCalendarCheck} />
            <p className="highlighted-text">¡Muchas gracias!</p>
            <p className="normal-text">Su reserva se ha realizado con éxito</p>
            <button type="button" className="ok-button" onClick={handleClick}>ok</button>
        </div>
    )
}

export default SuccessfulBooking;