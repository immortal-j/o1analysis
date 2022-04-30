import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavWrapper>
      <div className="brand-name">
        <h4>O(1) Coding Club</h4>
      </div>
      <NavButtons>
        <ul>
          <li>tab1</li>
          <li>tab1</li>
          <li>tab1</li>
          <li>tab1</li>
          <li>tab1</li>
        </ul>
      </NavButtons>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  background-color: black;
  color: grey;
  width: 20%;
  .brand-name {
    h4 {
      letter-spacing: 0.3rem;
      padding: 1rem 0.2rem;
    }
  }
`;
const NavButtons = styled.div`
padding: 2rem;
ul{
  list-style: none;
  li{
    padding: 2rem;
    width: 100%;
    
    &:hover{
      background-color: purple;
    }
  }
}`;
export default Navbar;
