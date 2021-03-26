import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantContainer from '../components/RestaurantContainer';
import RestaurantDetail from './RestaurantDetail';

const App = props => {
const {
        title,
        description,
        restaurants
      } = props
  return (
    <div className="app">
      <div className="page-title-card">
      </div>
      <Router>
        <Header/>
        <Switch>
          <Route
            path="/"
            exact
            key={`restaurant-list`}
            render={() => (
              <RestaurantContainer restaurants={restaurants} />
            )}
          />
          {restaurants.map(restaurant => (
            <Route 
              path={`/${restaurant.nameId}`}
              key={`${restaurant.nameId}-detail`}
              render={() => (
                <RestaurantDetail key={`/${restaurant.nameId}`} restaurant={restaurant} />
              )}
            />
          ))}
        </Switch>
      </Router>
      <footer>
        <a href="https://www.linkedin.com/in/miguel-angel-dubois/">MIGUEL DUBOIS</a>
      </footer>
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
