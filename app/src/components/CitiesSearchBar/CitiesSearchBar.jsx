import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import "./CitiesSearchBar.css"

const CitiesSearchBar = (props) => {

    const [value, setValue] = useState("");
    const [cities, setCities] = useState([]);
    const [matches, setMatches] = useState([]);
    const [cityId, setCityId] = useState(null);
    const [displayMatches, setDisplayMatches] = useState(false);


    useEffect(() => {
        if (props.reset) {
            setValue("")
            setCityId(null)
        }
        async function getCities() {
            try {
                const res = await axios.get("http://100.25.92.28:8080/ciudades/todos");
                setCities(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getCities();
    }, [props.reset]);

    //function based on regex to find matches while the user inputs text. 
    const findMatches = (wordToMatch) => {
        return cities.filter(
            city => {
                const regex = new RegExp(wordToMatch, 'gi');
                return city.name.match(regex) || city.country.match(regex);
            });
    }

    //function to display the matches found with findMatches().
    const handleDisplayMatches = (e) => {
        setValue(e.target.value);
        setMatches([]);

        if (e.target.value.length) {
            setDisplayMatches(true);
        } else {
            setDisplayMatches(false);
        }

        const matchingCities = findMatches(e.target.value);
        setMatches(matchingCities);

        if (matchingCities.length > 0) {
            setCityId(matchingCities[0].id);
        }

        console.log(displayMatches)
    }

    const handleSelect = (e, id) => {
        e.preventDefault();
        setDisplayMatches(false);
        setMatches([]);
        setValue(e.target.innerText);
        props.handleId(id);
    }

    const handleCitySelection = (e, id) => {
        handleSelect(e, id);
        handleDisplayMatches(e);
    }

    return (
        <>
            <div className="cities-searchbar-container">
                <div className="container-cities" data-testid="citySB-001">
                    <input className="busqueda-formulario" type="text" id="search-city" onChange={(e) => handleCitySelection(e, cityId)} placeholder="¿A dónde vamos?" value={value} data-testid="citySB-002" />
                    <FontAwesomeIcon className="icon-ubication" icon={faMapMarkerAlt} />
                </div>
                <ul id="city-suggestions" data-testid="citySB-003">
                    {displayMatches && (
                        matches.map((place) => (
                            <li className="places-search-bar" key={place.id} value={place.name + place.country} onClick={(e) => { handleSelect(e, place.id) }} data-testid={"citySB-005"}>
                                <span className="place">{place.name}, {place.country}</span>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>

    )
}

export default CitiesSearchBar;
