import React, { useState, useEffect } from "react";
import PageLayout from "components/PageLayout/PageLayout";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Category from "components/EatOutCategories/Category/Category";

const EatOutPage = () => {
  const [dataRestaurants, setDataRestaurants] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/categories.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((dataCategories) => {
        setDataCategories(dataCategories.categories);
      })

      .finally(() => {
        setIsLoading(false);
      });
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((dataRestaurants) => {
        setDataRestaurants(dataRestaurants.restaurants);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Breadcrumbs />
      <PageLayout title="Hungry? Find the best place!" />
      <Category
        dataRestaurants={dataRestaurants}
        dataCategories={dataCategories}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};

export default EatOutPage;
