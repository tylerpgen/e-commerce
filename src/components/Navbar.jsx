import { Badge } from "@material-ui/core";
import { Search, ShoppingBagOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile, smallMobile, largeMobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 70px;
  ${mobile({ height: "50px" })}
  ${largeMobile({ height: "50px" })}
  ${smallMobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
  ${largeMobile({ padding: "10px 0" })}
  ${smallMobile({ padding: "5px 0" })}
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
  padding: 0;
  line-height: 3em;
  ${mobile({ display: "none" })}
  ${largeMobile({ display: "none" })}
  ${smallMobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: 2.1875em;
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }

  ${mobile({ fontSize: "1.25em", marginLeft: "0" })}
  ${largeMobile({ fontSize: "1.3em", marginLeft: "0", marginTop: "0" })}
  ${smallMobile({ fontSize: "1.2em", marginLeft: "0", marginTop: "7px" })}
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
  ${smallMobile({ flex: 3, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "15px", marginLeft: "5px" })}
  ${largeMobile({ fontSize: "15px", marginLeft: "4px" })}
  ${smallMobile({ fontSize: "14px", marginLeft: "5px", marginTop: "7px" })}
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
            <MenuItem>Login</MenuItem>
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
