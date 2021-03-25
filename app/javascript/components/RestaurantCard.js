import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import images from "../packs/images";

const RestaurantCard = props => {
  const {restaurant, seeRestaurant} = props;
  const image = images.find(i => i.nameId === restaurant.nameId);
  return (
    <div className="restaurant">
      <img src={image.content} alt={`${restaurant.nameId}-logo`} />
      <h4>{restaurant.name}</h4>
      <p>{restaurant.description}</p>
      <Link to={`/${restaurant.nameId}`}>VER MAS</Link>
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