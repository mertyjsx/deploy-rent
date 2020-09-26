import React, { useState } from "react";
import "./navbarBottom.css";
import Logo from "../../assets/svg/navbarLogo.svg";
import Ring from "../../assets/svg/ring.svg";
import Gift from "../../assets/svg/gift.svg";
import CartDropdown from "../CartDropDown/CartDropDown.jsx";

const NavbarBottom = () => {
  const [hidden, setHidden] = useState(true);
  const setActiveLink = (e) => {
    // easier for me, you can change with getElementById or getElementByClassName
    const links = document.getElementsByTagName("li");

    Array.from(links).forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  };
  const toogleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div>
      <div className="navbarBottomContainer  center-xs visibleAfterMd">
        <div className="container container-60 center-xs between-xs row h-100">
          <ul className="col-md-10 col-lg-10 row">
            <img src={Logo} className="logo-position" alt=""></img>
            <li className="center-xs box-large" onClick={setActiveLink}>
              Kiralama Kampanyaları
            </li>
            <li
              className="center-xs box-large active"
              onClick={setActiveLink}
            >
              Araçlarımız
            </li>
            <li className="center-xs box-large" onClick={setActiveLink}>
              Filo
            </li>
            <li className="center-xs box-large" onClick={setActiveLink}>
              İletişim
            </li>
            <li className="center-xs box-large" onClick={setActiveLink}>
              Ofisler
            </li>
          </ul>
          <div className=" center-xs">
            <img
              src={Gift}
              className="logo-position"
              alt=""
              style={{ cursor: "pointer" }}
              onClick={toogleHidden}
            ></img>
            <img
              src={Ring}
              alt=""
              style={{ cursor: "pointer" }}
              onClick={toogleHidden}
            ></img>
          </div>
        </div>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
export default NavbarBottom;
