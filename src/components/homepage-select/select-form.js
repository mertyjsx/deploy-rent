import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowRight from "../../assets/svg/arrow-right.svg";
export default function SelectForm() {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      <select className={checked ? "checked-input" : "select-input"}>
        <option value="grapefruit">Teslim alınacak konum</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      {checked ? (
        <select className={checked ? "checked-input" : "select-input"}>
          <option value="grapefruit">Teslim edilecek konum</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      ) : null}
      <div className="row center-xs between-xs margin-bottom-1">
        <div className="col-xs-7 start-xs ">
          <DatePicker
            className="date-input "
            isClearable
            placeholderText="Alış tarihi"
          />
        </div>

        <div className="col-xs-4  end-xs">
          <DatePicker
            className="time-input "
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            placeholderText="Saat"
          />
        </div>
      </div>

      <div className="row center-xs between-xs ">
        <div className="col-xs-7 start-xs ">
          <DatePicker
            className="date-input "
            isClearable
            placeholderText="Alış tarihi"
          />
        </div>

        <div className="col-xs-4 end-xs">
          <DatePicker
            className="time-input  "
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            placeholderText="Saat"
          />
        </div>
      </div>

      <div className="row between-xs margin-top-2 padding-left-1">
        <div className="row center-xs  ">
          <input
            type="checkbox"
            className="margin-right-1 "
            onChange={handleChange}
          />
          <p>Aracı farklı yerde teslim edeceğim.</p>
        </div>
        <div className="rent-button center-xs row xs-margin-top-1">
          Arabanı Seç
          <img
            className="margin-left-1 center-xs padding-top-half"
            src={ArrowRight}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
