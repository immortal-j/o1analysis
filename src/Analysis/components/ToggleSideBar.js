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
          <a className="navbar-brand text-primary mr-0"><img className="brand-logo" src={Logo} alt="O(1) Coding Club" srcSet="" /></a>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <CloseIcon />
            </div>
          </div>
          <div className="sd-body">
          <div className="NavBarData">
          <ul className="NavBarList">
          {NavBarData.map((val,key)=>{
            return <div ><li key="key" className ="row">
            
              
              <div id="icon" >{val.icon} {val.title}</div>
              
              
              
            </li></div>
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
