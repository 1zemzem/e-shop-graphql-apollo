import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
  max-width: 325px;
  max-height: 540px;
  padding: 8px 16px 20px 16px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
font-family: Raleway;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 160%;
  color: #1d1f22;
  padding-bottom: 59px;
`;

const ProductDescription = styled.div`
  padding-top: 25px;
  padding-bottom: 44px;
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
  width: 24px;
  height: 24px;
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
  margin-right: 10px;
`;

const ButtonNumberOfProductsInCart = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  &:active {
    color: #A6A6A6;
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

const TotalLine = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const ButtonLine = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

class DropDownBasket extends Component {
  render() {
    return (
      <Section>
        <Title>Mu Bag<span>2 items</span></Title>
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
        <TotalLine>
        <div>Total</div>
        <div>100</div>
        </TotalLine>
        <ButtonLine>
          <button>View bag</button>
          <button>CHECK OUT</button>
        </ButtonLine>
      </Section>
    );
  }
}

export default DropDownBasket;