import React from "react";
import Category from "./Category/Category";
import Grid from "components/Grid/Grid";
import ramen from "assets/ramen.svg";
import pizza from "assets/pizza.svg";
import pancakes from "assets/pancakes.svg";
import salads from "assets/salads.svg";
import sandwich from "assets/sandwich.svg";
import burger from "assets/burger.svg";
import sushi from "assets/sushi.svg";
import soups from "assets/soups.svg";
import kebab from "assets/kebab.svg";
import brunch from "assets/brunch.svg";
import sweets from "assets/sweets.svg";
import grill from "assets/grill.svg";
import "./EatOutCategories.scss";

const EatOutCategories = () => {
  return (
    <section className="section-container">
      <h2 className="section-container_title">Categories</h2>
      <Grid breakpointCols={[1, 2, 3, 4]}>
        <Category
          title="Ramen"
          number=""
          image={ramen}
          altText="Bowl of ramen"
        />
        <Category title="Pizza" number="" image={pizza} altText="Pizza slice" />
        <Category
          title="Pancakes"
          image={pancakes}
          altText="Pile of pancakes"
        />
        <Category
          title="Salads"
          number=""
          image={salads}
          altText="Plate of salads"
        />
        <Category
          title="Sandwich"
          number=""
          image={sandwich}
          altText="Sandwich"
        />
        <Category title="Burger" number="" image={burger} altText="Burger" />
        <Category
          title="Sushi"
          number=""
          image={sushi}
          altText="Four sushi rolls"
        />
        <Category
          title="Soups"
          number=""
          image={soups}
          altText="Bowl of soup"
        />
        <Category title="Kebab" number="" image={kebab} altText="Kebab" />
        <Category
          title="Breakfast"
          number=""
          image={brunch}
          altText="Two fried eggs"
        />
        <Category
          title="Sweets"
          image={sweets}
          altText="Donut covered with chocolate"
        />
        <Category
          title="Grill"
          number=""
          image={grill}
          altText="Two grilled meat skewers"
        />
      </Grid>
    </section>
  );
};

export default EatOutCategories;
