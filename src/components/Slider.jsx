import { ArrowRightOutlined,ArrowLeftOutlined  } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react";
import { sliderItems } from "../data";

const Container=styled.div`
width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
  
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
  
`;  

const Wrapper=styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);

`;


const Slide=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};  
  
  
`
const ImgContainer = styled.div`
  height:100%;
  flex:1;
  align-items: center;
  margin-left: 30px;
  margin-top:25px;

`
const Image=styled.img`
height:72%;


`
const InfoContainer=styled.div`
flex:1;
padding:50px;

`
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>



        
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>MUESTRAME MAS</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>


        {/* <Wrapper>
          <Slide bg="000000">
          <ImgContainer>
            <Image src="https://minisomx.vtexassets.com/arquivos/weBareBearsPersonajes.png"/>
          </ImgContainer>
          <InfoContainer>
            <Title>MINISO LOVER </Title>
            <Desc>APROVECHA NUESTRAS OFERTAS DE VERANO</Desc>
            <Button>MUESTRAME MAS</Button>
          </InfoContainer>
          </Slide>


          <Slide bg="CF0A0A">
          <ImgContainer>
            <Image src="https://minisomx.vtexassets.com/arquivos/weBareBearsPersonajes.png"/>
          </ImgContainer>
          <InfoContainer>
            <Title>MINISO LOVER </Title>
            <Desc>APROVECHA NUESTRAS OFERTAS DE INVIERNO</Desc>
            <Button>MUESTRAME MAS</Button>
          </InfoContainer>
          </Slide>


          <Slide bg="DC5F00">
          <ImgContainer>
            <Image src="https://minisomx.vtexassets.com/arquivos/weBareBearsPersonajes.png"/>
          </ImgContainer>
          <InfoContainer>
            <Title>MINISO LOVER </Title>
            <Desc>APROVECHA NUESTRAS MEJORES OFERTAS, AL MEJOR PRECIO</Desc>
            <Button>MUESTRAME MAS</Button>
          </InfoContainer>
          </Slide>


        </Wrapper> */}

        <Arrow direction="right"onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>

    </Container>
  )
}

export default Slider
