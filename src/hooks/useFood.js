import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// Store
import foodSelector, { foodActions} from '../state/food';

// Utils
import { transformFoodList } from '../service/foodUtils';

// Constants
import { LOADING_STATE } from '../state/constants';
// items per page: 25
const PAGE_OFFSET = 9;
const PAGE_OFFSET_STEP = 9;

const useFood = () => {
  const dispatch = useDispatch();

  // global state
  const categoryList = useSelector(foodSelector.foodCategory, shallowEqual);
  const foodListRaw = useSelector(foodSelector.foodListRaw, shallowEqual);
  const foodList = useSelector(foodSelector.foodList, shallowEqual);
  const foodListStatus = useSelector(foodSelector.foodListStatus, shallowEqual);
  const foodCategoryStatus = useSelector(foodSelector.foodCategoryStatus, shallowEqual);
  const transformedFoodList = transformFoodList(foodList);

  const isLoadingList = foodListStatus === LOADING_STATE.LOADING;
  const isLoadingCategory = foodCategoryStatus === LOADING_STATE.LOADING;

  // local state
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [itemCount, setItemCount] = useState(PAGE_OFFSET);
  const [isMoreItems, setIsMoreItems] = useState(false);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleClickCategory = (id) => {
    setCategory(id);
  };

  const handleShowMore = () => {
    setItemCount((prevState) => prevState + PAGE_OFFSET_STEP);
  };

  // filter out data based on criteria
  useEffect(() => {
    const filteredList = foodListRaw.filter((food) => {
      if (search.length !== 0 && !food.name.toLocaleLowerCase().match(new RegExp(search, 'g'))) return false;
      if (category.length !== 0 && category !== food.categoryId) return false;

      return true;
    });

    // display Show More button if list is not fully displayed
    setIsMoreItems((itemCount < filteredList.length) ? true : false);

    dispatch(foodActions.changeFoodList(filteredList.slice(0, itemCount)));
  }, [itemCount, search, category, foodListRaw]);

  // handle fetch initial data
  useEffect(() => {
    dispatch(foodActions.fetchCategory());
    dispatch(foodActions.fetchFood());
  }, []);


  return { 
    search, 
    category,
    categoryData: categoryList,
    handleClickCategory,
    handleSearchChange,
    isLoadingCategory,
    isLoadingList,
    foodListData: transformedFoodList,
    isMoreItems,
    handleShowMore,
    isPageLoading: isLoadingCategory || isLoadingList
  };
};

export default useFood;