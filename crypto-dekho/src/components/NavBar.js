import { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Menu from "./Menu";
import * as icons from "react-icons/md";
import { CiBitcoin } from "react-icons/ci";

const NavBar = () => {
  const [showToggle, setShowToggle] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setShowToggle((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            {/* <img className="logo" src={LOGO_URL} /> */}
            <h3 className="logo">
              <CiBitcoin />
              CoinTracker
            </h3>
          </Link>
        </div>
        <div className="crypto-btn-container">
          <button className="crypto-btn">Cryptocurrencies</button>
        </div>

        <div className="nav-items">
          <ul>
            <li className="USD-btn-container">
              <img src="usLogo.png" className="flag" alt="USD" />
              <div className="USD-btn">USD</div>
            </li>
            <li className="line-container">
              <div className="line">|</div>
            </li>
            <li className="login-btn-container">
              <Link to="/login">
                <div className="login">Login</div>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <div className="signup-btn-container">
                  <div className="signup">Sign Up</div>
                </div>
              </Link>
            </li>
            <li className="theme-btn-container">
              <button className="theme-btn" onClick={toggleTheme}>
                {showToggle ? (
                  <icons.MdOutlineDarkMode />
                ) : (
                  <icons.MdDarkMode />
                )}
              </button>
            </li>
          </ul>
          <div className="menu">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
