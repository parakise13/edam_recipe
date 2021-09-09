import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <div className="_recipes_detail">
          <div className="label_ingBox">
            <div className="img_detail">
              <img
                className="_image_detail"
                src={location.state.image}
                alt={location.state.image}
              />
            </div>
            <div className="rightBox">
              <h1 className="_label">{location.state.label}</h1>
              <p className="_calories">
                Calories: {Math.floor(location.state.calories)}
              </p>
              <div className="_ingredients_box">
                <h3>Ingredients</h3>
                <ul className="_ingredients">
                  {location.state.ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredients_ing_detail">
                      {ingredient.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="health_nutrients">
            <h3>Health Labels</h3>
            {location.state.healthLabels.map((healthLabel, index) => (
              <span key={index} className="_healthLabels_detail">
                '{healthLabel}',{" "}
              </span>
            ))}
            <h3>Total Nutrients</h3>
            {location.state.digest.map((digests, index) => (
              <span key={index} className="nutrients_digest_detail">
                '{digests.label}',{" "}
              </span>
            ))}
          </div>
          <a className="_url_detail" href={location.state.url} target="_blank">
            URL: {location.state.url}
          </a>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
