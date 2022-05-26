import React, { useState } from "react";
import "./ToggleSidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Assets/Logo/logo2.svg";
import CloseIcon from "@mui/icons-material/Close";
import { NavBarData } from "./NavBarData";
import { Link } from "react-router-dom";

const ToggleSidebar = ({fetchSubject} ) => {
  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const xyz=(key)=>{
    ToggleSidebar();
      fetchSubject(key)
     
  }
  

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
            <Link className="navbar-brand text-primary mr-0" to='/'>
              <img
                className="brand-logo"
                src={Logo}
                alt="O(1) Coding Club"
                srcSet=""
              />
            </Link>
          </div>
        </nav>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            <Link to='/' className="navbar-brand text-primary mr-0">
              <img
                className="brand-logo"
                src={Logo}
                alt="O(1) Coding Club"
                srcSet=""
              />
            </Link>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <CloseIcon />
            </div>
          </div>
          <div className="sd-body">
            <div className="NavBarData">
              <ul className="NavBarList">
                {NavBarData.map((val, key) => {
                  return (
                    <li key={key} className="row">
                      <div id="icon" onClick={() => xyz(key)}>
                        {val.icon}
                        {"  "} {val.title}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
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
