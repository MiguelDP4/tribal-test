import React from "react"
import PropTypes from "prop-types"
import images from "../packs/images";

const RestaurantDetail = props => {
  const {restaurant} = props;
  const image = images.find(i => i.nameId === restaurant.nameId);
  return (
    <div>
      
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