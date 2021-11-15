import React, { Component } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledItem = styled.a`
  text-align: center;
  font-weight: 600;
  padding: 10px;
  font-size: 16px;
  color: #1d1f22;
  &:active {
    color: #5ece7b;
    font-weight: 600;
    /* &:after {
      color: #1d1f22;
    } */
  }
`;

class Nav extends Component {
  render() {
    return (
      <StyledNav>
        <StyledItem href="/Category">WOMEN</StyledItem>
        <StyledItem href="/Category">MEN</StyledItem>
        <StyledItem href="/Category">KIDS</StyledItem>
      </StyledNav>
    );
  }
}

export default Nav;
