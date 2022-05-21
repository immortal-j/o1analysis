import React, { useState } from "react";
import "./ToggleSidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../Assets/Logo/logo2.svg'
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { NavBarData } from "./NavBarData";
const ToggleSidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <div className="container-fluid mt-3 mb-3">
        <nav className="navbar navbar-expand-lg  shadow-md">
          <div className="container-fluid p-2">
            <div className="form-inline mr-auto">
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <MenuIcon />
              </div>
            </div>
            <a className="navbar-brand text-primary mr-0"><img className="brand-logo" src={Logo} alt="O(1) Coding Club" srcSet="" /></a>
          </div>
        </nav>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0"><img className="brand-logo" src={Logo} alt="O(1) Coding Club" srcSet="" /></h4>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <CloseIcon />
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a className="sd-link">Menu Item 1</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 2</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 3</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 4</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 5</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 6</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 7</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 8</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default ToggleSidebar;
