import React from 'react';
import './Ingredients.css'
const Ingredients = (props) => {
    return (
        <div className='table'>
            <div className='ingredients'>
                <h3 className='heading'>Ingredients</h3>
                {props.ingredients.map((ingredient, index) => {
                    return (
                        <div key={index}>
                            <p className='items'>{ingredient.text}</p>
                            <div className='underline'></div>
                        </div>
                    )
                })}
            </div>
            <div className='weights'>
                <h3 className='heading'>Weights (g)</h3>
                {props.ingredients.map((ingredient, index) => {
                    return (
                        <div key={index}>
                            <p className='items'>{Math.round(ingredient.weight)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Ingredients;