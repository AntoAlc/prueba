import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import SelectMenuAdministration from "../../components/SelectMenuAdministration/SelectMenuAdministration";
import "./Administration.css";
import AdministrationHeader from "../../components/AdministrationHeader/AdministrationHeader";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import celebrationGIF from "../../assets/img/celebrationGIF.gif";

function Administration() {
  const MySwal = withReactContent(Swal);
  let accommodation = {
    name: "",
    description: "",
    address: "",
    category: {
      id: null,
    },
    city: {
      id: null,
    },
    characteristics: [],
    images: [],
    cancellationPolicy: { cancellationPolicy: null },
    healthAndSafty: { healthAndSafty: null },
    housePolicies: { housePolicies: null },
  };

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([{}]);
  const [characteristics, setcharacteristics] = useState([]);
  const [characteristicsId, setcharacteristicsId] = useState([]);

  //form controlled-inputs
  const [formNameAccommodation, setFormNameAccommodation] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formCategory, setFromCategory] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formNormas, setFormNormas] = useState("");
  const [formPoliticas, setFormPoliticas] = useState("");
  const [formSeguridad, setFormSeguridad] = useState("");
  const [checkedState, setCheckedState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [urlImage, setUrlImage] = useState({});
  const [urlImages, setUrlImages] = useState([]);
  const [mensajeCamposObligatorios, setMensajeCamposObligatorios] =
    useState(null);
  const [mensajeUrlObligatorios, setMensajeUrlObligatorios] = useState(null);
  const [valueURL, setValueURL] = useState("");

  const url = "http://100.25.92.28:8080";
  const history = useHistory();

  let arrayId = [];
  let idcharacteristics;
  let valueOfArrayImage;
  let idNewAccommodation;
  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    description: /^[a-zA-ZÀ-ÿ\s]{10,100}$/, // Letras y espacios, pueden llevar acentos.
  };

  //Fetching data from the db
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(`${url}/categorias/todos`);
        const res2 = await axios.get(`${url}/caracteristicas/todos`);
        setCategories(res.data);
        setcharacteristics(res2.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleArrayCaracteries = () => {
    for (let index = 0; index < characteristics.length; index++) {
      if (checkedState[index] === true) {
        setcharacteristicsId(index);
        console.log(characteristicsId[index]);
      }
    }
  };

  const selectOptionsCategory = {
    default: "Selecciona la categoria",
    options: [
      {
        value: 1,
        text: "Casas",
      },
      {
        value: 2,
        text: "Departamentos",
      },
      {
        value: 3,
        text: "Cabañas",
      },
      {
        value: 4,
        text: "Habitación privada",
      },
    ],
  };

  const selectOptionsCity = {
    default: "Selecciona la ciudad",
    options: [
      {
        value: 1,
        text: "Buenos Aires",
      },
      {
        value: 2,
        text: "Cariló",
      },
      {
        value: 3,
        text: "Punta del Este",
      },
      {
        value: 4,
        text: "Villa General Belgrano",
      },
      {
        value: 5,
        text: "Mendoza",
      },
      {
        value: 6,
        text: "Mar del Plata",
      },
      {
        value: 7,
        text: "San Carlos de Bariloche",
      },
    ],
  };

  const handleOnClickCategory = (category) => {
    setFromCategory(category);
  };

  const handleOnClickCity = (city) => {
    setFormCity(city);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleCargarAccommodation(accommodation);
    // validacionCamposObligatorios();
    handleArrayCaracteries();
    handleAddAccommodation(accommodation);
  };

  const handleCargarAccommodation = () => {
    let arrayUrlImges = [];
    accommodation.name = formNameAccommodation;
    accommodation.address = formAddress;
    accommodation.description = formDescription;

    /*cargando categoria */
    for (let index = 0; index < selectOptionsCategory.options.length; index++) {
      if (formCategory === selectOptionsCategory.options[index].text) {
        accommodation.category.id = selectOptionsCategory.options[index].value;
      }
    }

    /*cargando ciudad */
    for (let index = 0; index < selectOptionsCity.options.length; index++) {
      if (formCity === selectOptionsCity.options[index].text) {
        accommodation.city.id = selectOptionsCity.options[index].value;
      }
    }

    /*characteristics  array */
    if (checkedState.length > 0) {
      for (let index = 0; index < checkedState.length; index++) {
        if (checkedState[index] === true) {
          arrayId.push(index + 1);
        } else {
          console.log("el index " + index + " no esta seleccionado");
        }
      }
      for (let index = 0; index < arrayId.length; index++) {
        idcharacteristics = arrayId[index];
        accommodation.characteristics.push({
          id: idcharacteristics,
        });
      }
    }
    /*
    console.log("\t\ndescription: accommodation.characteristics[0]= "+accommodation.characteristics[0])
    console.log("\t\ndescription: accommodation.characteristics[1].id= "+accommodation.characteristics[1].id)
    console.log("\t\ndescription: accommodation.characteristics= "+accommodation.characteristics) 
*/
    //    accommodation.characteristics=arrayId;
    /*images array */
    if (urlImages.length > 0) {
      for (let index = 0; index < urlImages.length; index++) {
        arrayUrlImges.push(urlImages[index].urlImage);
      }
      for (let index = 0; index < arrayUrlImges.length; index++) {
        valueOfArrayImage = arrayUrlImges[index];
        accommodation.images.push({
          title: "Esta es una imagen de un alojamiento",
          urlImage: valueOfArrayImage,
        });
        if (accommodation.images !== null) {
          console.log(
            "array img " +
              accommodation.images[index].title +
              " url " +
              accommodation.images[index].urlImage
          );
        }
      }
      /* console.log("\t\ndescription: accommodation.images[0].title= "+accommodation.images[0].title)
       console.log("\t\ndescription: accommodation.images[0].urlImage= "+accommodation.images[0].urlImage)
       console.log("\t\ndescription: accommodation.images[0].title= "+accommodation.images[1].title)
       console.log("\t\ndescription: accommodation.images[0].urlImage= "+accommodation.images[1].urlImage)
      */
    }
    accommodation.cancellationPolicy.cancellationPolicy = formPoliticas;
    accommodation.healthAndSafty.healthAndSafty = formSeguridad;
    accommodation.housePolicies.housePolicies = formNormas;

    console.log("Name: accommodation.name= " + accommodation.name);
    console.log(
      "\t\ndescription: accommodation.description= " + accommodation.description
    );
    console.log(
      "\t\ndescription: accommodation.address= " + accommodation.address
    );
    console.log(
      "\t\ndescription: accommodation.category.id= " + accommodation.category.id
    );
    console.log(
      "\t\ndescription: accommodation.city.id= " + accommodation.city.id
    );
    console.log(
      "\t\ndescription: accommodation.cancellationPolicy.cancellationPolicy= " +
        accommodation.cancellationPolicy.cancellationPolicy
    );
    console.log(
      "\t\ndescription: accommodation.healthAndSafty.healthAndSafty= " +
        accommodation.healthAndSafty.healthAndSafty
    );
  };

  const handleAddAccommodation = async (accommodation) => {
    if (
      accommodation.name === "" ||
      accommodation.address === "" ||
      accommodation.description === "" ||
      accommodation.category.id === "" ||
      accommodation.city.id === "" ||
      accommodation.characteristics === "" ||
      accommodation.housePolicies.housePolicies === null ||
      accommodation.cancellationPolicy.cancellationPolicy === null ||
      accommodation.healthAndSafty.healthAndSafty === null
    ) {
      setMensajeCamposObligatorios(true);
      setTimeout(function () {
        setMensajeCamposObligatorios(false);
      }, 3000);
    } else {
      try {
        const settings = {
          method: "POST",
          body: JSON.stringify(accommodation),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(`${url}/alojamientos/crear`, settings);
        const data = await response.json();
        idNewAccommodation = data.id;
        console.log("json " + JSON.stringify(accommodation));
        MySwal.fire({
          title: "La reserva se ha realizado exitosamente!",

          imageUrl: `${celebrationGIF}`,
          imageWidth: "155px",

          confirmButtonColor: "#f0572d",
          didOpen: () => {
            console.log("Entro al swal");
          },
        }).then(() => {
          history.push(`/alojamientos/${idNewAccommodation}`);
        });
      } catch (err) {
        console.log(err);
        /* cambiarVisibilidad(true);
        setTimeout(function () {
          cambiarVisibilidadMensajeError(false);
        }, 3000);
        cambiarLeyenda(
          "Lamentablemente no ha podido registrarse. Por favor intente más tarde"
        );
        throw err;*/
      }
    }
  };

  const handleOnChange = (position) => {
    const updateCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updateCheckedState);

    if (checkedState[0] === true) {
      setcharacteristicsId(position);
    } else {
      console.log("El item " + position + " el array es " + checkedState);
    }
  };

  const handleChangeUrl = (e) =>{
    setValueURL(e.target.value);
    setUrlImage({ [e.target.name]: e.target.value });
  }

  const handleClickAdd = (e) => {
    if (Object.keys(urlImage).length === 0) {
      setMensajeUrlObligatorios(true);
      setTimeout(function () {
        setMensajeUrlObligatorios(false);
      }, 3000);
      return;
    }
    setValueURL("");
    setUrlImages([...urlImages, urlImage]);
  };

  const deleteUrl = (index) => {
    const resetUrlImages = [...urlImages];
    resetUrlImages.splice(index, 1);
    setUrlImages(resetUrlImages);
  };

  return (
    <>
      <AdministrationHeader />
      <div className="administation-form">
        <section className="section-administration-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <h2 className="h2-titulo">Crear propiedad</h2>
            <fieldset className="container-form">
              <div className="accommodation-data-container">
                <div className="container-grid">
                  <label className="label-administation-data" htmlFor="name">
                    Nombre del alojamiento
                    <input
                      className="input-administration-data"
                      name="nameAccommodation"
                      type="text"
                      placeholder="Ingresa el nombre del alojamiento"
                      onChange={(e) => setFormNameAccommodation(e.target.value)}
                      value={formNameAccommodation}
                    ></input>
                  </label>
                  <label
                    className="label-administation-data"
                    htmlFor="category"
                  >
                    Categoria
                    <SelectMenuAdministration
                      className="input-administration-data"
                      options={selectOptionsCategory}
                      handleOnClick={handleOnClickCategory}
                    />
                  </label>
                  <label className="label-administation-data" htmlFor="address">
                    Dirección
                    <input
                      className="input-administration-data"
                      name="address"
                      type="text"
                      placeholder="Ingresa la dirección del alojamiento"
                      onChange={(e) => setFormAddress(e.target.value)}
                      value={formAddress}
                    ></input>
                  </label>
                  <label className="label-administation-data" htmlFor="city">
                    Ciudad
                    <div className="administration-select">
                      <SelectMenu
                        className="custom-select-administation"
                        options={selectOptionsCity}
                        handleOnClick={handleOnClickCity}
                      />
                    </div>
                  </label>
                </div>
                <label className="label-administation-data-description">
                  Descripción
                  <textarea
                    className="input-administration-data"
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    placeholder="Ingresa la descripción del alojamiento"
                    onChange={(e) => setFormDescription(e.target.value)}
                    value={formDescription}
                  ></textarea>
                </label>
              </div>
              <div className="accommodation-attributes">
                <h2 className="h2-caracterisitcas">Agregar características</h2>
                <fieldset className="accomodations-characteristics-container">
                  <ul className="characteristics-list">
                    {characteristics.map(({ icon, name }, index) => {
                      return (
                        <li className="li-administration" key={index}>
                          <div className="caracteristic-list-idem">
                            <input
                              className="checkbox-input"
                              type="checkbox"
                              id={`custom-checkbox-${index}`}
                              name={name}
                              value={name}
                              checked={setCheckedState[index]}
                              onChange={() => handleOnChange(index)}
                            />
                            <li className="iconoListaLeft" key={index}>
                              <FontAwesomeIcon
                                className="icons characteristic-icon"
                                icon={icon}
                              />
                            </li>
                            <label htmlFor={`custom-checkbox-${index}`}>
                              {name}
                            </label>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </fieldset>
              </div>
              <h2 className="h2-normas">Politicas del producto</h2>
              <fieldset className="accomodations-normas-container">
                <div className="accommodation-politics">
                  <div className="normasCasa">
                    <h3>Normas de la casa</h3>
                    <label
                      className="label-textArea-administration"
                      htmlFor="normas"
                    >
                      Descripción
                      <textarea
                        className="textArea-administration"
                        name="normas"
                        id="normas"
                        cols="30"
                        rows="10"
                        placeholder="Ingresa las normas de la casa"
                        onChange={(e) => setFormNormas(e.target.value)}
                        value={formNormas}
                      ></textarea>
                    </label>
                  </div>
                  <div className="saludSeguridad">
                    <h3>Salud y seguridad</h3>
                    <label
                      className="label-textArea-administration"
                      htmlFor="normas"
                    >
                      Descripción
                      <textarea
                        className="textArea-administration"
                        name="normas"
                        id="normas"
                        cols="30"
                        rows="10"
                        placeholder="Ingresa las normas de salud y seguridad"
                        onChange={(e) => setFormSeguridad(e.target.value)}
                        value={formSeguridad}
                      ></textarea>
                    </label>
                  </div>
                  <div className="politicas">
                    <h3>Políticas de cancelación</h3>
                    <label
                      className="label-textArea-administration"
                      htmlFor="normas"
                    >
                      Descripción
                      <textarea
                        className="textArea-administration"
                        name="normas"
                        id="normas"
                        cols="30"
                        rows="10"
                        placeholder="Ingresa las políticas de cancelación"
                        onChange={(e) => setFormPoliticas(e.target.value)}
                        value={formPoliticas}
                      ></textarea>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="accommodation-image">
                <h2 className="h2-add-images">Cargar imagenes</h2>
                {urlImages.length > 0 ? (
                  <>
                    <div className="delete-images">
                      {urlImages.map((value, index) => (
                        <div className="list" key={index}>
                          <h3 className="h3-urlImages">{value.urlImage}</h3>
                          <button
                            className="button-delete"
                            onClick={() => deleteUrl(index)}
                          >
                            x
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div className="add-images-container">
                  <input className="input-urlImages" type="text" name="urlImage" onChange={handleChangeUrl} value={valueURL}/>
                  <button className="button-add" onClick={handleClickAdd}>+</button>
                </div>
              </div>
              {mensajeCamposObligatorios === true ? (
                <p className="p-mensajeCamposObligatorios">
                  Todos los campos son obligatorios
                </p>
              ) : (
                <></>
              )}
              {mensajeUrlObligatorios === true ? (
                <p className="p-mensajeUrlObligatorios">
                  Debe escribir una url para poder agregarla
                </p>
              ) : (
                <></>
              )}
              <div className="button-crear-container">
                <button className="button-crear" onClick={handleOnSubmit}>
                  Crear
                </button>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </>
  );
}

export default Administration;
