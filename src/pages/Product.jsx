import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Harrow1 from "../assets/images/harrow1.png";
import { Add, Remove } from "@mui/icons-material";
import { mobile, smallMobile, largeMobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${smallMobile({ padding: "10px", flexDirection: "column" })}
  ${largeMobile({ padding: "10px", flexDirection: "column" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  width: 100px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({
    padding: "0px 3px",
    fontSize: "15px",
  })}
  ${smallMobile({
    padding: "0px 3px",
    fontSize: "15px",
  })}
  ${largeMobile({
    padding: "0px 3px",
    fontSize: "15px",
  })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
  ${smallMobile({ height: "40vh" })}
  ${largeMobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
  ${smallMobile({ padding: "10px" })}
  ${largeMobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  ${mobile({ fontSize: "35px" })}
  ${smallMobile({ fontSize: "35px" })}
  ${largeMobile({ fontSize: "35px" })}
`;

const Desc = styled.p`
  margin: 20px 0;
  font-weight: 200;
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 30px 0;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  width: 60px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSizeOption = styled.option`
  font-size: 20px;
`;

const AddContainer = styled.div`
  width: 30%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  ${smallMobile({ width: "100%" })}
  ${largeMobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: lightgray;
  }
`;

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/products">
          <TopButton>BACK</TopButton>
        </Link>
        <ImageContainer>
          <Image src={Harrow1} />
        </ImageContainer>
        <InfoContainer>
          <Title>Miya Mask x HarrowNumen Collab Hoodie</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nihil soluta est quasi sit, voluptas
            asperiores enim possimus beatae eveniet libero dignissimos saepe quisquam totam fugiat voluptatum iure ad
            id?
          </Desc>
          <Price>$50</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>4</Amount>
              <Add />
            </AmountContainer>
            <Link to="/cart">
              <Button>ADD TO CART</Button>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
