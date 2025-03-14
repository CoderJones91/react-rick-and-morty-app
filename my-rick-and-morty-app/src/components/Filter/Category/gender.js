import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({setGender, setPageNumber }) => {
  let genders = ["Male", "Female", "Genderless", "Unknown"]
    return (
        <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Gender
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body d-flex flex-wrap gap-3">
        {genders.map((items, index)=> (
          <FilterBTN
          task={setGender} 
          setPageNumber={setPageNumber}
          key={index} name="gender" index={index} items={items}/>
        ))}
      </div>
    </div>
  </div>
    )
}

export default Gender