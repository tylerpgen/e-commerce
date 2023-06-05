import React from "react";
import styled from "styled-components";
import { mobile, smallMobile, largeMobile } from "../responsive";

const Container = styled.div`
  height: 50px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: 900;
  //Using props for mobile responsive CSS
  ${mobile({ fontSize: "25px" })}
  ${largeMobile({ fontSize: "25px" })}
  ${smallMobile({ fontSize: "25px" })}
`;

const Announcement = () => {
  return (
    <Container>
      <p>FREE Shipping SITEWIDE!</p>
    </Container>
  );
};

export default Announcement;
