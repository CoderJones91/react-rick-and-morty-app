import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({setSpecies, setPageNumber}) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
    return (
      
      <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body d-flex flex-wrap gap-3">
        {species.map((items, index)=> (
                        <FilterBTN
                         task={setSpecies}
                         setPageNumber={setPageNumber}
                         key={index} name="species" index={index} items={items}/>
                    ))}
        </div>
        </div>
        </div>
    )
}

export default Species