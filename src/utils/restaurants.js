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

const transformRestaurantCategories = (categoryList) => {
  const categoryListLowerCase = categoryList.map((categoryListItem) =>
    categoryListItem.toLowerCase()
  );

  return categoryListLowerCase;
};

export { getRestaurantAverageRating, transformRestaurantCategories };
