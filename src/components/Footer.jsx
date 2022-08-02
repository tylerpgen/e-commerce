import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mobile } from "../responsive";
import { largeMobile } from "../responsive";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Container = styled.div`
  display: flex;
  background-color: #fff7f7;
  ${mobile({ flexDirection: "column" })}
  ${largeMobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 10px 0;
`;

const SocialContainer = styled.div`
  display: flex;
  ${largeMobile({
    alignItems: "center",
    justifyContent: "center",
  })}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  ${largeMobile({ fontSize: "50" })}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  ${mobile({ marginTop: "0" })}
  ${largeMobile({ marginTop: "0" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #eee;
  ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TripleThreatLA</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          eligendi cupiditate voluptas non eveniet placeat, quia, sed adipisci
          quasi delectus quis id maxime, velit quo eum nisi molestiae in? Dicta?
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ScrollToTop>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/cart">Cart</StyledLink>
            <StyledLink to="/products">Sneakers</StyledLink>
            <StyledLink to="/products">Streetwear</StyledLink>
            <StyledLink to="/products">Accessories</StyledLink>
            <StyledLink to="/product/:id">Product Page</StyledLink>
          </ScrollToTop>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} />
          contact@triplethreat.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
