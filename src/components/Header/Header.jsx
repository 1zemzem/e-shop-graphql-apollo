import React, { Component } from "react";
import styled from "styled-components";
//import DropDownBasket from "../DropDownBasket/DropDownBasket";
import Nav from "../Nav/Nav";
import "./Header.css";

const StyledAction = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
`;

const CurrencySwitcher = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  display: inline-block;
  color: #1d1f22;
`;
const ArrowDown = styled.span`
  border: solid black;
  border-width: 0 1px 1px 0px;
  width: 6px;
  height: 6px;
  display: inline-block;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-left: 10px;
`;

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <div>
          <img src="./images/bag.svg" alt="fff" />
        </div>
        <StyledAction>
          <button>
            <CurrencySwitcher>
              $<ArrowDown />
            </CurrencySwitcher>
          </button>
          <button>
            <img src="./images/Empty Cart.svg" alt="basket" />
          </button>
          {/* <DropDownBasket show={show} onHide={handleClose} /> */}
        </StyledAction>
      </header>
    );
  }
}

export default Header;
