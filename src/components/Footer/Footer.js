import React from "react";

import facebookLogo from "../../assets/svg/facebook.svg";
import twitterLogo from "../../assets/svg/twitter.svg";
import instagramLogo from "../../assets/svg/instagram.svg";
import whatsappLogo from "../../assets/svg/whatsapp.svg";
import youtubeLogo from "../../assets/svg/youtube.svg";
import linkedinLogo from "../../assets/svg/linkedin.svg";
import mastercardLogo from "../../assets/svg/mastercard.svg";
import maestroLogo from "../../assets/svg/maestro.svg";
import visaLogo from "../../assets/svg/visa.svg";
import companyLogo from "../../assets/svg/company.svg";
import applestore from "../../assets/svg/applestore.svg";
import googleplay from "../../assets/svg/googleplay.svg";

import "./Footer.style.css";

function Footer() {
  return (
    <div className="footer row">
      <div className="footer-top row">
        <div className="footer-top-left row">
          <img src={companyLogo} />
          <small>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit. In nec nisi
            nisl. Integer id ex purus. Suspendisse potenti. Cras odio metus,
            vehicula at pharetra ac, mattis at lectus.
          </small>
          <div className="footer-top-left-logos row">
            <img src={facebookLogo} />
            <img src={instagramLogo} />
            <img src={twitterLogo} />
            <img src={whatsappLogo} />
            <img src={youtubeLogo} />
            <img src={linkedinLogo} />
          </div>
          <div className="footer-top-left-logos footer-top-left-payment row">
            <img src={mastercardLogo} />
            <img src={maestroLogo} />
            <img src={visaLogo} />
          </div>
        </div>
        <div className="footer-top-right row">
          <strong>Lorem ipsum</strong>
          <small>Nasıl Üye Olabilirim?</small>
          <small>Nasıl İlan Verebilirim?</small>
          <small>Güvenlik İpuçları</small>
          <small>Araç</small>
          <small>Audi</small>
        </div>
        <div className="footer-top-right row">
          <strong>Lorem ipsum</strong>
          <small>Mercedes</small>
          <small>Audi</small>
          <small>Volkswagen</small>
          <small>Fiat</small>
        </div>
        <div className="footer-top-right row">
          <strong>Lorem ipsum</strong>
          <small>Gizlilik Politikası</small>
          <small>Kullanıcı Sözleşmesi</small>
          <small>Kullanım Koşulları</small>
          <small>Kişisel Verilerin Korunması</small>
          <small>Veriler</small>
        </div>
        <div className="footer-top-right-mobil row">
          <strong>Mobil Application</strong>
          <div className="footer-top-right-mobil-appstores">
            <img src={applestore} />
          </div>
        </div>
      </div>
      <div className="footer-bottom row">
        <div className="footer-bottom-top row">
          <small>SSS</small>
          <small>Yardım Merkezi</small>
          <small>Bize Ulaşın</small>
          <small>Sorumluluk Reddi</small>
          <small>Hizmet Şartları</small>
          <small>Gizlilik Politikası</small>
        </div>
        <div className="footer-bottom-bottom row">
          <p>KKTC.COM | All rights reserved 2020</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
