import React from "react";
import "./CarCard.style.css";
import fuel from "../../assets/svg/fuel.svg";
import direksiyon from "../../assets/svg/direksiyon.svg";
import ondenaraba from "../../assets/svg/ondenaraba.svg";
import vites from "../../assets/svg/vites.svg";

function CarCard({ name, driverAge, licenceYear, price, image }) {
  return (
    <div className="col-lg-3 col-md-4 col-xs-12">
      <div className="car-card">
        <img src={image} />
        <div className="car-card-details">
          <h2>{name}</h2>
          <div className="car-card-driver">
            <p>
              <strong>Min. Sürücü Yaşı: </strong>
              <small>{driverAge}</small>
            </p>
            <p className="car-card-driver-age">
              <strong>Min. Ehliyet Yılı: </strong>
              <small>{licenceYear}</small>
            </p>
          </div>

          <div className="car-card-options">
            <div className="car-card-option fuel">
              <img src={fuel} />
            </div>
            <div className="car-card-option">
              <img src={vites} />
            </div>
            <div className="car-card-option">
              <img src={ondenaraba} />
            </div>
            <div className="car-card-option">
              <img src={direksiyon} />
            </div>
          </div>

          <div className="car-card-price">
            <div className="price">
              <p>Günlük Fiyat</p>
              <strong>{price}₺</strong>
            </div>
            <button>Hemen Kirala</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
