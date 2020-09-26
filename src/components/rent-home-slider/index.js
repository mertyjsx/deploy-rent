import React, { Component } from "react";
import Slider from "react-slick";
import Item from "./sliderItems"
import Back from "../Arrows/back"
import Next from "../Arrows/next"
import toyota from "../../assets/svg/toyota.svg"
import bmw from "../../assets/svg/bmw.svg"
import audi from "../../assets/svg/auid.svg"
import wolk from "../../assets/svg/wolk.svg"
import TitleComponent from "../titleComponent"
import Cars from "../homepage-carcard/CarCardHome"
import car1 from "../../assets/svg/car1.svg";
import car2 from "../../assets/svg/car2.svg";
import car3 from "../../assets/svg/car3.svg";
import car4 from "../../assets/svg/car4.svg";

const cars={

  Renault : [
    {
      image: car1,
      price: "178,2",
      name: "2020 Renault Clio 0.9 Joy",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car2,
      price: "178,2",
      name: "2020 Renault Clio 0.9 Joy",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car3,
      price: "178,2",
      name: "2020 Renault Clio 0.9 Joy",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car4,
      price: "178,2",
      name: "2020 Renault Clio 0.9 Joy",
      driverAge: 21,
      licenceYear: 1,
    },
  ],
  Bmw:[
    {
      image: car2,
      price: "178,2",
      name: "bmw 1",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car1,
      price: "178,2",
      name: "bmw 2",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car3,
      price: "178,2",
      name: "bmw 3",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car4,
      price: "178,2",
      name: "bmw4",
      driverAge: 21,
      licenceYear: 1,
    },
  ],
  Audi:[
    {
      image: car1,
      price: "178,2",
      name: "audi",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car2,
      price: "178,2",
      name: "audi",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car4,
      price: "178,2",
      name: "audi",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car2,
      price: "178,2",
      name: "audi",
      driverAge: 21,
      licenceYear: 1,
    },
  ],
  Wolkswagen:[
    {
      image: car1,
      price: "120,2",
      name: "Wolkswagen",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car1,
      price: "120,2",
      name: "Wolkswagen",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car4,
      price: "120,2",
      name: "Wolkswagen",
      driverAge: 21,
      licenceYear: 1,
    },
    {
      image: car3,
      price: "120,2",
      name: "Wolkswagen",
      driverAge: 21,
      licenceYear: 1,
    },
  ],
  
  

}





export default class MultipleItems extends Component {

constructor(){
super()
this.state={

  selected:"Renault"
}

}

changeCar=(car)=>{

this.setState({selected:car})

}




  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      rows:1,
      vertical: false,
      verticalSwiping: false,
    nextArrow: <Next />,
    variableWidth: true,
    prevArrow: <Back/>,
    responsive: [ {
      breakpoint: 1024,
      settings: {
        rows:1,
        className: "slider variable-width",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        vertical: false,
        verticalSwiping: false,
      
      }}
    ]
  
    };


    console.log(cars[this.state.selected])




    return (
[
  <div className="containerCenter margin-top-6 margin-bottom-3 padding-3">
<TitleComponent
title="Popüler Araçlarımız"
p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
/></div>,


      <div className=" center-xs w-100 margin-bottom-3 margin-top-3">
      
        <div className="container-50">
        <Slider  {...settings} >
        <Item change={this.changeCar} logo={toyota} selected={this.state.selected==="Renault"} brand={"Renault"} ></Item>
      
      <Item change={this.changeCar} logo={bmw} selected={this.state.selected==="Bmw"} brand={"Bmw"}></Item>
     
    
        <Item change={this.changeCar} logo={audi} selected={this.state.selected==="Audi"} brand={"Audi"}></Item>
      
      
        <Item change={this.changeCar} logo={wolk} selected={this.state.selected==="Wolkswagen"} brand={"Wolkswagen"}></Item>
       
        </Slider>
   
        </div>
        
      </div>,
      <Cars cars={cars[this.state.selected]}></Cars>
 ] );
  }
}