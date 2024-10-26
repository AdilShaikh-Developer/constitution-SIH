import React from "react";
import { Link } from "react-router-dom";

import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Institutions & Constitution</h1>
      </Link>
      <Link to="/authentication">
        <CiLogin />
      </Link>
    </nav>
  );
};

export default Navbar;
