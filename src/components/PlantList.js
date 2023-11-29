import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} image={plant.image} name={plant.name} price={plant.price} searchTerm={searchTerm}></PlantCard>
      ))}
    </ul>
  );
}

export default PlantList;