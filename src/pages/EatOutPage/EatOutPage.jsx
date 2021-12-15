import React, { useState, useEffect } from "react";
import PageLayout from "components/PageLayout/PageLayout";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Category from "components/EatOutCategories/EatOutCategorySection/EatOutCategorySection";

const EatOutPage = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
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
      .then((categoryList) => {
        setCategoryList(categoryList.categories);
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
      .then((restaurantData) => {
        setRestaurantData(restaurantData.restaurants);
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
        restaurantData={restaurantData}
        categoryList={categoryList}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};

export default EatOutPage;
