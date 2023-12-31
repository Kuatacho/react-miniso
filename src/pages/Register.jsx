import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://mma.prnewswire.com/media/1660171/MINISO.jpg?p=facebook")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAR UNA CUENTA</Title>
        <Form>
          <Input placeholder="Nombres" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Nombre de Usuario" />
          <Input placeholder="Correo Electronico" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Confirmar Contraseña" />
          <Agreement>
            Al crear la cuenta, acepto el uso de terminos y condiciones <b>POLITICAS</b>
          </Agreement>
          <Button>CREAR</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;