const filterRestaurantsByCategory = (restaurantsArray, categoryName) => {
  const categoryRegex = new RegExp(`^${categoryName}$`, "i");
  return restaurantsArray.filter(({ categories }) =>
    categories.some((category) => categoryRegex.test(category))
  );
};

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

const sortRestaurantsByRating = (restaurantsArray) => {
  const sortedArray = [...restaurantsArray].sort((a, b) => {
    return getRestaurantAverageRating(b) - getRestaurantAverageRating(a);
  });
  return sortedArray;
};

export {
  filterRestaurantsByCategory,
  getRestaurantAverageRating,
  sortRestaurantsByRating,
};
