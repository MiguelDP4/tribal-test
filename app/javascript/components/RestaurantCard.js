import React from "react";
import PropTypes from "prop-types";
import logo1 from "images/logos/bread-grind-logo.png";

const RestaurantCard = props => {
  const {restaurant} = props;
  return (
    <div className="restaurant">
      <img src={logo1} alt={`${restaurant.nameId}-logo`} />
      <h4>{restaurant.name}</h4>
      <p>{restaurant.description}</p>
      <a href="#">VER MAS</a>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    nameId: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RestaurantCard;