import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import PageLayout from "components/PageLayout/PageLayout";
import Grid from "components/Grid/Grid";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";

const EatOutCategoryPage = () => {
  const params = useParams();
  const { restaurantsData } = useContext(RestaurantsContext);
  // TODO: check if params.categoryName is one of provided categories in categories api
  // and get a list of restaurants in this category, redirect to 404 otherwise
  return (
    restaurantsData && (
      <React.Fragment>
        <Breadcrumbs />
        <PageLayout
          title={`The best places for the ${params.categoryName.toUpperCase()}!`}
        >
          <Grid breakpointCols={[1, 1, 2, 3, 3]}>
            {restaurantsData.map((restaurant) => {
              return (
                <RestaurantCard
                  large
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              );
            })}
          </Grid>
        </PageLayout>
      </React.Fragment>
    )
  );
};

export default EatOutCategoryPage;
