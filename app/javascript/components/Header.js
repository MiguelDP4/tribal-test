import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return(
    <header><Link to='/'>RESTAURANT RANKER</Link></header>
  );
};

export default Header;