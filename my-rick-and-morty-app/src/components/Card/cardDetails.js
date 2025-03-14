import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div class="container d-flex justify-content-center text-white mb-5 mt-5">
      <div class="d-flex flex-column gap-3">
        <h1 class="text-center">{name}</h1>

        <img class="img-fluid rounded" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div class="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div class=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div class="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div class="content">
          <div class="">
            <span class="fw-bold">Gender : </span>
            {gender}
          </div>
          <div class="">
            <span class="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div class="">
            <span class="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div class="">
            <span class="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;