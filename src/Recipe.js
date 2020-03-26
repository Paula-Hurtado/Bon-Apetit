import React from 'react';
import style from './recipe.module.css'
import './App.css'
import Like from './LikeButton.js'

const Recipe = ({title, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1> 
            <Like/>
            <ul>
                {ingredients.map(ingredient =>
                    <li>
                        {ingredient.text}
                    </li>    
                )} 
            </ul>
            <img src={image}/>
        </div>
    )
}

export default Recipe;
