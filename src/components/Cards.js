import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ikivu.jpg"
              text="Explore the hidden beauty of Rubavu city"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/Kibuye.jpg"
              text="You want to refresh with quite waves of Kivu?"
              label="Relax"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/kcc.jpg"
              text="The famous egg KCC, enjoy the beauty of Kigali nights"
              label="City"
              path="/services"
            />
            <CardItem
              src="images/culture.jpg"
              text="Experience Rwandan Traditional Dance among other cultures"
              label="Culture"
              path="/products"
            />
            <CardItem
              src="images/green.jpg"
              text="1000 Green Hills"
              label="Environment"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
