import React, { useEffect, useState } from "react";
import CitiesSearchBar from "../CitiesSearchBar/CitiesSearchBar";
import DateSearchBar from "../DateSearchBar/DateSearchBar";
import { SBButton, SBContainer, SBDiv, SBDiv2, SBForm, SBH1 } from "./SearchBlockElement";
import useAuth from "../../auth/useAuth";

const SearchBlock = (props) => {

    const [cityId, setCityId] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [searchByCity, setSearchByCity] = useState(false);
    const [reset, setReset] = useState(false);
    const { handleSelectedDates } = useAuth();

    function getParsedDate(rawDate) {
        const dateToFormat = new Date(rawDate)
        let dd = dateToFormat.getDate();
        let mm = dateToFormat.getMonth() + 1; //January is 0!
        let yyyy = dateToFormat.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        const dateString = yyyy + "-" + mm + "-" + dd;

        return dateString.toString();
    }

    const handleId = (id) => {
        setReset(false);
        setSearchByCity(true);

        if (id !== null) {
            setCityId(id);
        }
    }

    const handleDates = (dates) => {
        if (dates !== null) {
            setReset(false);
            setStartDate(dates[0]);
            setEndDate(dates[1]);
        }
    }

    const resetFilters = () => {
        handleSelectedDates([null, null]);
        setReset(true);
        setCityId();
        setStartDate();
        setEndDate();
        setSearchByCity(false);
        props.handleResetCards();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (endDate == null) {
            /*busqueda por ciudad"*/
            props.handleCity(cityId);
            handleSelectedDates([null, null]);
        } else if (!searchByCity && endDate != null) {
            /* busqueda por fechas */
            props.handleDateSelection(getParsedDate(startDate), getParsedDate(endDate));
            handleSelectedDates([startDate, endDate]);
        } else {
            /* busqueda compuesta */
            props.handleCityAndDates(getParsedDate(startDate), getParsedDate(endDate), cityId);
            handleSelectedDates([startDate, endDate]);
        }

    }


    return (
        <SBForm id="searchBar" onSubmit={(e) => handleSubmit(e)} action="/" method="GET">
            <SBH1>Buscá tu hogar en tu próximo destino</SBH1>
            <SBContainer>
                <SBDiv>
                    <CitiesSearchBar handleId={handleId} reset={reset} />
                    <DateSearchBar handleDates={handleDates} reset={reset} />
                </SBDiv>
                <SBDiv2>
                    <SBButton type="submit">Buscar</SBButton>
                    <SBButton type="reset" onClick={() => resetFilters()}>Borrar Filtros</SBButton>
                </SBDiv2>
            </SBContainer>
        </SBForm>
    )
}

export default SearchBlock;
