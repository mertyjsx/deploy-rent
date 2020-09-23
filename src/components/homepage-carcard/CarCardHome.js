import React from "react";
import CarCard from "../CarCard/CarCard";
import car1 from "../../assets/svg/car1.svg";
import car2 from "../../assets/svg/car2.svg";
import car3 from "../../assets/svg/car3.svg";
import car4 from "../../assets/svg/car4.svg";

const cars = [
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
];

function CarCardHome() {
  return (
    <div className="containerCenter row">
      {cars.map((car) => (
        <CarCard
          price={car.price}
          name={car.name}
          driverAge={car.driverAge}
          licenceYear={car.licenceYear}
          image={car.image}
        />
      ))}
    </div>
  );
}

export default CarCardHome;
