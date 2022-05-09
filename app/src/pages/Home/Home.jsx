import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "../../components/Category/Category"
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import "./Home.css";
import { useHistory } from "react-router-dom";

function Home() {

    const [categories, setCategories] = useState([]);
    const [accommodations, setAccommodations] = useState([]);
    const [loading, setLoading] = useState(false)
    const [cardsPerPage, setCardsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(false);
    const [sectionTitle, setSectionTitle] = useState("Recomendaciones");
    const [reset, setReset] = useState(false);

    //PAGINATION
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = accommodations.slice(indexOfFirstCard, indexOfLastCard);

    const url = "http://100.25.92.28:8080"

    const history = useHistory();

    //Fetching data from the db
    async function fetchData() {
        try {
            const res = await axios.get(`${url}/categorias/todos`)
            setCategories(res.data)
            const res2 = await axios.get(`${url}/alojamientos/todos`)
            const shuffled = res2.data.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
            setAccommodations(shuffled);
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [reset]);

    const handleResetCards = () => {
        setSectionTitle("Recomendaciones");
        setReset(true);
    }

    const handleVerFavoritos = async (e) => {
        e.preventDefault();
        setSectionTitle("Favoritos")
        setReset(false);
        try {
            console.log("Intentando hacer la petición")
            const res = await axios.get(`${url}/favoritos/usuarios/` + JSON.parse(localStorage.getItem('usuario')).id)
            setAccommodations(res.data);
            setSectionTitle("Favoritos");
        } catch (err) {
            console.log(err);
            setError(true);
        } finally {
            setLoading(false);
        }

    }

    const handleCategory = async (id) => {
        setError(false);
        setLoading(true);
        setSectionTitle("Recomendaciones");
        setReset(false);
        try {
            const res = await axios.get(`${url}/alojamientos/categorias/` + id)
            setAccommodations(res.data);
        } catch (err) {
            console.log(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    const handleCity = async (id) => {
        setError(false);
        setLoading(true);
        setSectionTitle("Recomendaciones");
        setReset(false);

        if (id !== null) {
            try {
                const res = await axios.get(`${url}/alojamientos/ciudades/` + id)
                setAccommodations(res.data);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false)
            }
        } else {
            setError(false);
            setLoading(false);
        }
    }

    const handleDateSelection = async (start, end) => {
        setError(false);
        setLoading(true);
        setSectionTitle("Recomendaciones");
        setReset(false);

        const queryParams = {
            params: {
                "fromDate": start,
                "toDate": end,
            }
        }

        if (start !== null && end !== null) {
            try {
                const res = await axios.get(`${url}/alojamientos/disponibles`, queryParams)
                setAccommodations(res.data);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false)
            }
        } else {
            setError(false);
            setLoading(false);
        }
    }

    const handleCityAndDates = async (start, end, id) => {
        setError(false);
        setLoading(true);
        setSectionTitle("Recomendaciones");
        setReset(false);

        const queryParams = {
            params: {
                "fromDate": start,
                "toDate": end,
            }
        }

        if (id !== null && start !== null && end !== null) {
            try {
                const res = await axios.get(`${url}/alojamientos/ciudades/${id}/disponibles`, queryParams)
                setAccommodations(res.data);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false)
            }
        } else {
            setError(false);
            setLoading(false);
        }
    }

    const handlePage = (pageNumber) => setCurrentPage(pageNumber);

    return (
        < >
            {
                loading ?
                    <>
                        <SearchBlock loading={loading} disabled />
                        <p className="loading">Cargando la información ...</p>
                    </>
                    :
                    < >
                        <SearchBlock handleCity={handleCity} handleDateSelection={handleDateSelection} handleCityAndDates={handleCityAndDates} handleResetCards={handleResetCards} loading={loading} />
                        <section className="buscarPorTipoAlojamiento">
                            <h2>Buscar por tipo de alojamiento</h2>
                            <div className="containerBuscarPorTipo">
                                {
                                    categories.map(category => <Category key={category.id} data={category} handleCategory={handleCategory} />)
                                }
                            </div>
                        </section>
                        <section className="recomendaciones">
                            <div className="h2RecomendacionesYBorrarFiltros">
                                <h2>{sectionTitle}</h2>
                                {
                                    !(localStorage.getItem('usuario') === null) && (
                                        < div className="btns-filtrosYfavoritos">
                                            <button onClick={handleVerFavoritos} className="btn-verFavoritos">Ver favoritos</button>
                                        </div>)
                                }
                            </div>
                            <div className="containerRecomendaciones">
                                {error ?
                                    <p>Por el momento, no encontramos alojamientos para su búsqueda.</p>
                                    :
                                    currentCards.length > 0 ?
                                        (<>
                                            {currentCards.map(currentAccommodation => <Card data={currentAccommodation} />)}
                                            <Pagination cardsPerPage={cardsPerPage} totalCards={accommodations.length} handlePage={handlePage} currentPage={currentPage} />
                                        </>)
                                        :
                                        <p>Por el momento, no encontramos alojamientos para su búsqueda.</p>
                                }
                            </div>
                        </section>
                    </>
            }
        </>
    );
}

export default Home;