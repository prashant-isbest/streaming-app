import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="ui pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All streams
        </Link>
      </div>
    </div>
  );
};

export default Header;