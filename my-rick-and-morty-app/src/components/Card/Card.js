import React from "react";
import {Link} from "react-router-dom"
import styles from "./Card.module.scss";

var emojimad = String.fromCodePoint(0x1F624)
var emojisad = String.fromCodePoint(0x1F61E)

const Card = ({ results, page }) => {
  let display;
  const element = `${emojisad}  No Characters Found ${emojimad}`;

  // Create a div element and apply CSS classes
  const el = Object.assign(document.createElement('div'), { className: 'message' });
  el.textContent = element;
  el.classList.add("my-text-class");

  if (results) {
      display = results.map((result, index) => (
          <div key={index} className="result-card">
              {result}
          </div>
      ));
  } else {
      display = <div className="no-results">{element}</div>;
  }

    if (results) {
        display = results.map((x) => {
        let { id, image, name, status, location } = x;
      
        
          return (
            
            <Link to ={`${page}${id}`}
            className={`${styles.card} col-lg-3 col-md-3 col-sm-5 col-6 mb-4 position-relative text-dark text-decoration-none`}
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
              <div className="fs-5 fw-bold mb-3">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </Link>
          
        );
      });
      }


    return <>{display}</>;
}

export default Card;



