import React, { useState, useEffect, useRef } from "react";
import "../css/Menu.css";
import * as icon from "react-icons/cg";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Menu = () => {
  // State to track sidebar visibility
  const [sidebar, setSidebar] = useState(false);

  // Ref to detect clicks outside the sidebar
  const navRef = useRef(null);

  // Function to toggle sidebar open/close
  const toggleSidebar = () => setSidebar((prev) => !prev);

  // Effect to handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside the sidebar, close it
      if (navRef.current && !navRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    // Add event listener only when sidebar is open
    if (sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener on unmount or sidebar toggle
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar]);

  return (
    <>
      <div className="menu-bars">
        <button className="menu-btn" onClick={toggleSidebar}>
          <icon.CgMenuGridO />
        </button>
      </div>

      <nav ref={navRef} className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path} onClick={() => setSidebar(false)}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
