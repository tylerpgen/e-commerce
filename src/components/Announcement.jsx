import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { largeMobile } from "../responsive";

const Container = styled.div`
  height: 50px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: 900;
  ${mobile({ fontSize: "25px" })}
  ${largeMobile({ fontSize: "25px" })}
`;

const Announcement = () => {
  return <Container>FREE Shipping SITEWIDE!</Container>;
};

export default Announcement;
