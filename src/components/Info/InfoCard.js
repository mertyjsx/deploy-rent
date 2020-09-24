import React from "react";


import "./InfoCard.style.css";

function Info({title,Svg,color,p}) {
  console.log(Svg)
  return (
    <div className="infocard containerCenter">
      <div className={`${color?"logoContainerColor box center-xs shadow":"logoContainer box center-xs shadow"}`}> 
   {Svg}

      </div>
      <h2 className="font-1 center-xs margin-top-1 h2-responsive">{title}</h2>
      <p className="font-half center-xs margin-top-1 p-width">{p} </p>
    </div>
  );
}

export default Info;
