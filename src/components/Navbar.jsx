import { Badge } from "@material-ui/core";
import { Search, ShoppingBagOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { largeMobile } from "../responsive";

const Container = styled.div`
  height: 70px;
  ${mobile({ height: "50px" })}
  ${largeMobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
  ${largeMobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "40px", height: "10px" })}
  ${largeMobile({ width: "40px", height: "10px" })}
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: 35px;
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }

  ${mobile({ fontSize: "20px", marginLeft: "5px" })}
  ${largeMobile({ fontSize: "20px", marginLeft: "5px", marginTop: "3px" })}
`;

const StyledNavbarLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 3, justifyContent: "center" })}
  ${largeMobile({ flex: 3, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "5px" })}
  ${largeMobile({ fontSize: "15px", marginLeft: "5px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to="/">TripleThreatLA</StyledLink>
        </Center>
        <Right>
          <StyledNavbarLink to="/register">
            <MenuItem>Register</MenuItem>
          </StyledNavbarLink>
          <StyledNavbarLink to="/login">
            <MenuItem>Sign In</MenuItem>
          </StyledNavbarLink>
          <MenuItem>
            <StyledNavbarLink to="/cart">
              <Badge overlap="rectangular" badgeContent={2} color="primary">
                <ShoppingBagOutlined />
              </Badge>
            </StyledNavbarLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
