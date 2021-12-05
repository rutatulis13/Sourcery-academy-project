import React from "react";
import Category from "./Category/Category";
import ramen from "assets/RestaurantCategoriesIcons/ramen.svg";
// import pizza from "assets/RestaurantCategoriesIcons/pizza.svg";
// import pancakes from "assets/pancakes.svg";
// import salads from "assets/salads.svg";
// import sandwich from "assets/sandwich.svg";
// import burger from "assets/burger.svg";
// import sushi from "assets/sushi.svg";
// import soups from "assets/soups.svg";
// import kebab from "assets/kebab.svg";
// import brunch from "assets/brunch.svg";
// import sweets from "assets/sweets.svg";
// import grill from "assets/grill.svg";
import "./EatOutCategories.scss";

const EatOutCategories = () => {
  return (
    <div>
      <Category image={ramen} />
      {/* <Category title="Pizza" number="" image={pizza} altText="Pizza slice" />
        <Category
          image={pancakes}
          altText="Pile of pancakes"
        />
        <Category
          image={salads}
          altText="Plate of salads"
        />
        <Category
          image={sandwich}
          altText="Sandwich"
        />
        <Category image={burger} altText="Burger" />
        <Category
          image={sushi}
          altText="Four sushi rolls"
        />
        <Category
          image={soups}
          altText="Bowl of soup"
        />
        <Category image={kebab} altText="Kebab" />
        <Category
          image={brunch}
          altText="Two fried eggs"
        />
        <Category
          image={sweets}
          altText="Donut covered with chocolate"
        />
        <Category
          image={grill}
          altText="Two grilled meat skewers"
        /> */}
    </div>
  );
};

export default EatOutCategories;
