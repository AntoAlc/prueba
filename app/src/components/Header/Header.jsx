import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import logo from "../../assets/img/logo 1.svg";
import "./Header.css";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import roles from "../../auth/roles";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import facebook from "../../assets/img/Facebook.svg";
import linkedin from "../../assets/img/LinkedIn.svg";
import twitter from "../../assets/img/Twitter.svg";
import instagram from "../../assets/img/Instagram.svg";




function Header() {
  const { user, logout } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [initials, setInitials] = useState(null);
  const [sideBar, setSideBar] = useState(false)

  useEffect(() => {
    console.log("montando el componente en el header");
    if (user) {
      setInitials(user.name.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase());
    }
  }, [user]);

  const cerrandoSesion = () => {
    closeSideBar();
    localStorage.clear();
    sessionStorage.clear();
    logout();
  };

  const handleAdministrationButton = () => {
    closeSideBar();
    history.push({ pathname: '/administracion', state: { from: location, redirectLogin: false }});
  }

  const handleOnClick = (toRoute) => {
    closeSideBar();
    history.push({ pathname: toRoute, state: { from: location, redirectLogin: false } });
  }

  const openSideBar = () => {
    setSideBar(true);
  }

  const closeSideBar = () => {
    setSideBar(false);
  }

  return (
    <>
      <header className="header-element">
        <Link className="container-button" to={{pathname: '/', state: { from: location, redirectLogin: false }}}>
          <img src={logo} alt="LogoHeader" />
          <h2 className="h2-title">Sentite como en tu hogar</h2>
        </Link>
        <div className="container">
          {
            sideBar ?
              <div className="Header_menuHamburguesa__2VGwG">
                <div className="SideNav_menuHamburguesa__221TF" onClick={openSideBar}>
                  <FontAwesomeIcon
                    className="icons facebookMessenger"
                    icon={faBars}
                  />
                </div>
                <div className="SideNav_opacity__190em">
                </div>
                <div className="SideNav_menuDrawer__2cky8">

                  {
                    localStorage.getItem('usuario') === null ?

                      <div className="SideNav_isOpened__1du3o">
                        <div className="SideNav_header__1f0Cy">
                          <span className="SideNav_cerrarSideNav__3-jRf" onClick={closeSideBar}>X</span>
                          <span className="SideNav_menuWord__rU_Tj">MENÚ</span>
                        </div>
                        <div className="SideNav_main__PKn7P">
                          <div className="SideNav_opciones__3xhJ0">
                            <Link to={{ pathname: '/registro', state: { from: location, redirectLogin: false }}} onClick={() => closeSideBar()}><p>Crear cuenta</p>
                            </Link>
                            <Link to={{ pathname: '/login', state: { from: location, redirectLogin: false }}} onClick={() => closeSideBar()}>
                              <p>Iniciar sesión</p>
                            </Link>
                          </div>
                        </div>
                        <div className="SideNav_footer__2Qu-h">
                          <Link className="SideNav_linkRedSocial__1i8Fz" to="www.facebook.com/Digital-Booking-107913148401278" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="Logo Facebook" />
                          </Link >
                          <Link className="SideNav_linkRedSocial__1i8Fz" to="www.linkedin.com/in/digital-booking" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="Logo Linkedin" />
                          </Link >
                          <Link className="SideNav_linkRedSocial__1i8Fz" to="https://twitter.com/Digital_Booking" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="Logo Twitter" />
                          </Link >
                          <Link className="SideNav_linkRedSocial__1i8Fz" to="https://www.instagram.com/digitalbookingoficial/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="Logo Instagram" />
                          </Link >


                        </div>
                      </div>


                      :

                      <div className="SideNav_isOpened__1du3o">
                        <div className="SideNav_header__1f0Cy">
                          <span className="SideNav_cerrarSideNav__3-jRf" onClick={closeSideBar}>X</span>
                          <div className="Profile_contenedorProfile__2rWnF">
                            <p className="Profile_avatar__wwXnz">{JSON.parse(localStorage.getItem("usuario")).name.charAt(0).toUpperCase()}{JSON.parse(localStorage.getItem("usuario")).lastName.charAt(0).toUpperCase()}</p>
                            <div className="Profile_contenedorNombre__3pbRO">
                              <p className="Profile_saludo__3PK0a">Hola,</p><p className="Profile_nombre__9jGWT">{JSON.parse(localStorage.getItem("usuario")).name} {JSON.parse(localStorage.getItem("usuario")).lastName}</p>
                              {
                                JSON.parse(localStorage.getItem("usuario")).role === 'ADMIN' ?
                                  <p className="SideNav_crearNuevoAlojamiento">¿Quieres <span onClick={handleAdministrationButton}>crear un nuevo alojamiento</span>?</p>
                                  :
                                  ""
                              }
                            </div>
                          </div>
                        </div>

                        <div className="SideNav_main__PKn7P">
                          <p className="SideNav_cerrarSesion__1bdfL">¿Deseas<span onClick={cerrandoSesion}> cerrar sesión</span>?</p>
                        </div>

                        <div className="SideNav_footer__2Qu-h">
                          <Link className="SideNav_linkRedSocial__1i8Fz" to="www.facebook.com/Digital-Booking-107913148401278" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="Logo Facebook" />
                          </Link ><Link className="SideNav_linkRedSocial__1i8Fz" to="www.linkedin.com/in/digital-booking" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="Logo Linkedin" />
                          </Link ><Link className="SideNav_linkRedSocial__1i8Fz" to="https://twitter.com/Digital_Booking" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="Logo Twitter" />
                          </Link >
                          <Link className="SideNav_linkRedSocial__1i8Fz" to="https://www.instagram.com/digitalbookingoficial/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="Logo Instagram" />
                          </Link >
                        </div>

                      </div>
                  }

                </div>
              </div>
              :
              <div className="Header_menuHamburguesa__2VGwG">
                <div className="SideNav_menuHamburguesa__221TF" onClick={openSideBar}>
                  <FontAwesomeIcon
                    className="icons facebookMessenger"
                    icon={faBars}
                  />
                </div>
                <div>
                </div>
                <div className="SideNav_menuDrawer__2cky8">
                  <div>
                    <div className="SideNav_header__1f0Cy">
                      <span className="SideNav_cerrarSideNav__3-jRf" onClick={closeSideBar}>X</span>
                      <span className="SideNav_menuWord__rU_Tj">MENÚ</span>
                    </div>
                    <div className="SideNav_main__PKn7P">
                      <div className="SideNav_opciones__3xhJ0">
                        <Link to={{ pathname: '/registro', state: { from: location, redirectLogin: false }}} onClick={() => closeSideBar()}>
                          <p>Crear cuenta</p>
                        </Link>
                        <Link to={{ pathname: '/login', state: { from: location, redirectLogin: false }}} onClick={() => closeSideBar()}>
                          <p>Iniciar sesión</p>
                        </Link>
                      </div>
                    </div>
                    <div className="SideNav_footer__2Qu-h">
                      <Link className="SideNav_linkRedSocial__1i8Fz" to="www.facebook.com/Digital-Booking-107913148401278" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="Logo Facebook" />
                      </Link ><Link className="SideNav_linkRedSocial__1i8Fz" to="www.linkedin.com/in/digital-booking" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="Logo Linkedin" />
                      </Link ><Link className="SideNav_linkRedSocial__1i8Fz" to="https://twitter.com/Digital_Booking" target="_blank" rel="noreferrer">
                        <img src={twitter} alt="Logo Twitter" />
                      </Link >
                      <Link className="SideNav_linkRedSocial__1i8Fz" to="https://www.instagram.com/digitalbookingoficial/" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="Logo Instagram" />
                      </Link >
                    </div>
                  </div>
                </div>
              </div>
          }








          {user && window.innerWidth > 500 ?
            <div className="button-header-logueado">
              {user?.role === roles.admin &&
                (
                  <>
                    <button className="adminButton" onClick={handleAdministrationButton}>Administración</button>
                    <div className="vl"></div>
                  </>
                )
              }
              < div className="logueadoName">
                <button className="button-cerrar-sesion" onClick={cerrandoSesion}>
                  X
                </button>
                <div className="iniciales-y-saludo">
                  <label className="label-iniciales">{initials}</label>
                  <p className="saludo">
                    Hola,
                    <span className="span-container">
                      {" "}
                      {user.name} {user.lastName}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            :
            <>
              <div className="button-header">
                {location?.pathname === '/login' && (
                  <button
                    className="crearCuentaLink"
                    onClick={() => handleOnClick("/registro")}
                  >
                    <div className="button-crear-cuenta">Crear cuenta</div>
                  </button>
                )}
                {location?.pathname === '/registro' && (
                  <button
                    className="iniciarSesionLink"
                    onClick={() => handleOnClick("/login")}
                  >
                    <div className="button-iniciar-sesion">
                      Iniciar sesión
                    </div>
                  </button>
                )
                }
                {(location?.pathname !== '/login' && location?.pathname !== '/registro') && (
                  <>
                    <button
                      className="crearCuentaLink"
                      onClick={() => handleOnClick("/registro")}
                    >
                      <div className="button-crear-cuenta">Crear cuenta</div>
                    </button>
                    <button
                      className="iniciarSesionLink"
                      onClick={() => handleOnClick("/login")}
                    >
                      <div className="button-iniciar-sesion">
                        Iniciar sesión
                      </div>
                    </button>
                  </>
                )
                }
              </div>
            </>
          }
        </div>
      </header>
    </>
  )
}

export default Header;
