import React from 'react';
import FilterList from './FilterLists';
import cuisineTypes from '../FilterTypes/CuisineTypes';
import dietParameters from '../FilterTypes/Diet';
import healthParameters from '../FilterTypes/Health';
import mealTypes from '../FilterTypes/Meal';
import dishTypes from '../FilterTypes/DishType';
import { useUserContext } from '../Context';
import './Filter.css';

const Filter = ({ searchFilter }) => {
    

    const { setFilters, selectedCuisine, selectedDiet, selectedDish, selectedHealth, selectedMeal,
            setSelectedCuisine, setSelectedDiet, setSelectedDish, setSelectedHealth, setSelectedMeal } = useUserContext();

    // useEffect(() => {
    //     setSelectedCuisine('asian');
    // }, []);

    const onSearch = () => {
        const newF =  {
            cuisineType: selectedCuisine,
            diet: selectedDiet,
            health: selectedHealth,
            mealType: selectedMeal,
            dishType: selectedDish
        };
        setFilters(newF)
        searchFilter(newF);
    }

    const clearAllFilters = () => {
        document.getElementById('cuisineType-dropdown').value = '';
        document.getElementById('dishType-dropdown').value = '';
        document.getElementById('mealType-dropdown').value = '';
        document.getElementById('dietType-dropdown').value = '';
        document.getElementById('healthType-dropdown').value = '';
        const newF =  {
            cuisineType: null,
            diet: null,
            health: null,
            mealType: null,
            dishType: null
        };
        setSelectedCuisine(null);
        setSelectedDish(null);
        setSelectedDiet(null);
        setSelectedHealth(null);
        setSelectedMeal(null);
        setFilters((prevF) => {
            return newF;
        });
    }

    return (
        <div>
            <div className='centerText'>
                <h2>Personalize your experience!</h2>
            </div>
            <div className='filters'>
                <div className='indFilter'>
                    <FilterList 
                        name='Cuisine'
                        list={cuisineTypes}
                        setValue={setSelectedCuisine}
                        value={selectedCuisine}
                        id='cuisineType-dropdown'
                    />
                </div>
                <div className='indFilter'>
                    <FilterList 
                        name='Dish'
                        list={dishTypes}
                        setValue={setSelectedDish}
                        value={selectedDish}
                        id='dishType-dropdown'
                        filterName='dishType'
                    />
                </div>
                <div className='indFilter'>
                    <FilterList 
                        name='Meal'
                        list={mealTypes}
                        setValue={setSelectedMeal}
                        value={selectedMeal}
                        id='mealType-dropdown'
                    />
                </div>
                <div className='indFilter'>
                    <FilterList 
                        name='Diet'
                        list={dietParameters}
                        setValue={setSelectedDiet}
                        value={selectedDiet}
                        id='dietType-dropdown'
                    />
                </div>
                <div className='indFilter'>
                    <FilterList 
                        name='Health'
                        list={healthParameters}
                        setValue={setSelectedHealth}
                        value={selectedHealth}
                        id='healthType-dropdown'
                    />
                </div>
            </div>
            <div className='modBtns'>
                <button className='filterBtns' onClick={() => clearAllFilters()}>Clear</button>
                <button className='filterBtns' onClick={() => onSearch()}>Customize!</button>
            </div>
            
            
        </div>
    )
}

export default Filter;