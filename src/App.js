import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./layout/navbar";
import Info from "./layout/InfoLayout";
import HomepageSelect from "./components/homepage-select/container";
import Boxes from "./components/home-page-boxes/index";
import Slider from "./components/rent-home-slider/index";
import CarCardHome from "./components/homepage-carcard/CarCardHome";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      <HomepageSelect></HomepageSelect>
      <Info></Info>
      <Boxes></Boxes>
     
      <CarCardHome></CarCardHome>
      <Footer></Footer>
    </div>
  );
}

export default App;
