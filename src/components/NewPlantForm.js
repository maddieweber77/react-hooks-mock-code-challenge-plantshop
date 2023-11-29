import React, {useState, useEffect} from "react";

function NewPlantForm({submitNewPlant}) {
  const [name, setName] = useState("");;
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  //learn this
  function NewPlantSubmit(e) {
    e.preventDefault();
    console.log({name, image, price})
    let newPlant= {name, image, price}
    
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        'Content-Type' : "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then((r)=> r.json())
    .then((newplant) => submitNewPlant(newplant))
  }

  


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* must add submit option on form, not on button! */}
      <form onSubmit={NewPlantSubmit}>
        <input type="text" 
        value={name}
        placeholder="Plant name"
        onChange={(e)=> setName(e.target.value)} />

        <input type="text" 
        value={image} 
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)} />

        <input type="number" 
        value={price}
        name="price" 
        step="0.01" 
        placeholder="Price" 
        onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
