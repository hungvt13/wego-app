import Api from './baseApi';

const categoryURL = import.meta.env.VITE_FOOD_CATEGORIES_URL;
const listURL = import.meta.env.VITE_FOOD_LIST_URL;

const getFoodCategories = () => {
  return Api.get(categoryURL);
};

const getFoodList = () => {
  return Api.get(listURL);
};

export {
  getFoodCategories,
  getFoodList,
};