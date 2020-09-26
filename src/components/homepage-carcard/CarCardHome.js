import React from "react";
import CarCard from "../CarCard/CarCard";



function CarCardHome({cars}) {
  console.log(cars)
  return (

<div className="center-xs margin-top-3 margin-bottom-4">
    <div className="container containerCenter row">
      {cars?.map((car) => (
        <CarCard
          price={car.price}
          name={car.name}
          driverAge={car.driverAge}
          licenceYear={car.licenceYear}
          image={car.image}
        />
      ))}
    </div>
    </div>
  );
}

export default CarCardHome;
