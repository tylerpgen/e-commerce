import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #fff7f7;
  ${mobile({ flexDirection: "column" })}
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
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
  ${mobile({ marginTop: "0" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
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
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Sneakers</ListItem>
          <ListItem>Streetwear</ListItem>
          <ListItem>Accessories</ListItem>
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
