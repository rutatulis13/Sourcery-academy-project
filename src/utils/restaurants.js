const getRestaurantAverageRating = (restaurantObj) => {
  let result = 0;
  if (typeof restaurantObj === "object" && restaurantObj?.reviews?.length > 0) {
    restaurantObj.reviews.forEach((value) => {
      result += value.rating;
    });
    result /= restaurantObj.reviews.length;
  }
  return result;
};

export { getRestaurantAverageRating };
