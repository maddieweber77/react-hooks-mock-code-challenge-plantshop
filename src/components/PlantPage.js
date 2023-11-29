import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  let [plants, setPlants] = useState([])
  const [searchTerm, setSearch] =useState("")

  useEffect(()=> {
    fetch('http://localhost:6001/plants')
    .then((r)=> r.json())
    .then((plantData) => setPlants(plantData))
  },[]
  )

  function submitNewPlant(newPlant) {
    let plants = [...plants, newPlant]
    setPlants(plants)
    
  }

  function onSearch(term) {
    setSearch(term)
  }


function filterDeletePlant(deletedPlant) {
  let plants =
    plants.filter((plant) => plant.id !== deletedPlant.id);
    return plants;
}


  plants = plants.filter
  (plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  
  return (
    <main>
      <NewPlantForm plants={plants} submitNewPlant={submitNewPlant} searchTerm={searchTerm}/>
      <Search searchTerm={searchTerm} onSearch={onSearch}/>
      <PlantList plants={plants} searchTerm={searchTerm} filterDeletePlant={filterDeletePlant}/>
    </main>
  );
}

export default PlantPage;
