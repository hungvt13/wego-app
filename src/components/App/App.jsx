import './App.css';

// Components
import Input from '../Input';
import Tabs from '../Tabs';
import Button from '../Button';
import CardList from '../CardList';

// Hooks
import useFood from '../../hooks/useFood';

function App() {
  const useFoodHook = useFood();
  
  return (
    <div className="app-container">
      <div>
        <Input 
          placeholder='Enter restaurant name...'
          value={useFoodHook.search}
          onChange={useFoodHook.handleSearchChange}
          disabled={useFoodHook.isPageLoading}
        />
      </div>
      <div>
        {
          !useFoodHook.isLoadingCategory && (
            <Tabs list={useFoodHook.categoryData} onClick={useFoodHook.handleClickCategory}/>
          )
        }
      </div>
      <div>
        <CardList list={useFoodHook.foodListData} isLoading={useFoodHook.isLoadingList} />
      </div>
      {
        useFoodHook.isMoreItems && (
          <div id="show-more-section">
            <Button onClick={useFoodHook.handleShowMore}>
              <strong>+ Show More</strong>
            </Button>
          </div>
        )
      }
    </div>
  );
}

export default App;
