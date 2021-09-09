import React from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";

const Recipe = ({
  key,
  label,
  calories,
  image,
  ingredients,
  url,
  healthLabels,
  digest,
}) => {
  return (
    <Link
      to={{
        pathname: `/recipe/${label}`,
        state: {
          label,
          calories,
          image,
          ingredients,
          healthLabels,
          digest,
          url,
        },
      }}
    >
      <div className="_recipes">
        <div className="img">
          <img className="_image" src={image} alt={image} />
        </div>
        <h1 className="_label">{label}</h1>
        <p className="_calories">Calories: {Math.floor(calories)}</p>
        <div className="_ingredients_box">
          <p className="_ingredients_tit">Ingredients</p>
          <ul className="_ingredients">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="ingredients_ing">
                {ingredient.text}
              </li>
            ))}
          </ul>
        </div>
        <a className="_url" href={url} target="_blank">
          URL: {url}
        </a>
      </div>
    </Link>
  );
};

export default Recipe;
