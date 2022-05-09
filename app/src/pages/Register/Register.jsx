import React, { useState } from "react";
import "./Register.css";
import Input from "../../components/Input/Input";
import {
  Button,
  Form,
  ContenedorForm,
  H2,
  Div,
  MensajeError,
} from "../../pages/Login/FormLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function Register() {
  let usuarioBD = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    role: {
      id: 1,
    },
  };


  const [leyendaErrorSobreForm, cambiarLeyenda] = useState("");
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null }); //campo= lo q el user escribe en el input, valido= verd o falso validacion
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [confirmaPassword, cambiarConfPassword] = useState({
    campo: "",
    valido: null,
  });
  const [email, cambiarEmail] = useState({ campo: "", valido: null });
  const [passwordVisible, cambiarVisibilidad] = useState(false);
  const [passOtext, cambiarTipo] = useState("password");
  const [mensajeErrorSobreForm, cambiarVisibilidadMensajeError] =
    useState(false);
  const [camposIncompletos, cambiarVisibilidadMensajeCambiosIncompletos] =
    useState(false);
  const [contraseñasDistintas, cambiarVisibilidadContraseñasDistintas] = useState(false);
  const url = "http://100.25.92.28:8080";
  const history = useHistory();
  const location = useLocation();

  const expressions = {
    name: /^[a-zA-Z_-]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{6,}$/, // 6 a 50 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const sendEmail = async () => {
    let emailReservation = {
      email: `${usuarioBD.email}`,
      subject: "Felicitaciones! Ha completado de forma correcta su creación de cuenta con Digital Booking",
      body: `Hola ${usuarioBD.name} ${usuarioBD.lastName}, su cuenta ha sido creada exitosamente. `
    }
    try {
      const settingsReservationEmail = {
        method: "POST",
        body: JSON.stringify(emailReservation),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }
      const responseEmailValidation = await fetch(`${url}/email/verificacion`, settingsReservationEmail);
      console.log(responseEmailValidation)
    }
    catch (err) {
      console.log(err)
    }

  }

  const handleRegistro = async (usuarioBD) => {
    if (
      usuarioBD.name === "" ||
      usuarioBD.lastName === "" ||
      usuarioBD.password === "" ||
      usuarioBD.confirmaPassword === "" ||
      usuarioBD.email === ""
    ) {
      cambiarVisibilidadMensajeCambiosIncompletos(true);
      setTimeout(function () { cambiarVisibilidadMensajeCambiosIncompletos(false); }, 7000);
    }
    else if (usuarioBD.password != usuarioBD.confirmaPassword) {
      cambiarVisibilidadContraseñasDistintas(true);
      setTimeout(function () { cambiarVisibilidadContraseñasDistintas(false); }, 7000);
    }
    else {
      try {
        const settings = {
          method: "POST",
          body: JSON.stringify(usuarioBD),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };

        const response = await fetch(`${url}/usuarios/crear`, settings);
        const data = await response.json();
        sendEmail();

        history.push({ pathname: '/login', state: { from: location, redirectLogin: false }});
      } catch (err) {
        cambiarVisibilidad(true);
        setTimeout(function () { cambiarVisibilidadMensajeError(false); }, 3000);
        cambiarLeyenda("Lamentablemente no ha podido registrarse. Por favor intente más tarde");
        throw err;
      }
    }
  }


  const handleCargarUsuario = () => {
    usuarioBD.name = nombre.campo;
    usuarioBD.lastName = apellido.campo;
    usuarioBD.email = email.campo;
    usuarioBD.password = password.campo;
    usuarioBD.confirmaPassword = confirmaPassword.campo;
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    handleCargarUsuario();
    handleRegistro(usuarioBD);
  };

  const handleCambiarVisibilidadPassword = (e) => {
    e.preventDefault();
    if (passwordVisible == false) {
      cambiarVisibilidad(true);
      cambiarTipo("text");
    }
    if (passwordVisible == true) {
      cambiarVisibilidad(false);
      cambiarTipo("password");
    }
  };

  return (
    <ContenedorForm>
      {mensajeErrorSobreForm ? (
        <p className="leyendaErrorSobreForm">{leyendaErrorSobreForm}</p>
      ) : (
        <></>
      )}

      <H2>Crear cuenta</H2>
      <Form action="">
        <Div>
          <Input
            className="nombreApellido"
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            name="nombre"
            leyendaError="Debe ingresar mínimo tres caracteres"
            expresionRegular={expressions.name}
          />

          <Input
            className="nombreApellido"
            estado={apellido}
            cambiarEstado={cambiarApellido}
            tipo="text"
            label="Apellido"
            name="apellido"
            leyendaError="Este campo es obligatorio"
            expresionRegular={expressions.name}
          />
        </Div>

        <Input
          estado={email}
          cambiarEstado={cambiarEmail}
          tipo="email"
          label="Correo electrónico"
          name="email"
          leyendaError="Debe ingresar un mail válido"
          expresionRegular={expressions.email}
        />
        <div className="contenedorEyePassword">
          <Input
            estado={password}
            cambiarEstado={cambiarPassword}
            tipo={passOtext}
            label="Contraseña"
            name="contrasenia"
            leyendaError="La contraseña debe tener mínimo 6 caracteres"
            expresionRegular={expressions.password}
          />
          <button
            className="buttomEyePassword"
            onClick={handleCambiarVisibilidadPassword}
          >
            {passwordVisible ? (
              <FontAwesomeIcon className="iconsEyeOpen" icon={faEye} />
            ) : (
              <FontAwesomeIcon className="iconsEyeClose" icon={faEyeSlash} />
            )}
          </button>
        </div>
        <div className="contenedorEyePassword">
          <Input
            estado={confirmaPassword}
            cambiarEstado={cambiarConfPassword}
            tipo={passOtext}
            label="Confirmar contraseña"
            name="confirmarContrasenia"
            leyendaError="Este campo es obligatorio"
            expresionRegular={expressions.password}
          />

          <button
            className="buttomEyePassword"
            onClick={handleCambiarVisibilidadPassword}
          >
            {passwordVisible ? (
              <FontAwesomeIcon className="iconsEyeOpen" icon={faEye} />
            ) : (
              <FontAwesomeIcon className="iconsEyeClose" icon={faEyeSlash} />
            )}
          </button>
        </div>
        <div className="mensajeError">
          {camposIncompletos ? (
            <MensajeError>
              <p>Por favor, complete todos los campos</p>
            </MensajeError>
          ) : (
            <></>
          )}
          {contraseñasDistintas ? (
            <MensajeError>
              <p>
                La confirmación de la contraseña debe ser igual a la contraseña
              </p>
            </MensajeError>
          ) : (
            <></>
          )}
          <Button onClick={handleOnClick}>Crear cuenta</Button>
        </div>
      </Form>
      <p className="linkRegistroOCrearCuenta">
        ¿Ya tienes una cuenta?
        <Link to={{ pathname: '/login', state: { from: location, redirectLogin: false }}}> Inicia sesión</Link>
      </p>
    </ContenedorForm>
  )
}