 import { TAG_TYPES } from '../components/Tag/constants';
 
 /**
 * Populate tags for each food item
 * 
 * @param {Array} data 
 * @returns Array
 */
const getFoodTags = (data) => {
  const tagArr = [];

  if (!!data['rating'] === true) {
    tagArr.push({ type: TAG_TYPES.RATING, content: data['rating'] });
  }

  if (!!data['minCookTime'] && !!data['maxCookTime']) {
    tagArr.push({ type: TAG_TYPES.TIME, content: `${data['minCookTime']}-${data['maxCookTime']}` });
  }

  if (!!data['isNew'] === true) {
    tagArr.push({ type: TAG_TYPES.NEW });
  }

  return tagArr;
};

/**
 * Transform data from API into usable display data for food list
 * 
 * @param {Array} data 
 * @returns Array
 */
export const transformFoodList = (data) => {
  if (!!data === false) return [];

  return data.map((item) => {
    const { id, name, categoryId, promotion, imageUrl, ...rest} = item;

    return {
      id,
      title: name,
      categoryId,
      iconType: promotion,
      img: imageUrl,
      tags: getFoodTags(rest)
    };
  });
};