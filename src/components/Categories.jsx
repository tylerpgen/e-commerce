import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
import { largeMobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #fff7f7;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${largeMobile({ flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
