import React from 'react';
import Ingredients from './Ingredients';
import './Modal.css';
import { useUserContext } from '../Context';

const Modal = (props) => {
    const { setFilters, setSelectedDiet, setSelectedDish, setSelectedMeal, setSelectedCuisine, setSelectedHealth } = useUserContext();

    const handleHealthClick = (value) => {
        props.setShowModal();
        let newF =  {
            cuisineType: null,
            diet: null,
            health: value,
            mealType: null,
            dishType: null
        };
        setSelectedDiet(newF['diet']);
        setSelectedDish(newF['dishType']);
        setSelectedMeal(newF['mealType']);
        setSelectedCuisine(newF['cuisineType']);
        setSelectedHealth(newF['health']);
        console.log(newF);
        setFilters(newF)
        props.searchFilter(newF);
    }
    const healthTags = (health) => {
        return (
            <div className='healthTags'>
                {health.map((item, index) => {
                    return (
                        <p className='indTag' onClick={() => handleHealthClick(item)}>#{item.toLowerCase()}&nbsp;</p>
                    )
                })}
            </div>
        )
    }
    return (
        <div className='modalContainer'>
        {props.showModal && (
            <div className='modal'>   
                <div className='closeModal'>
                    <button onClick={() => props.setShowModal()}><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className='modalContent'>
                    <div className='modalHeader' style={{ backgroundImage: `url(${props.img})` }}>
                        <div className='headerInfo'>
                            <h2>{props.label}</h2>
                            <p>{props.cuisine}</p>
                        </div>
                    </div>
                    <Ingredients ingredients={props.ingredients} />
                    {healthTags(props.health)}
                    <div className='redirectBtns'>
                        <a href={props.url} target="_blank" rel="noopener noreferrer">
                            <button>See More <i class="fa-solid fa-arrow-right-long"></i></button>
                        </a>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
};

export default Modal;
