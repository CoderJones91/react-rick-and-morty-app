import React from "react";
import Gender from "./Category/gender";
import Species from "./Category/species";
import Status from "./Category/status";

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  let clear = () => {
    setPageNumber("");
    setStatus("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-white text-decoration-underline mb-4"
      >
        Clear Filter
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber}></Status>
        <Gender setGender={setGender} setPageNumber={setPageNumber}></Gender>
        <Species
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
        ></Species>
      </div>
    </div>
  );
};

export default Filters;
