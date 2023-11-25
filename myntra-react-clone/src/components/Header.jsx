import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaHeartbeat, FaShoppingBag, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="logo_container">
        <a href="#">
          <img
            className="myntra_home"
            src="images/myntra-logo.webp"
            alt="Myntra Home"
          />
        </a>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">
          <FaSearch />
        </span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoMdPerson />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaHeartbeat />
          <span className="action_name">Wishlist</span>
        </div>

        <a className="action_container" href="pages/bag.html">
          <FaShoppingBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">0</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
