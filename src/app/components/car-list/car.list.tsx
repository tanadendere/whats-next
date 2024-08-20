import React from "react";

const carList: Car[] = await fetch("http://localhost:4000/cars", {
  next: { revalidate: 30 },
}).then((res) => res.json());
interface Car {
  id: number;
  make: string;
  model: string;
  owner: string;
  registration: string;
}

async function CarList() {
  return (
    <ul>
      {carList.map((car) => (
        <li className="bg-blue-200 p-5 mx-6 txt-block" key={car.id}>
          <p>Owner: {car.owner}</p>
          <p>Model: {car.model}</p>
          <p>Registration: {car.registration}</p>
        </li>
      ))}
    </ul>
  );
}

export default CarList;
