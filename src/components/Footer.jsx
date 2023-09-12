import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room 
  } from "@material-ui/icons";
  import styled from "styled-components";

  const Container = styled.div`
  display: flex;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  
`;

const Title = styled.h3`
  margin-bottom: 30px;
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
 

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MINISO</Logo>
        <Desc>
        El fundador de la marca MINISO, Jack Ye, se inspiró para crear MINISO 
        mientras estaba de vacaciones con su familia en Japón en 2013. Encontró varias
         tiendas especializadas en Japón que tenían productos de buena calidad, bien diseñados 
         y económicos que se fabricaban principalmente en China. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Categorias</ListItem>
          
          <ListItem>Mi Cuenta</ListItem>
          {/* <ListItem>Order Tracking</ListItem> */}
          
          <ListItem>Terminos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contactanos</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> San Jorge, Av. 6 de Agosto, Calle Pinilla.
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +591 77591358
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> miniso.sj@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;