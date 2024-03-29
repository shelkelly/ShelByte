import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import Typical from 'react-typical';
import "./css/style.css"
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <Container id="overall" fluid>
      <Header />
      <Row class="row justify-content-around">
        <Col size="md-2"></Col>
        <Col size="md-8">
          
          <MainContainer id="homecontainer" class="homediv">
            <Container id="textarea">

            <div id="logocont"><img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/Logo%20Files/For%20Web/png/Color%20logo%20with%20background.png?raw=true" id="biglogo"></img></div>

              <h1>Full Stack Web Development</h1>
              <p>Hi! I'm <b>Shelby</b>, a full-stack web developer and designer. I focus on bringing small businesses an online presence. Services include marketing, e-commerce, branding and search engine optimization.
              </p>
              <div id="imgdiv"><p id="imgtxt"><img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/448240-PF6T2N-302.jpg?raw=true" id="existing"></img>Have an existing site? I can rebrand, update your design or theme, import and create new content, add image responsive assets, add functionality, or clean it up for Search Engine Optimization.</p></div>
              <div id="imgdiv"><p id="imgtxt"><img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/4787262.jpg?raw=true" id="new"></img>New to the web? I'll get your website up and running, saving you time and hassle. I'll stay in contact with you the whole way, ensuring you'll get the design and functionality you seek. When I create a new site for you, this includes Search Engine Optimization, market research and responsive design and development.</p></div>
              <p>Contact me using the methods below, or fill out the contact form to get in touch with me for a free consultation.</p>
            </Container>
          </MainContainer>
          <Row>
            <Col size="md-2"></Col>
            <Col size="md-8">
              <MainContainer id="contactcenter" class="contactdiv">
                <Container class="contact">

                  <h1>.Contact</h1>
                  <p></p><a href="https://github.com/shelkelly">
                    <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/github.png?raw=true" alt="Github" id="contactimg"></img>
                  </a>

                  <a href="https://www.linkedin.com/in/shelkelly13/">
                    <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/linkedin.png?raw=true" alt="LinkedIn" id="contactimg"></img>
                  </a>

                  <a href="mailto:shelby@shelbytecode.com">
                    <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/at.png?raw=true" alt="Email" id="contactimg"></img>
                  </a>
                </Container>

              </MainContainer>
            </Col>
          </Row>
        </Col>
        <Col size="md=2"></Col>
      </Row>
    </Container>
  );
};

export default Home;
