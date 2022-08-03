import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, smallMobile, largeMobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
  ${smallMobile({ height: "30vh" })}
  ${largeMobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 175px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${mobile({ top: "70px" })}
  ${smallMobile({ top: "70px" })}
  ${largeMobile({ top: "70px" })}
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${mobile({ fontSize: "20px", marginBottom: "5px" })}
  ${smallMobile({ fontSize: "15px", marginBottom: "5px" })}
  ${largeMobile({ fontSize: "20px", marginBottom: "5px" })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  width: fit-content;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 900;
  ${mobile({ fontSize: "12px", width: "90px" })}
  ${smallMobile({ fontSize: "0.625em", width: "70px" })}
  ${largeMobile({ fontSize: "12px", width: "90px" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to="/products">
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
