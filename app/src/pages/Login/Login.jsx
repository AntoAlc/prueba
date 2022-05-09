import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Button, Form, H2, MensajeError, ContenedorForm } from "./FormLogin";
import Input from "../../components/Input/Input";
import useAuth from "../../auth/useAuth";
import "./Login.css";

function Login() {

  const [mensajeErrorSobreForm, cambiarVisibilidadMensajeError] = useState(false);
  const [leyendaErrorSobreForm, cambiarLeyenda] = useState("");
  const [leyendaErrorSobreFormNoLogueado, cambiarLeyendaLogin] = useState(false);
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [email, cambiarEmail] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [passwordVisible, cambiarVisibilidad] = useState(false);
  const [passOtext, cambiarTipo] = useState("password");
  const [camposIncompletos, cambiarVisibilidadMensajeCambiosIncompletos] = useState(false);
  const history = useHistory();
  const { login } = useAuth();
  const location = useLocation();

  const url = "http://100.25.92.28:8080";

  const expressions = {
    password: /^.{5,}$/, // 6 a 50 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  let usuarioBD = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  };

  let usuarioLogin = {
    email: "",
    password: "",
  };

  let usuarioToken = {
    username: "",
    password: "",
    token: ""
  };

  useEffect(() => {
    console.log(location)
    console.log("Tipo de dato")
    console.log((typeof location.state))
    if (location.state !== null && typeof location.state !== undefined && location.state?.redirectLogin !== null && typeof location.state.redirectLogin !== undefined) {
      if (location.state.redirectLogin) {
        redireccionDesdeBotonReserva();
      }
    }
  }, []);

  const handleIniciarSesion = async (usuarioLogin) => {
    if (usuarioLogin.password === "" || usuarioLogin.email === "") {
      cambiarVisibilidadMensajeCambiosIncompletos(true);
      setTimeout(function () { cambiarVisibilidadMensajeCambiosIncompletos(false); }, 3000);
    } else {
      try {
        const settings = {
          method: "POST",
          body: JSON.stringify(usuarioLogin),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };

        const response = await fetch(`${url}/usuarios/obtenerUsuario`, settings);
        const data = await response.json();
        usuarioBD.id = data.id;
        usuarioBD.name = data.name;
        usuarioBD.lastName = data.lastName;
        usuarioBD.email = data.email;
        usuarioBD.role = data.role.name;
        handleCargarUsuarioToken();

        try {
          const settings = {
            method: "POST",
            body: JSON.stringify(usuarioToken),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          };

          const response = await fetch(`${url}/authenticate`, settings);
          const data = await response.json();
          localStorage.setItem("jwt", data.jwt);
        } catch (err) {
          console.log(err);
        }
        localStorage.setItem("usuario", JSON.stringify(usuarioBD));
        login(usuarioBD);

        //redireccionamiento dinámico a la página anterior desde la que uno se loguea
        if (location.state.from) {
          const toRoute = location.state.to;
          history.push({ pathname: toRoute, state: { from: location.state.from } });
        } else {
          history.push({ pathname: '/', state: { from: location.state.from } });
        }

      } catch (err) {
        cambiarVisibilidadMensajeError(true);
        setTimeout(function () { cambiarVisibilidadMensajeError(false); }, 3000);
        cambiarLeyenda("Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde");
        console.log(err);
      }
    }
  };

  const handleCargarUsuarioLogin = () => {
    usuarioLogin.email = email.campo;
    usuarioLogin.password = password.campo;
  };

  const handleCargarUsuarioToken = () => {
    usuarioToken.username = email.campo;
    usuarioToken.password = password.campo;
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    handleCargarUsuarioLogin();
    handleIniciarSesion(usuarioLogin);
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

  const redireccionDesdeBotonReserva = () => {
    cambiarLeyendaLogin(true);
    setTimeout(function () { cambiarLeyendaLogin(false); }, 7000);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    history.push({ pathname: '/registro', state: { from: location.state.from } });

  }

  return (
    <ContenedorForm>
      {
        mensajeErrorSobreForm ?
          (
            <p className="leyendaErrorSobreForm">{leyendaErrorSobreForm}</p>
          ) :
          (
            <></>
          )
      }
      {leyendaErrorSobreFormNoLogueado ? (
        <p className="leyendaErrorSobreForm">El login es obligatorio para realizar reservas</p>
      ) :
        (
          <></>
        )}

      <H2>Iniciar sesión</H2>
      <Form action="">
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
            className="password"
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
        <div className="mensajeError">
          {formularioValido === false && (
            <MensajeError>
              <p>Por favor, vuelva a intentarlo sus credenciales son inválidas</p>
            </MensajeError>
          )}
          {camposIncompletos ? (
            <MensajeError>
              <p>Por favor, complete todos los campos</p>
            </MensajeError>
          ) : (
            <></>
          )}
          <Button onClick={handleOnClick}>Ingresar</Button>
        </div>
      </Form>
      <p className="linkRegistroOCrearCuenta">
        ¿Aún no tienes cuenta? <button className="buttonRegistrate" typeof="submit" onClick={handleRegister}>Registrate</button>
      </p>
    </ContenedorForm>
  );
}

export default Login;
