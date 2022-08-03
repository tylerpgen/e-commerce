import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile, smallMobile, largeMobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
  ${smallMobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
  ${largeMobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
  ${smallMobile({ marginRight: "0px" })}
  ${largeMobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
  ${smallMobile({ margin: "10px 0px" })}
  ${largeMobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Sneakers</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>8</Option>
            <Option>9</Option>
            <Option>9.5</Option>
            <Option>10</Option>
            <Option>11</Option>
            <Option>12</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (high - low)</Option>
            <Option>Price (low - high)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
