import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { filterRestaurantsByCategory } from "utils/restaurants";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import "./EatOutCategoryPage.scss";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import PageLayout from "components/PageLayout/PageLayout";
import Grid from "components/Grid/Grid";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";

const EatOutCategoryPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { categoriesData, restaurantsData } = useContext(RestaurantsContext);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    if (
      Array.isArray(categoriesData) &&
      categoriesData.length > 0 &&
      restaurantsData.length > 0 &&
      params.categoryName
    ) {
      const categoryRegex = new RegExp(`^${params.categoryName}$`, "i");
      const isValidCategory = categoriesData.some((category) =>
        categoryRegex.test(category)
      );
      if (isValidCategory) {
        setFilteredRestaurants(
          filterRestaurantsByCategory(restaurantsData, params.categoryName)
        );
      } else {
        navigate("/404");
      }
    }
  }, [categoriesData, restaurantsData, navigate, params]);

  return (
    restaurantsData && (
      <React.Fragment>
        <div className="eat-out-category-breadcrumbs">
          <Breadcrumbs />
        </div>
        <PageLayout
          title={`The best places for the ${params.categoryName.toUpperCase()}!`}
        >
          <div className="eat-out-category-content">
            <Grid breakpointCols={[1, 1, 2, 3, 3]}>
              {filteredRestaurants.map((restaurant) => {
                return (
                  <RestaurantCard
                    large
                    key={restaurant.id}
                    restaurant={restaurant}
                  />
                );
              })}
            </Grid>
          </div>
        </PageLayout>
      </React.Fragment>
    )
  );
};

export default EatOutCategoryPage;
