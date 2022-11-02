import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "../../styles/Menu.css";
import { FiMenu, FiX } from "react-icons/fi";

const Menu = ( props ) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <span className="navbar__logo">Tech Shop</span>
      {menuClicked ? (
        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        <li className="navbar__item">
            <Link className="navbar__link" to="/">Home</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/products">Products</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/contact">Contact</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;