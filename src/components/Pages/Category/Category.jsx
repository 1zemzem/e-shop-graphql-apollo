import React, { Component } from "react";
//import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";


// const GET_PRODUCTS = gql`
//   query {
//     
//   }
// `;

const Section = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 71px;
`;

const Title = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-bottom: 88px;
`;

const Catalog = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 119px;
`;

const ProductCardTitle = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1d1f22;
`;

const ProductCardPrice = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1d1f22;
`;

class Category extends Component {
  render() {
    return (
      <Section>
        <Title>Category name</Title>
        <Catalog>
          <ProductCard>
            <img src="" alt="fff" />
            <ProductCardTitle>Apollo Running Short</ProductCardTitle>
            <ProductCardPrice>50$</ProductCardPrice>
          </ProductCard>
          <ProductCard>
            <img src="" alt="fff" />
            <ProductCardTitle>Apollo Running Short</ProductCardTitle>
            <ProductCardPrice>50$</ProductCardPrice>
          </ProductCard>
          <ProductCard>
            <img src="" alt="fff" />
            <ProductCardTitle>Apollo Running Short</ProductCardTitle>
            <ProductCardPrice>50$</ProductCardPrice>
          </ProductCard>
          <ProductCard>
            <img src="" alt="fff" />
            <ProductCardTitle>Apollo Running Short</ProductCardTitle>
            <ProductCardPrice>50$</ProductCardPrice>
          </ProductCard>
          <ProductCard>
            <img src="" alt="fff" />
            <ProductCardTitle>Apollo Running Short</ProductCardTitle>
            <ProductCardPrice>50$</ProductCardPrice>
          </ProductCard>
          <ProductCard>
            <img src="" alt="fff" />
            <ProductCardTitle>Apollo Running Short</ProductCardTitle>
            <ProductCardPrice>50$</ProductCardPrice>
          </ProductCard>
        </Catalog>
      </Section>
    );
  }
}

export default Category;
