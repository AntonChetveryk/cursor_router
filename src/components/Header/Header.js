import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="navigation">
      <Link to="/">Main</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/images">Images</Link>
      <Link to="/posts">Posts</Link>
    </div>
  </header>
);

export default Header;
