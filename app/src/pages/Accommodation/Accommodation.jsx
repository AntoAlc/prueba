import { React } from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker, { CalendarContainer } from "react-datepicker";
import Swal from "sweetalert2";
import { Modal } from "react-responsive-modal";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faFacebookMessenger,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faCarAlt } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import cocina from "../../assets/img/cocina.svg";
import Gallery from "../../components/Gallery/Gallery";
import AccommodationHeader from "../../components/AccommodationHeader/AccommodationHeader";
import Rating from "../../components/Rating/Rating";
import AccommodationPolicies from "../../components/AccommodationPolicies/AccommodationPolicies";
import Map from "../../components/Map/MapBar";
import useAuth from "../../auth/useAuth";

import "react-responsive-modal/styles.css";
import "./Accommodation.css";
library.add(fab, faSwimmer, faWifi, faCarAlt, faSnowflake, faTv, faPaw);


function Accommodation() {
  const [accommodation, setAccommodation] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [calendarStart, setCalendarStart] = useState(startDate);
  const [calendarEnd, setCalendarEnd] = useState(endDate);
  const [reservedDates, setReservedDates] = useState([]);
  const [logged, setLogged] = useState(false);
  const [faveado, setFav] = useState(false);
  const [idFavorito, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { accommodationId } = useParams();
  const { isLogged, dates, handleSelectedDates } = useAuth();

  const [proximoDiaBloqueado, setProximoDiaBloqueado] = useState(Infinity);
  const [resetearCalendario, setResetearCalendario] = useState(true)

  const today = new Date();
  const url = "http://100.25.92.28:8080";
  const urlCompartir = "http://digitalbooking.one"


  const settingDates = () => {
    setDateRange([...dates]);
    setCalendarStart(startDate);
    setCalendarEnd(endDate);
  }

  //Fetching data from the db
  useEffect(() => {
    console.log("montando el accommodation");
    setLoading(true);
    handleLogin();

    async function fetchData() {
      try {
        const res = await axios.get(`${url}/alojamientos/${accommodationId}`);
        setAccommodation(res.data);
        const favorites = res.data.favorites;
        if (favorites.length > 0) {
          if (localStorage.getItem("usuario") != null) {
            const searchedFavorite = favorites.find(
              (favorite) =>
                favorite.user.id ===
                JSON.parse(localStorage.getItem("usuario")).id
            );
            if (searchedFavorite != null) {
              setFav(true);
            }
          }
        }
        const res2 = await axios.get(
          `${url}/reservas/alojamientos/${accommodationId}`
        );
        getReservedDates(res2.data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        const favorites = accommodation.favorites;
        setLoading(false);
        settingDates();
      }
    }
    console.log("invocando la función de búsqueda de datos");
    fetchData();
  }, []);

  useEffect(() => {
    console.log(dateRange)
    console.log(calendarStart)
    settingDates();
  }, [dates])

  function getDatePeriod(start, end) {
    let startP = new Date(start + "T00:00-0300");
    const endP = new Date(end + "T00:00-0300");
    const difference = endP.getDate() - startP.getDate();
    const period = [];

    for (let i = 0; i <= difference; i++) {
      period.push(new Date(startP));
      let newDate = startP.getDate() + 1;
      startP.setDate(newDate);
    }
    console.log(period)
    return period;
  }

  function getReservedDates(reservations) {
    if (reservations.length > 0) {
      let unavailableDates = [];

      reservations.map((reservation) => {
        const period = getDatePeriod(
          reservation.initialDate,
          reservation.finalDate
        );

        console.log(reservation.initialDate);
        console.log(reservation.finalDate);
        unavailableDates.push(...period);
      });

      setReservedDates([...unavailableDates]);
    } else {
      setReservedDates([]);
    }
  }

  const handleLogin = () => {
    setLogged(isLogged());
  };

  const handleSelection = (dates) => {
    setResetearCalendario(true)
    let proximoDiaBloqueado1 = reservedDates.find(e => e > dates[0])
    if (proximoDiaBloqueado1) setProximoDiaBloqueado(proximoDiaBloqueado1)


    setDateRange(dates);
    setCalendarStart(dates[0]);

    if (dates[1] !== null) {
      setDateRange(dates);
      setCalendarEnd(dates[1]);
    }
  };

  const handleRoute = () => {
    console.log("handle route")
    history.push(`/alojamientos/${accommodationId}/reserva`);
  };



  const handleSubmit = () => {
    if (logged) {
      if (dateRange[0] == null || dateRange[1] == null) {
        Swal.fire({
          title:
            "Debe seleccionar fecha de reserva en el calendario para continuar",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        return;
      } else {
        handleRoute();
        handleSelectedDates([dateRange[0], dateRange[1]]);

      }
    } else {
      history.push({ pathname: "/login", state: { from: location, to: `/alojamientos/${accommodationId}/reserva`, redirectLogin: true } });
    }
  };

  const generarPuntuacion = () => {
    const scores = accommodation.scores;
    let scoresSum = 0;
    scores.map((score) => (scoresSum += score.score));
    if (scores.length > 0) {
      return Math.round((scoresSum / scores.length) * 2);
    } else {
      return null;
    }
  };

  const convertirARanking = () => {
    const puntuacion = generarPuntuacion();
    if (puntuacion === null) {
      return "";
    }

    if (puntuacion <= 3) {
      return "MALO";
    } else if (puntuacion <= 5) {
      return "BUENO";
    } else if (puntuacion <= 8) {
      return "MUY BUENO";
    } else if (puntuacion <= 10) {
      return "EXCELENTE";
    }
  };

  const handleFavorite = () => {
    if (!faveado) {
      accommodationFav();
    } else {
      deleteAccommodationFav();
    }
    setFav(!faveado);
  };

  const accommodationFav = async () => {
    if (localStorage.getItem("usuario") === null) {
      /*alert(
        "Para seleccionar un alojamiento como favorito debe estar logueado."
      );*/
      Swal.fire({
        title:
          "Para seleccionar un alojamiento como favorito debe estar logueado.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    try {
      const res = await axios.post(
        `${url}/favoritos/crear`,
        {
          accommodation: {
            id: accommodationId,
          },
          user: {
            id: JSON.parse(localStorage.getItem("usuario")).id,
          },
        },
        {
          "Content-Type": "application/json",
        }
      );
      setId(res.data.id);
      setFav(true);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAccommodationFav = async () => {
    try {
      console.log("id del fav antes de eliminarlo --> " + idFavorito);
      const res = await axios.delete(`${url}/favoritos/eliminar/${idFavorito}`);
      console.log("Resultado obtenido");
      console.log(res.data);
      setFav(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onOpenModal = () => setOpen(true);

  const onCloseModal = () => setOpen(false);

  const handleDateFilters = () => {
    setResetearCalendario(false)
    handleSelectedDates([null, null]);
    setDateRange([null, null]);
    setCalendarStart(null);
    setCalendarEnd(null);
  }

  const estaDisponible = (date) => {
    return date >= today && date < proximoDiaBloqueado && (startDate ? date >= startDate : true) && (endDate ? date <= endDate : true)
  };

  const CustomCalendarContainer = ({ className, children }) => {

    return (
      <div className="custom-calendar-accommodation" style={{ width: "100%" }}>
        <CalendarContainer className={className}>
          <div className="button-container">
            <button type="reset" onClick={() => handleDateFilters()}>Borrar selección</button>
          </div>
          <div className="children-calendar" >{children}</div>
        </CalendarContainer>
      </div>
    );
  }


  return (
    <>
      {loading ? (
        <p className="loading">Cargando la información</p>
      ) : (
        <>
          {error ? (
            <p>
              {" "}
              No fue posible obtener el alojamiento buscado. Por favor, vuelva a
              intentarlo más tarde.
            </p>
          ) : (
            <>
              <section className="container-accommodation">
                <AccommodationHeader accommodation={accommodation} />
                <div className="contenedorCalificacion">
                  <div className="iconoUbicacionYDescripcion">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>
                      {accommodation.city.name},{accommodation.city.country}
                    </p>
                  </div>
                  {
                    accommodation.scores.length > 0 ?
                      <div className="puntuacion">
                        <div className="puntuacion-description">
                          <p>{convertirARanking()}</p>
                          <Rating scores={accommodation.scores} />
                        </div>
                        <p className="puntuacionProducto">{generarPuntuacion()}</p>
                      </div>
                      :
                      <></>
                  }

                </div>
                <div className="iconosCompartirYFavoritos">
                  <div>
                    <button htmlFor="share" className="label entypo-export">
                      <FontAwesomeIcon
                        onClick={onOpenModal}
                        className="icons share"
                        icon={faShareAlt}
                      />
                    </button>

                    <Modal open={open} onClose={onCloseModal} center>
                      <h2>Compartí este alojamiento!</h2>
                      <div className="iconsMedia">
                        <a
                          target="_blank"
                          href={`https://wa.me/?text=Reservemos este alojamiento! \n ${urlCompartir}/alojamientos/${accommodationId} `}
                        >
                          <FontAwesomeIcon
                            className="icons whatsapp"
                            icon={faWhatsapp}
                          />
                        </a>

                        <a
                          target="_blank"
                          href={`https://twitter.com/intent/tweet?=Reservalo!&url=${urlCompartir}/alojamientos/${accommodationId}&hashtags=Grupo3,DigitalBooking,DB`}
                        >
                          <FontAwesomeIcon
                            className="icons twitter"
                            icon={faTwitter}
                          />
                        </a>
                        <a
                          target="_blank"
                          href={`https://www.facebook.com/sharer/sharer.php?u=[${urlCompartir}/alojamientos/${accommodationId}]`}
                        >
                          <FontAwesomeIcon
                            className="icons facebook"
                            icon={faFacebook}
                          />
                        </a>
                        <a
                          target="_blank"
                          href={`https://www.facebook.com/dialog/send?link=${urlCompartir}/alojamientos/${accommodationId}`}
                        >
                          <FontAwesomeIcon
                            className="icons facebookMessenger"
                            icon={faFacebookMessenger}
                          />{" "}
                        </a>
                      </div>
                    </Modal>
                  </div>
                  {faveado && !(localStorage.getItem("usuario") === null) ? (
                    <FontAwesomeIcon
                      className="icons favoritoRojo"
                      icon={faHeart}
                      onClick={handleFavorite}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="icons favoritos"
                      icon={faHeart}
                      onClick={handleFavorite}
                    />
                  )}
                </div>
                <div>
                  <Gallery images={accommodation.images} />
                </div>
                <div className="tituloYDescripcion">
                  <h2>{accommodation.name}</h2>
                  <p>{accommodation.description}</p>
                </div>
              </section>
              <section>
                <div className="caracteristicasDelLugar">
                  <h2>¿Qué ofrece este lugar?</h2>
                  <hr />
                  <div className="listadoCaracteristicas">
                    <ul className="listadoLeft">
                      {accommodation.characteristics.map(
                        (characteristic, index) =>
                          index < accommodation.characteristics.length / 2 ? (
                            <li className="iconoListaLeft" key={index}>
                              <FontAwesomeIcon
                                className="icons characteristic-icon"
                                icon={characteristic.icon}
                              />
                              {characteristic.name}
                            </li>
                          ) : (
                            <li className="iconoListaRight" key={index}>
                              <FontAwesomeIcon
                                className="icons characteristic-icon"
                                icon={characteristic.icon}
                              />
                              {characteristic.name}
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </div>
                <div className="contenedorFechasDisp">
                  <h2>Fechas disponibles</h2>
                  <div className="contenedorCalendario">
                    <DatePicker
                      inline
                      calendarContainer={CustomCalendarContainer}
                      className="DatePicker"
                      locale="es"
                      selected={startDate}
                      selectsRange={true}
                      monthsShown={2}
                      dateFormat="dd 'de' MMM."
                      closeOnScroll={true}
                      minDate={today}
                      onChange={(dates) => handleSelection(dates)}
                      startDate={startDate}
                      endDate={endDate}
                      availableDates={!reservedDates}
                      excludeDates={reservedDates}
                      filterDate={resetearCalendario ? estaDisponible : false}
                      disabledKeyboardNavigation
                    />
                    <div className="contenedorMensaje">
                      <p>
                        Agregá tus fechas de viaje para obtener precios exactos
                      </p>
                      <button onClick={() => handleSubmit()}>
                        Iniciar reserva
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="contenedorMapa">
                  <h2>¿Dónde vas a estar?</h2>
                  <hr />
                  <p>
                    {accommodation.city.name}, {accommodation.city.country}
                  </p>
                  <div className="google-maps">
                    <Map
                      city={accommodation.city.name}
                      country={accommodation.city.country}
                      name={accommodation.name}
                    ></Map>
                  </div>
                </div>
              </section>
              <AccommodationPolicies normasDeLaCasa={accommodation.housePolicies.housePolicies} saludYseguridad={accommodation.healthAndSafty.healthAndSafty} politicasDeCancelacion={accommodation.cancellationPolicy.cancellationPolicy} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Accommodation;
