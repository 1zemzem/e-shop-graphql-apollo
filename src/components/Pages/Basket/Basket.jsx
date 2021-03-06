import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
  max-width: 100%;
  padding-top: 80px;
  padding-bottom: 54px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: #1d1f22;
  padding-bottom: 59px;
`;

const ProductDescription = styled.div`
  max-width: 1097px;
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductSizes = styled.div`
  display: flex;
  align-items: center;
`;

const ProductSizesItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 45px;
  background-color: transparent;
  border: 1px solid #1d1f22;
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

const ProductsInCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NumberOfProductsInCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 12px;
`;

const ButtonNumberOfProductsInCart = styled.button`
  background-color: transparent;
  &:active {
    color: #1d1f22;
  }
`;

const Number = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  display: flex;
  justify-content: space-around;
  color: #1d1f22;
`;

class Basket extends Component {
  render() {
    return (
      <Section>
        <Title>Cart</Title>
        <ProductDescription>
          <ProductInfo>
            <h2>Apollo</h2>
            <h3>Running Short</h3>
            <p>PRICE:</p>
            <p>50</p>
            <ProductSizes>
              <ProductSizesItem>XL</ProductSizesItem>
              <ProductSizesItem>L</ProductSizesItem>
              <ProductSizesItem>M</ProductSizesItem>
              <ProductSizesItem>S</ProductSizesItem>
            </ProductSizes>
          </ProductInfo>
          <ProductsInCart>
            <NumberOfProductsInCart>
              <ButtonNumberOfProductsInCart>
                <img src="./images/minus-square.svg" alt="-" />
              </ButtonNumberOfProductsInCart>
              <Number>1 </Number>
              <ButtonNumberOfProductsInCart>
                <img src="./images/plus-square.svg" alt="+" />
              </ButtonNumberOfProductsInCart>
            </NumberOfProductsInCart>
            <img src="" alt="fff" />
          </ProductsInCart>
        </ProductDescription>
      </Section>
    );
  }
}

export default Basket;
