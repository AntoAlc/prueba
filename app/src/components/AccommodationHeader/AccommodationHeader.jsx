import React from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './AccommodationHeader.css'

const AccommodationHeader = (props) => {

    const history = useHistory();
    const location = useLocation();

    const handleGoBack = () => {
        if (location.state?.from && location.state?.from !== location.pathname) {
            history.push({ pathname: location.state.from?.pathname, state: { from: location, redirectLogin: false }})
        } else {
            history.goBack();
        }
    }

    return (
        <>
            <div className="headerPage">
                <Link to="" onClick={() => handleGoBack()}><FontAwesomeIcon className="icon flecha-close" icon={faChevronLeft} /></Link>
                <div className="left">
                    <h3>{props.accommodation.category.category.toUpperCase()}</h3>
                    <h2>{props.accommodation.name}</h2>
                </div>
            </div>
        </>
    )
};


export default AccommodationHeader;