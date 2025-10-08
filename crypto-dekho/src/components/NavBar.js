import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={LOGO_URL} />
          </Link>
        </div>
        <div className="crypto-btn-container">
          <button className="crypto-btn">Cryptocurrencies</button>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/about">Learn</Link>
            </li>
            <li>
              <Link to="/contact">Pricing</Link>
            </li>
            <div className="signin-btn-container">
              <button className="signin-btn">Sign in</button>
            </div>
            <div className="theme-btn-container">
              <button className="theme-btn" script="theme()">
                Theme
              </button>
            </div>
          </ul>
        </div>
      </div>
      {/* theme() =>{onclick()} */}
    </>
  );
};
export default NavBar;
