import React, { useState } from 'react';
import Modal from './Modal';
import './Recipe.css'
import { useUserContext } from '../Context';

const Recipe = (props) => {
    const [showIngredients, setShowIngredients] = useState(false);

    const { setModalOpen, setFilters, setSelectedDiet, setSelectedDish, setSelectedMeal, setSelectedCuisine, setSelectedHealth } = useUserContext();

    function capitalizeFirstLetter(word, sep) {
        let words = word.split(sep);
        let result = '';
        for (let i = 0; i < words.length; i++) {
            result = result + words[i].charAt(0).toUpperCase() + words[i].slice(1) + sep;
        }
        return result.slice(0, result.length - 1);
    }
    const handleFilterClick = (filterName, value) => {
        let newF =  {
            cuisineType: null,
            diet: null,
            health: null,
            mealType: null,
            dishType: null
        };
        newF[filterName] = value;
        setSelectedDiet(newF['diet']);
        setSelectedDish(newF['dishType']);
        setSelectedMeal(newF['mealType']);
        setSelectedCuisine(newF['cuisineType']);
        setSelectedHealth(newF['health']);
        console.log(newF);
        setFilters(newF)
        props.searchFilter(newF);
    }
    function formatFilters(list, filterName) {
         return (
            list.map((item, index) => {
                let sep = ' ';
                if (item.includes('-')) {
                    sep = '-';
                } else if (item.includes('/')) {
                    sep = '/';
                } 
                return (
                    <p onClick={() => handleFilterClick(filterName, item)}key={item} className={`${filterName} ${index}`}>{capitalizeFirstLetter(item, sep)}</p>
                );
            })
        );
    }
    const handleIngredientsBtn = () => {
        setShowIngredients(true);
        setModalOpen(true);
    }
    const closeIngredients = () => {
        setShowIngredients(false);
        setModalOpen(false);
    }
    //{`recipeAllContainer ${modalOpen ? 'selected' : ''}`}
    return (
        <div>
            <div className='recipeAllContainer'>
                <div className='recipeCardCenter'>
                    <p className='cuisineType'>{formatFilters(props.cuisineType)}</p>
                    <img src={props.image} alt={props.label}></img>
                    <h3>{props.label}</h3>
                    <div className='recipeFilters'>
                        {formatFilters(props.dishType, 'dishType')}
                        {/* <button onClick={() => setShowHealth(!showHealth)}>Health</button> */}
                        {/* {showHealth && formatFilters(props.healthLabel)} */}
                        {formatFilters(props.dietLabel, 'diet')}
                        {formatFilters(props.mealType, 'mealType')}
                    </div>
                </div>
                <div className='moreBtns'>
                    <button className='ingredientBtn' onClick={() => handleIngredientsBtn()}>Ingredients</button>
                    <a href={props.url} target="_blank" rel="noopener noreferrer">
                        <button className='fullRecipeBtn'>See Complete Recipe</button>
                    </a>
                </div>`
            </div>
            <Modal 
                label={props.label}
                cuisine={formatFilters(props.cuisineType)}
                health={props.healthLabel}
                img={props.image}
                url={props.url}
                ingredients={props.ingredients}
                showModal={showIngredients}
                setShowModal={closeIngredients}
                searchFilter={props.searchFilter}
            />
        </div>
    )
}

export default Recipe;