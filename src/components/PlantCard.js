import React, {useState} from "react";

function PlantCard({id, name, image, price, filterDeletePlant}) {

  const [stock, setStock] = useState(true)
  const [deletedPlant, setDeletedPlant] = useState("")

  function handleStock() {
    setStock(!stock)
    return stock;
  }

  function handleDelete() {
    console.log("Deleting plant with id:", id);
    
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((deletePlant) => filterDeletePlant(deletePlant))

  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;

//if I wanted to delete a plant
//add a button on plantcard to delete the plant
//delete request inside a function inside plant card
// add a function on button that calls a function in plantcard to fetch and do a delete request
  // this fetch must specify the ID of the plant
  // at the end of the fetch, it must call a new function in plant page
    // this function must filter the plant object to remove the plant that is being deleted
