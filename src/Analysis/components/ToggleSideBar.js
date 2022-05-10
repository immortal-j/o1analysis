import React, { useState } from "react";
import "./ToggleSidebar.css";import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
            <a className="navbar-brand text-primary mr-0">O(1) Coding Club</a>
            <div className="form-inline ml-auto">
              <div className="btn btn-primary" onClick={ToggleSidebar}>
              <MenuIcon/>
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">O(1) Coding Club</h4>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <CloseIcon/>
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
