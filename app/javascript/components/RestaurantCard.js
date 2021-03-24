import React from "react";
import PropTypes from "prop-types";

const RestaurantCard = props => {
  const {restaurant} = props;
  return (
    <div className="restaurant">
      <img src={'images/bread-grind-logo.png'} alt={`${restaurant.nameId}-logo`} />
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