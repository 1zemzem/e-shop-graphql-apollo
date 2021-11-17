import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "../components/Header";
import Category from "../components/Pages/Category";
import Product from "../components/Pages/Product";
import Basket from "../components/Pages/Basket";

const AppWrapper = styled.div`
  min-height: 100vh;
  padding-left: 7vw;
  padding-right: 7vw;
  font-family: Raleway;
`;


class App extends Component {
  render() {
    return (
      <AppWrapper>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Category />} />
            <Route path="product" element={<Product />} />
            <Route path="basket" element={<Basket />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    );
  }
}

export default App;
