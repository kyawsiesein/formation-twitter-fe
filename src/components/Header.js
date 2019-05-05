import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/tweets/search" className="link">
        Search Tweet
      </NavLink>
      <NavLink to="/tweets/post" className="link">
        Post Tweet
      </NavLink>
    </div>
  );
};

export default Header;
