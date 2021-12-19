import { EAT_OUT_CATEGORIES } from "components/EatOutCategories/constants.js";

const transformRestaurantCategories = (categoryList) => {
  const categoryListLowerCase = categoryList.map((categoryListItem) =>
    categoryListItem.toLowerCase()
  );

  const categoryListFiltered = Object.values(
    EAT_OUT_CATEGORIES
  ).filter((categoryName) => categoryListLowerCase.includes(categoryName));
  return categoryListFiltered;
};

export { transformRestaurantCategories };
