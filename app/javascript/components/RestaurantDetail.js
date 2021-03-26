import React from "react"
import PropTypes from "prop-types"
import images from "../packs/images";
import Comment from "./Comment";
import CommentList from "./CommentList";
import restaurantImages from '../packs/restaurantImages';

const RestaurantDetail = props => {
  const {restaurant} = props;
  const image = images.find(i => i.nameId === restaurant.nameId);
  return (
    <div className='restaurant-detail-container'>
      <div className='restaurant-detail-header'>
        <img src={image.content} alt='restaurant-logo'/>
        <div className='restaurant-detail-info'>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
        </div>
      </div>
      <Comment key={`${restaurant.nameId}-comment-form`} restaurant={restaurant} />
      <CommentList key={`${restaurant.nameId}-comment-list`} restaurant={restaurant} />
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