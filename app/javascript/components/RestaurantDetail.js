import React from "react"
import PropTypes from "prop-types"
import images from "../packs/images";
import restaurantImages from '../packs/restaurantImages';

const RestaurantDetail = props => {
  const {restaurant} = props;
  const image = images.find(i => i.nameId === restaurant.nameId);
  return (
    <div className='restaurant-detail-container'>
      <header className='restaurant-detail-header'>
        <img src={image.content} alt='restaurant-logo'/>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
      </header>
    </div>
  );
}

RestaurantDetail.propTypes = {
  restaurant: PropTypes.shape({
    nameId: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RestaurantDetail;