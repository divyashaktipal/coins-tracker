import { Link } from "react-router-dom";
import { CiBitcoin } from "react-icons/ci";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const NavBar = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
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
        {/* <div className="crypto-btn-container">
          <button className="crypto-btn">Cryptocurrencies</button>
        </div> */}
        <div className="nav-items">
          <ul>
            <div className="USD-btn-container">
              <img src="usLogo.png" className="flag" alt="USD" />
              <div className="USD-btn">USD</div>
            </div>
            <div className="line-container">
              <div className="line">|</div>
            </div>

            <div className="login-btn-container">
              <Link to="/login">
                <div className="login">Login</div>
              </Link>
            </div>
            <div className="signup-btn-container">
              <Link to="/signup">
                <div className="signup">Sign Up</div>
              </Link>
            </div>
            <div className="theme-btn-container">
              <button className="theme-btn" onClick={toggleTheme}>
                {"</>"}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavBar;
