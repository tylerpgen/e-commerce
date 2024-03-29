import styled from "styled-components";
import { mobile, smallMobile, largeMobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://wallpaperaccess.com/full/746416.jpg") center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  ${smallMobile({ width: "75%" })}
  ${largeMobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: fit-content;
  font-size: 20px;
  border: none;
  padding: 5px;
  margin: 10px 0;
  background-color: lightgray;
  cursor: pointer;
  ${mobile({ width: "90px" })}
  ${smallMobile({ width: "90px" })}
  ${largeMobile({ width: "90px" })}

  &:hover {
    background-color: red;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </LoginContainer>
    </Container>
  );
};

export default Login;
