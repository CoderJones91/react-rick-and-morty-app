import React from "react";
import styles from "./Card.module.scss";


var emojimad = String.fromCodePoint(0x1F624)
var emojisad = String.fromCodePoint(0x1F61E)


const element = document.getElementsByClassName("results");


const Card = ({ results }) => {

    let display;
    

    if (results) { }
    else {
        
        display = (emojisad + " No Characters Found" + "! " + emojimad)

    }

    if (results) {
        display = results.map((x) => {
        let { id, image, name, status, location } = x;
      
        
          return (
            
            <div
            className={`${styles.card} col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark `}
          >
            {
(() => {
  if (status === "Dead") {
    return (
      <div className={`${styles.badge} position-absolute badge bg-danger`}>
        {status}
      </div>
    );
  } else if (status === "Alive") {
    return (
      <div className={`${styles.badge} position-absolute badge bg-success`}>
        {status}
      </div>
    );
  } else {
    return (
      <div
        className={`${styles.badge} position-absolute badge bg-secondary`}
      >
        {status}
      </div>
    );
  }
})()}
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          
        );
      });
      }


    return <>{display}</>;
}

export default Card;






