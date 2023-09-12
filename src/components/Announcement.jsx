import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #CF0A0A;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>APROVECHA NUESTRAS OFERTAS!!</Container>;
};

export default Announcement;