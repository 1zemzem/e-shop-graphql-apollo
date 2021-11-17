import React, { Component } from "react";
import styled from "styled-components";
import "./Product.css";

const Section = styled.div`
  max-width: 100%;
  padding-top: 80px;
  padding-bottom: 72px;
  display: grid;
  grid-template-columns: 1fr 8fr 5fr;
  grid-column-gap: 40px;
`;

const MainPhoto = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const PhotoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoSection = styled.div`
  max-width: 100%;
  padding-right: 136px;
  display: flex;
  flex-direction: column;
`;

const ProductSizes = styled.div`
  display: flex;
  align-items: center;
`;
const ProductSizesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 45px;
  border: 1px solid #1D1F22;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #292929;
  &:not(:last-child) {
      margin-right: 12px;
      }        
`;

class Product extends Component {
  render() {
    return (
      <Section>
        <PhotoColumn>
          <img src="" alt="fff" />
          <img src="" alt="fff" />
          <img src="" alt="fff" />
        </PhotoColumn>
        <MainPhoto>
          <img src="" alt="bbb" />
        </MainPhoto>
        <InfoSection>
          <h2>Apollo</h2>
          <h3>Running Short</h3>
          <p>SIZE:</p>
          <ProductSizes>
            <ProductSizesItem>XL</ProductSizesItem>
            <ProductSizesItem>L</ProductSizesItem>
            <ProductSizesItem>M</ProductSizesItem>
            <ProductSizesItem>S</ProductSizesItem>
          </ProductSizes>
          <p>PRICE:</p>
          <p>50</p>
          <button></button>
          <p>Find stunning women's cocktail dresses and party dresses.</p>
        </InfoSection>
      </Section>
    );
  }
}

export default Product;
