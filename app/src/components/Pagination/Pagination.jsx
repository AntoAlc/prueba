import React, { useState } from 'react';
import "./Pagination.css";

const Pagination = (props) => {

    const [slice, setSlice] = useState(true);
    const pageNumbers = [];
    const previous = props.currentPage - 1;
    const next = props.currentPage + 1;

    //Calculate de amount of pages based on the amount of cards to render
    for (let i = 1; i < Math.ceil(props.totalCards / props.cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleSlice = (toggle) => {
        setSlice(toggle);
    }

    return (
        <nav className="pagination-nav">
            <ul className="pagination-list">
                {props.currentPage !== 1 &&
                    (<li key="previous0" className="pagination-li prev-next">
                        <a className="pagination-a prev-next" onClick={() => props.handlePage(previous)} href="#">Anterior</a>
                    </li>)}
                {(pageNumbers.length > 10 && slice) ? (
                    <>
                        {pageNumbers.slice(0, 9).map(number => (
                            number !== props.currentPage ?
                                <li key={number} className="pagination-li">
                                    <a className="pagination-a prev-next" onClick={() => props.handlePage(number)} href="#">{number}</a>
                                </li>
                                :
                                <li key={number} className="pagination-li">
                                    <a className="pagination-a-active" onClick={() => props.handlePage(number)} href="#">{number}</a>
                                </li>
                        ))}
                        <li key="plus0" className="pagination-li">
                            <a className="pagination-a-active" onClick={() => handleSlice(!slice)} href="#">+</a>
                        </li>
                    </>)
                    :
                    <>
                        {pageNumbers.map(number => (
                            number !== props.currentPage ?
                                <li key={number} className="pagination-li">
                                    <a className="pagination-a prev-next" onClick={() => props.handlePage(number)} href="#">{number}</a>
                                </li>
                                :
                                <li key={number} className="pagination-li">
                                    <a className="pagination-a-active" onClick={() => props.handlePage(number)} href="#">{number}</a>
                                </li>
                        ))}
                    </>
                }
                {pageNumbers.length > 1 && pageNumbers.length !== props.currentPage && (
                    <li key="next0" className="pagination-li prev-next">
                        <a className="pagination-a prev-next" onClick={() => props.handlePage(next)} href="#">Siguiente</a>
                    </li>)
                }
            </ul>
        </nav >
    )
}

export default Pagination;