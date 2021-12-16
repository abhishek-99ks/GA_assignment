import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <p className="navLink">Home</p>
      </Link>
    </div>
  );
};

export default Navbar;
