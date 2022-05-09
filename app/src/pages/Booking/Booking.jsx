import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import AccommodationHeader from "../../components/AccommodationHeader/AccommodationHeader";
import AccommodationPolicies from "../../components/AccommodationPolicies/AccommodationPolicies";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import useAuth from "../../auth/useAuth";
import "./Booking.css";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import celebrationGIF from "../../assets/img/celebrationGIF.gif"



const Booking = () => {
  const MySwal = withReactContent(Swal);
  const { accommodationId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [erroMessage, setErrorMessage] = useState(
    "No se pudo procesar su solicitud. Por favor, vuelta a intentarlo más tarde."
  );
  const [accommodation, setAccommodation] = useState({});

  //form controlled-inputs
  const [formName, setFormName] = useState("");
  const [formLastName, setFormLastName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formCity, setFormCity] = useState("");
  const [dateRange, setDateRange] = useState([]);

  const [startDate, endDate] = dateRange;
  const [checkIn, setCheckIn] = useState("__/__/__");
  const [checkOut, setCheckOut] = useState("__/__/__");
  const [formHour, setFormHour] = useState("");
  const [reservedDates, setReservedDates] = useState([]);
  const [userId, setUserId] = useState(null);
  const today = new Date();
  const url = "http://100.25.92.28:8080";
  const history = useHistory();
  //const [blockedDate, setBlockedDate] = useState(Infinity);
  const token = localStorage.getItem("jwt").replaceAll('"', "");

  const { dates, handleSelectedDates } = useAuth();
  const [blockedDate, setBlockedDate] = useState(Infinity);

  const [proximoDiaBloqueado, setProximoDiaBloqueado] = useState(Infinity);
  const [resetearCalendario, setResetearCalendario] = useState(true)


  const selectOptions = {
    default: "Selecciona tu horario de llegada",
    options: [
      {
        value: "6",
        text: "6:00",
      },
      {
        value: "7",
        text: "7:00",
      },
      {
        value: "8",
        text: "8:00",
      },
      {
        value: "9",
        text: "9:00",
      },
      {
        value: "10",
        text: "10:00",
      },
      {
        value: "11",
        text: "11:00",
      },
      {
        value: "12",
        text: "12:00",
      },
      {
        value: "13",
        text: "13:00",
      },
      {
        value: "14",
        text: "14:00",
      },
      {
        value: "15",
        text: "15:00",
      },
      {
        value: "16",
        text: "16:00",
      },
      {
        value: "17",
        text: "17:00",
      },
      {
        value: "18",
        text: "18:00",
      },
      {
        value: "19",
        text: "19:00",
      },
      {
        value: "20",
        text: "20:00",
      },
      {
        value: "21",
        text: "21:00",
      },
      {
        value: "22",
        text: "22:00",
      },
      {
        value: "23",
        text: "23:00",
      },
      {
        value: "0",
        text: "00:00",
      },
      {
        value: "1",
        text: "1:00",
      },
      {
        value: "2",
        text: "2:00",
      },
      {
        value: "3",
        text: "3:00",
      },
      {
        value: "4",
        text: "4:00",
      },
      {
        value: "5",
        text: "5:00",
      },
    ],
  };

  const settingDates = () => {
    setDateRange([...dates]);
    if (dates[0] !== null) {
      setCheckIn(getParsedDate(dates[0]));
      setCheckOut(getParsedDate(dates[1]));
    }
  };

  //Fetching data from the db
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setUserId(JSON.parse(localStorage.getItem("usuario")));

      try {
        const res = await axios.get(`${url}/alojamientos/${accommodationId}`);
        setAccommodation(res.data);
        const res2 = await axios.get(
          `${url}/reservas/alojamientos/${accommodationId}`
        );
        getReservedDates(res2.data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
        settingDates();
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    settingDates();
  }, [dates]);

  function getParsedDate(dateToFormat) {
    let dd = dateToFormat.getDate();
    let mm = dateToFormat.getMonth() + 1; //January is 0!
    let yyyy = dateToFormat.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    const dateString = dd + "/" + mm + "/" + yyyy;

    return dateString.toString();
  }

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
        unavailableDates.push(...period);
      });

      setReservedDates([...unavailableDates]);
    } else {
      setReservedDates([]);
    }
  }

  const availableDates = (date) => {
    if (startDate == dates[0]) {
      return (
        date >= today &&
        date < blockedDate &&
        (endDate ? date <= endDate : true)
      );
    }
  };

  const handleSelection = (dates) => {
    let dayToBlock = reservedDates.find((date) => date > dates[0]);

    if (dayToBlock) {
      setBlockedDate(dayToBlock);
    }

    setResetearCalendario(true)
    let proximoDiaBloqueado1 = reservedDates.find(e => e > dates[0])
    if (proximoDiaBloqueado1) setProximoDiaBloqueado(proximoDiaBloqueado1)


    setDateRange(dates);
    setCheckIn(getParsedDate(dates[0]));

    if (dates[1] !== null) {
      setDateRange(dates);
      setCheckOut(getParsedDate(dates[1]));
    }
  };

  const handleDateFilters = () => {
    setResetearCalendario(false)
    handleSelectedDates([null, null]);
    setDateRange([null, null]);
    setCheckIn("__/__/__");
    setCheckOut("__/__/__");
  };

  const handleOnClick = (hour) => {
    setFormHour(hour);
  };

  const handleSimultaneousBookings = async () => {
    try {
      const res = await axios.get(
        `${url}/reservas/alojamientos/${accommodationId}`
      );
      getReservedDates(res.data);
      const blocked = [
        reservedDates.find(
          (reservedDate) =>
            reservedDate.valueOf() == startDate.valueOf() ||
            reservedDate.valueOf() == endDate.valueOf()
        ),
      ];
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const sendEmail = async (email, bookingHolderName, checkIn, checkOut) => {
    let emailReservation = {
      email: `${email}`,
      subject: `Felicitaciones ${bookingHolderName}! Ha completado de forma correcta su proceso de reserva`,
      body: `Hola ${bookingHolderName}, su reserva ha sido creada exitosamente. Lo esperamos para que disfrute su estadía entre ${checkIn} y el ${checkOut}`,
    };
    try {
      const settingsReservationEmail = {
        method: "POST",
        body: JSON.stringify(emailReservation),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const responseEmailValidation = await fetch(
        `${url}/email/verificacion`,
        settingsReservationEmail
      );
      console.log(responseEmailValidation);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBooking = async () => {
    setLoading(true);

    handleSimultaneousBookings();

    try {
      axios
        .post(
          `${url}/reservas/crear`,
          {
            checkInTime: formHour,
            initialDate: startDate,
            finalDate: endDate,
            bookingHolderName: formName,
            bookingHolderLastName: formLastName,
            bookingHolderEmail: formEmail,
            bookingHolderCity: formCity,
            accommodation: {
              id: accommodationId,
            },
            user: {
              id: userId.id,
            },
          },
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          sendEmail(formEmail, formName, checkIn, checkOut);
          //  history.push(`/alojamientos/${accommodationId}/reserva/exito`);
          console.log(response);

          MySwal.fire({
            title: "La reserva se ha realizado exitosamente!",

            imageUrl: `${celebrationGIF}`,
            imageWidth:"155px",
            confirmButtonColor: "#f0572d",
            didOpen: () => {
              console.log("Entro al swal");
            },
          }).then(() => {
            return history.push(`/`);
          })
        });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const bookingData = {
      checkInTime: formHour,
      initialDate: startDate,
      finalDate: endDate,
      bookingHolderName: formName,
      bookingHolderLastName: formLastName,
      bookingHolderEmail: formEmail,
      bookingHolderCity: formCity,
      accommodation: {
        id: accommodationId,
      },
      user: {
        id: userId.id,
      },
    };

    try {
      handleBooking(bookingData);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      handleSelectedDates([null, null]);
      setLoading(false);
    }
  };

  const estaDisponible = (date) => {
    return date >= today && date < proximoDiaBloqueado && (startDate ? date >= startDate : true) && (endDate ? date <= endDate : true)
  };

  return (
    <>
      {loading ? (
        <p className="loading">Cargando la información</p>
      ) : (
        <>
          <AccommodationHeader accommodation={accommodation} />
          {error ? (
            <p>
              {" "}
              No fue posible procesar la solicitud. Por favor, vuelva a
              intentarlo.
            </p>
          ) : (
            <>
              <div className="booking-forms">
                <section className="booking-form">
                  <form>
                    <div className="personal-data">
                      <h2>Completa tus datos</h2>
                      <fieldset className="personal-data-container">
                        <label htmlFor="name">
                          Nombre
                          <input
                            name="name"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            onChange={(e) => setFormName(e.target.value)}
                            value={formName}
                          ></input>
                        </label>
                        <label htmlFor="last-name">
                          Apellido
                          <input
                            name="last-name"
                            type="text"
                            placeholder="Ingresa tu apellido"
                            onChange={(e) => setFormLastName(e.target.value)}
                            value={formLastName}
                          ></input>
                        </label>
                        <label htmlFor="email">
                          Correo electrónico
                          <input
                            name="email"
                            type="email"
                            placeholder="Ingresa tu correo electrónico"
                            onChange={(e) => setFormEmail(e.target.value)}
                            value={formEmail}
                          ></input>
                        </label>
                        <label htmlFor="city">
                          Ciudad
                          <input
                            name="city"
                            type="text"
                            placeholder="Ingresa tu ciudad de origen"
                            onChange={(e) => setFormCity(e.target.value)}
                            value={formCity}
                          ></input>
                        </label>
                      </fieldset>
                    </div>
                    <div className="date-selection">
                      <h2>Selecciona tu fecha de reserva</h2>
                      <fieldset className="date-selection">
                        <div className="date-selection-container">
                          <div className="calendar-container" id="calendars">
                            <div className="button-container">
                              <button
                                type="reset"
                                onClick={() => handleDateFilters()}
                              >
                                Borrar selección
                              </button>
                            </div>
                            <DatePicker
                              inline
                              className="DatePicker"
                              locale="es"
                              selected={(startDate, endDate)}
                              selectsRange={true}
                              monthsShown={2}
                              dateFormat="dd/MM/yy"
                              filterDates={availableDates}
                              minDate={today}
                              onChange={(dates) => handleSelection(dates)}
                              startDate={startDate}
                              endDate={endDate}
                              excludeDates={reservedDates}
                              filterDate={resetearCalendario ? estaDisponible : false}
                              disabledKeyboardNavigation
                            />
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="arrival-time">
                      <h2>Tu horario de llegada</h2>
                      <fieldset className="arrival-time-container">
                        <div className="arrival-time-warning">
                          <FontAwesomeIcon
                            className="icon-check"
                            icon={faCheckCircle}
                          />
                          <h4>
                            Tu habitación estará lista para el horario indicado.
                            Notifica cualquier cambio para evitar demoras
                            innecesarias.{" "}
                          </h4>
                        </div>
                        <label htmlFor="checkin">
                          Indica tu horario estimado de llegada
                          <SelectMenu
                            options={selectOptions}
                            handleOnClick={handleOnClick}
                          />
                        </label>
                      </fieldset>
                    </div>
                  </form>
                </section>
                <section className="booking-details">
                  <div className="booking-details-container">
                    <h2 className="booking-title">Detalle de la reserva</h2>
                    <img
                      className="booking-image"
                      src={accommodation.images[0].urlImage}
                    />
                    <div className="booking-name">
                      <h3>{accommodation.category.category.toUpperCase()}</h3>
                      <h2>{accommodation.name}</h2>
                    </div>
                    <div className="booking-location">
                      <p className="location-name">
                        <FontAwesomeIcon
                          className="icon-ubication"
                          icon={faMapMarkerAlt}
                        />{" "}
                        {accommodation.city.name}, {accommodation.city.country}
                      </p>
                    </div>
                    <div className="booking-dates">
                      <div className="check-in">
                        <p>Check in</p>
                        <p>{checkIn}</p>
                      </div>
                      <div className="check-out">
                        <p>Check out</p>
                        <p>{checkOut}</p>
                      </div>
                    </div>
                    <button type="submit" onClick={(e) => handleSubmit(e)}>
                      Confirmar reserva
                    </button>
                  </div>
                </section>
              </div>
              <AccommodationPolicies normasDeLaCasa={accommodation.housePolicies.housePolicies} saludYseguridad={accommodation.healthAndSafty.healthAndSafty} politicasDeCancelacion={accommodation.cancellationPolicy.cancellationPolicy} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Booking;
