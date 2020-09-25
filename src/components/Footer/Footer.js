import React from "react";

import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/svg/instagram.svg";
import { ReactComponent as WhatsappSvg } from "../../assets/svg/whatsapp.svg";
import { ReactComponent as YoutubeSvg } from "../../assets/svg/youtube.svg";
import { ReactComponent as LinkInSvg } from "../../assets/svg/linkedin.svg";
import mastercardLogo from "../../assets/svg/mastercard.svg";
import maestroLogo from "../../assets/svg/maestro.svg";
import visaLogo from "../../assets/svg/visa.svg";
import companyLogo from "../../assets/svg/company.svg";
import applestore from "../../assets/svg/applestore.svg";
import googleplay from "../../assets/svg/googleplay.svg";
import { ReactComponent as TwitterSvg } from "../../assets/svg/twitter.svg";

import "./Footer.style.css";

function Footer() {
  return (
    <div className="footer row margin-top-4">
      <div className="footer-top row">
        <div className="footer-top-left row">
          <img src={companyLogo} />
          <small>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit. In nec nisi
            nisl. Integer id ex purus. Suspendisse potenti. Cras odio metus,
            vehicula at pharetra ac, mattis at lectus.
          </small>
          <div className="footer-top-left-logos row">
            <FacebookSvg
              className="footer-top-left-logos-img"
              title="Facebook"
            />
            <InstagramSvg
              className="footer-top-left-logos-img"
              title="Instagram"
            />
            <TwitterSvg className="footer-top-left-logos-img" title="Twitter" />
            <WhatsappSvg
              className="footer-top-left-logos-img"
              title="Whatsapp"
            />
            <YoutubeSvg className="footer-top-left-logos-img" title="Youtube" />
            <LinkInSvg className="footer-top-left-logos-img" title="LinkedIn" />
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
            <img src={googleplay} title="Google Play" alt="" />
            <img src={applestore} title="Apple Store" alt="" />
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
