import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "60px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "18px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "90%", height: "40px" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 1.5em;
`;
const Button = styled.button`
  flex: 0.7;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get updates whenever we drop the latest heat!</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
