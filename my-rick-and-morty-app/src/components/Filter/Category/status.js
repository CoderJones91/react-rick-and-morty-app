import React from "react";
import FilterBTN from "../FilterBTN";

const Status = () => {
    let status = ["Alive", "Dead", "Unknown"]
    return (
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Status
                </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    {status.map((items, index)=> (
                        <FilterBTN key={index} name="status" index={index} items={items}/>
                    ))}
                  
                </div>
            </div>
        </div>
    )
}

export default Status

