import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "../components/recipes";
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = "d2015cf0";
  const APP_KEYS = "5cb774aba966f21157918f0bd0f97690";
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(exampleReq);
    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="Home">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search recipes"
        />
        <button className="search-button" type="submit">
          SEARCH
        </button>
      </form>
      {recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.recipe.label}
            label={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            healthLabels={recipe.recipe.healthLabels}
            digest={recipe.recipe.digest}
          />
        );
      })}
    </div>
  );
};

export default Home;
