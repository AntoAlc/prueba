import React from "react";
import { Redes, Ul, P, FooterElement } from "./FooterElements";
import facebook from "../../assets/img/Facebook.svg";
import linkedin from "../../assets/img/LinkedIn.svg";
import twitter from "../../assets/img/Twitter.svg";
import instagram from "../../assets/img/Instagram.svg";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import './Footer.css'

function Footer() {
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const url = "http://digitalbooking.one";

  return (
    <FooterElement>
      <P>©2021 Digital Booking</P>
      <Redes>
        <Ul type="none" data-testid="footer-1">
          <li>
            <a
              href={"https://www.facebook.com/Digital-Booking-107913148401278"}
              target="_blank"
            >
              <img src={facebook} alt="Logo Facebook" />
            </a>
          </li>
          <li>
            <a href={"https://www.linkedin.com/in/digital-booking"} target="_blank">
              <img src={linkedin} alt="Logo Linkedin" />
            </a>
          </li>
          <li>
            <a href={"https://twitter.com/Digital_Booking"} target="_blank">
              <img src={twitter} alt="Logo Twitter" />
            </a>
          </li>
          <li>
            <a
              href={"https://www.instagram.com/digitalbookingoficial/"}
              target="_blank"
            >
              <img src={instagram} alt="Logo Instagram" />
            </a>
          </li>
          <li>
            
              <button htmlFor="share" className="label entypo-export buttonShare">
                <FontAwesomeIcon
                  onClick={onOpenModal}
                  className="icons share"
                  icon={faShareSquare}
                />
              </button>
            
            <Modal open={open} onClose={onCloseModal} center>
              <h2>Compartí esta página!</h2>
              <div className="iconsMedia">
                <a
                  target="_blank"
                  href={`https://wa.me/?text=Reservemos en esta página! \n ${url} `}
                >
                  <FontAwesomeIcon
                    className="icons whatsapp"
                    icon={faWhatsapp}
                  />
                </a>

                <a
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?=Reservemos en esta página!&url=${url}&hashtags=Grupo3,DigitalBooking,DB`}
                >
                  <FontAwesomeIcon className="icons twitter" icon={faTwitter} />
                </a>
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=[${url}]`}
                >
                  <FontAwesomeIcon
                    className="icons facebook"
                    icon={faFacebook}
                  />
                </a>
                <a
                  target="_blank"
                  href={`https://www.facebook.com/dialog/send?link=${url}`}
                >
                  <FontAwesomeIcon
                    className="icons facebookMessenger"
                    icon={faFacebookMessenger}
                  />{" "}
                </a>
              </div>
            </Modal>
          </li>
        </Ul>
      </Redes>
    </FooterElement>
  );
}

export default Footer;
