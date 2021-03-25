import React from "react"
import PropTypes from "prop-types"
import Restaurant from "./RestaurantCard";

const RestaurantContainer = props => {
  const {restaurants} = props
  return (
    <div className="restaurant-container">
      {restaurants.map(restaurant => (
        <Restaurant key={restaurant.name} restaurant={restaurant}/>
      ))}
    </div>
  );
}


RestaurantContainer.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    nameId: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
};

export default RestaurantContainer
