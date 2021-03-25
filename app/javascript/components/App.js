import React from "react"
import PropTypes from "prop-types"
import RestaurantContainer from '../components/RestaurantContainer';

const App = props => {
  const {
          title,
          description,
          restaurants
        } = props
    return (
      <div>
        <div className="page-title-card">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <RestaurantContainer restaurants={restaurants} />
        <footer>FOOTER</footer>
      </div>
    );
}

App.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  })),
};
export default App
