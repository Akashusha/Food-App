import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tastyTrailsLogo from "../../public/images/tasty-trails-logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import "../styles/Header.css";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("login");
  const navigate = useNavigate();

  const isOnline = useOnlineStatus();

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={tastyTrailsLogo} alt="Tasty Trails Logo" />
        </Link>
      </div>

      <div>Online Status: {isOnline ? "🟢" : "🔴"}</div>

      <div className="nav-items">
        <ul>
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/cart">
              <FaCartArrowDown />({cartItems.length} items)
            </Link>
          </li>

          <button
            className="login"
            onClick={() => {
              isLoggedIn === "Login"
                ? setIsLoggedIn("Logout")
                : setIsLoggedIn("Login");
            }}
          >
            {isLoggedIn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
