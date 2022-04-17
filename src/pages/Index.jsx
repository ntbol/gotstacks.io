import { ArrowDownward } from '@mui/icons-material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'


const Wrapper = styled.div`
    background: #1D302A;
    height: 100vh;
    width: 100vw;
    padding: 55px;
    color: white;
    position: relative;
    overflow: hidden;
    z-index: -2;
`
const Nav = styled.div`
    position: absolute;
`
const Logo = styled.h1`
    font-family: Medium;
    color: white;
`
const Highlight = styled.span`
    color: #4FFE7F;
`

const InfoContainer = styled.div`
    height: 95vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
`
const Title = styled.h1`
    font-size: 65px;
    font-family: Bold;
`
const Desc = styled.p`
   line-height: 40px;
   margin-top: 30px;
   margin-bottom: 40px;
   font-size: 18px;
`
const Button = styled.button`
    background-color: #4FFE7F;
    border: none;
    border-radius: 10px;
    padding: 18px;
    font-family: Medium;
    width: 212px;
    border: 2px solid #4FFE7F;
    transition: all .5s ease;

    &:hover{
        background: transparent;
        border: 2px solid #4FFE7F;
        color: white;
    }
`
const DataContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
     z-index: 99;
`
const PriceFloat = styled.div`
    background-color: #0E1419;
    width: 330px;
    height: 330px;
    border-radius: 10px;
    margin-bottom: 20px;
`
const Data = styled.span`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const MetalName = styled.h3`
    padding: 30px 30px 0px;
    font-size: 20px;
    font-family: Regular;
`
const Price = styled.h3`
    font-size: 35px;
    font-weight: Bold;
    padding: 0px 30px;
`
const Chart = styled.img`
    width: 100%;
`
const Change = styled.h3`
    padding: 5px 30px 30px;
    font-size: 35px;
    font-weight: Regular;
`
const ChangeSymbol = styled.span`
    color: ${props=>props.color === "green" && "blue"};
`

const Image = styled.img`
    position: absolute;
    height: 100vh;
    top: 0;
    z-index: -1;
`


const Index = () => {
  return (
    <Wrapper>
        <Container style={{maxWidth:"1500px"}}>
            <Row>
                <Col>
                    <Nav>
                        <Logo>gotstacks<Highlight>.io</Highlight></Logo>
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}>
                    <InfoContainer>
                        <Title>Modernizing<br/><Highlight>Hard Asset</Highlight> Trading.</Title>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem tortor, semper a finibus sed, ultricies vestibulum ipsum. Aliquam a dictum lectus. </Desc>
                        <Button>Open an Account</Button>
                    </InfoContainer>
                </Col>
                <Col md={12} lg={6}>
                    <DataContainer>
                        <Container>
                            <Row>
                                <Col xl={6}>
                                    <PriceFloat>
                                        <Data>
                                            <MetalName>GOLD/OZ USD</MetalName>
                                            <Price>$1,928.45</Price>
                                            <Chart src="https://i.imgur.com/5TkytgG.png"/>
                                            <Change><ArrowDownward color="green"/> $10.25</Change>
                                        </Data>
                                    </PriceFloat>
                                </Col>
                                <Col xl={6}>
                                    <PriceFloat>

                                    </PriceFloat>
                                </Col>
                                <Col xl={6}>
                                    <PriceFloat>

                                    </PriceFloat>
                                </Col>
                                <Col xl={6}>
                                    <PriceFloat>

                                    </PriceFloat>
                                </Col>
                            </Row>
                        </Container>
                    </DataContainer>
                    
                    <Image src="https://i.imgur.com/O7UMyDQ.png"/>
                </Col>
            </Row>
        </Container>
    </Wrapper>
  )
}

export default Index