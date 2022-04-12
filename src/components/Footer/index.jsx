import React from "react";
import './styles.css';
import telegram from "./img/telegram.svg";
import whatsapp from "./img/whatsapp.svg";
import vk from "./img/vk.svg";


export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="contacts">
            <p className="contacts__title">Наши контакты:</p>
            <div className="contacts__action">
              <div>
                {" "}
                Телефон для связи:
                <a className="contacts__tel" href="tel:8(917)123-45-67">
                  8 (917) 123-45-67
                </a>
              </div>
              <div>
                {" "}
                Напишите нам:
                <a className="contacts__mail" href="mailto:remix@gmail.com">
                  remix@gmail.com
                </a>
              </div>
            </div>

            <div className="contacts__media"></div>
            <a className="contacts__media_tlg" href="/#">
              <img src={telegram} alt="telegram" className="media__icon" />
            </a>
            <a className="contacts__media_wts" href="/#">
              <img src={whatsapp} alt="whatsapp" className="media__icon" />
            </a>
            <a className="contacts__media_vk" href="/#">
              <img src={vk} alt="vk" className="media__icon" />
            </a>
          </div>
        </div>
        {/* <div>
       <p>© All rights reserved 2022</p>
         </div>  */}
      </footer>
    </>
  );
};