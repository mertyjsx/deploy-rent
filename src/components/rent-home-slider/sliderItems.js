import React from 'react'
import "./a.css"
export default function sliderItems({logo,brand,selected,change}) {
    return (
        <div onClick={()=>change(brand)} className={`cursor box shadow ${!selected?'brandBox':"brandBox-selected"} center-xs margin-top-1 margin-bottom-1 margin-right-1`}>
            <img src={logo} className="margin-right-1"></img>
            <h2  className={` ${selected?'font-white':""} font-normal`}>{brand}</h2>
        </div>
    )
}
