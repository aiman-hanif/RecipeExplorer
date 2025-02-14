import React, { useEffect } from 'react';
import './App.css';
import Recipe from './Components/Recipe';
import Filter from './Components/Filter';
import { useUserContext } from './Context';
import searchRecipes from './Components/Search';

function App() {
  
  const { recipes, setRecipe, searchString, setSearchString, filters, modalOpen} = useUserContext();
  useEffect(() => {
    const appClass = document.querySelector('.app-background');
    if (modalOpen) {
      appClass.style.opacity = '1';
      document.body.classList.add('modalOpen');
    } else {
      appClass.style.opacity = '0';
      document.body.classList.remove('modalOpen');
    }
  
    return () => {
      appClass.style.opacity = '0';
      // Cleanup function to remove the class when the component unmounts
      document.body.classList.remove('modalOpen');
    };
  }, [modalOpen])
  // useEffect(() => {
  //   const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
  //   setRecipe(storedRecipes);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('recipes', JSON.stringify(recipes));
  // }, [recipes]);

  const handleSearch = (search, thisFilters) => {
    searchRecipes(search, thisFilters, setRecipe)
  }

  const handleInput = (search) => {
    setSearchString(search);
    handleSearch(search, filters);
  }
  const parseMeal = (list) => {
    return list.flatMap(item => item.includes('/') ? item.split('/') : item);
  }
  const clearSearch = () => {
    setSearchString("");
    handleSearch("", filters);
  }
  return (
    <div className="App">
      <div className='app-background'></div>
      <div className='header'>
          <h1>What's your favorite dish?</h1>
          <div className='inputDiv'>
            <input className='searchBox' value={searchString} placeholder='Search recipes here...' onChange={(e) => handleInput(e.target.value)} />
            <button className='clearSearch' onClick={() => clearSearch()}><i class="fa-solid fa-xmark"></i></button>
          </div>
      </div>
      <Filter searchFilter={(filters) => handleSearch(searchString, filters)}/>
      <div className='recipesContainer'>
        {recipes.map((item, index) => {
          return (
            <div className='recipeCard' key={index}>
              <Recipe 
                image={item.recipe.image}
                label={item.recipe.label}
                ingredients={item.recipe.ingredients}
                url={item.recipe.url}
                cuisineType={item.recipe.cuisineType}
                dishType={item.recipe.dishType}
                mealType={parseMeal(item.recipe.mealType)}
                dietLabel={item.recipe.dietLabels}
                healthLabel={item.recipe.healthLabels}
                searchFilter={(filters) => handleSearch(searchString, filters)}
              />
            </div>
            )
        })}
      </div>
    </div>
  );
}

export default App;