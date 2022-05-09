import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './AdministrationHeader.css'

const AdministrationHeader = () => {

    const history = useHistory();    
    const location = useLocation();

    return (
        <>
            <div className="headerPage-admin">
                <Link to={{ pathname: location.state.from.pathname, state: { from: location, redirectLogin: false }}}><FontAwesomeIcon className="icon flecha-close" icon={faChevronLeft} /></Link>
                <div className="left">
                    <h2>Administración</h2>
                </div>
            </div>
        </>
    )
};


export default AdministrationHeader;
