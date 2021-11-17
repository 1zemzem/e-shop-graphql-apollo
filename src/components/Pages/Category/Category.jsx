import React, { Component } from "react";
import { gql } from "@apollo/client";
import client from "../../../services/apollo";
import styled from "styled-components";

// const CATEGORIES_FULL = gql`
//   query {
//     category(input: { title: "clothes" }) {
//       name
//       products {
//         id
//         name
//         inStock
//         gallery
//         prices {
//           currency
//           amount
//         }
//         attributes {
//           name
//           items {
//             displayValue
//             value
//           }
//         }
//       }
//     }
//   }
// `;

const GET_PRODUCTS = gql`
  query {
    category(input: { title: "clothes" }) {
      products {
        id
        name
        inStock
        gallery
        prices {
          currency
          amount
        }
      }
    }
  }
`;

const Section = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 72px;
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
  // constructor(props) {
  // super(props);
  // this.state = {

  // }

  // }
  componentDidMount() {
    client
      .query({
        query: GET_PRODUCTS,
      })
      .then((result) => this.setState(result.data))
      .catch(console.log);
  }
  render() {
    console.log(this.state);
    const { products } = this.state?.category || {};
    return (
      <Section>
        <Title>Category name</Title>
        <Catalog>
          {products?.map((product) => {
            const price = product.prices.find(
              (price) => price.currency === "USD"
            );
            return (
              <ProductCard key={product.id}>
                <img src={product.gallery[3]} alt={product.name} width="80px" />
                <ProductCardTitle>{product.name}</ProductCardTitle>
                <ProductCardPrice>
                  {price?.amount} {price?.currency}
                </ProductCardPrice>
              </ProductCard>
            );
          })}
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
