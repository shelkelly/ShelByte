import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import Typical from 'react-typical';
import "./css/style.css"
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <Container id="overall" fluid>
      <Row class="row justify-content-around">
        <Col size="md-6">
          <MainContainer id="homecontainer" class="homediv">
            <Container id="textarea">

              <h1>Full-Stack Web Developer</h1>
              <p>Hello! I'm <b>Shelby Kelly</b>, a full-stack web developer located in Hickory, North Carolina. I am passionate about making the web a more fun and interactive place to be.
              </p>
              <p>I have a variety of skills in technologies ranging from Node.Js, Express, JavaScript, jQuery, JSON, AJAX, React.js, React, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, ES6, React Hooks, JSON, Sequelize, C# and more. <b>A good developer never stops learning.</b>
              </p>
            </Container>
          </MainContainer>
          <Row>
            <Col size="md-2"></Col>
            <Col size="md-8">
              <MainContainer id="contactcenter" class="contactdiv">
                <Container class="contact">

                  <h1>. C o n t a c t</h1>
                  <p></p><a href="https://github.com/shelkelly">
                    <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/github.png?raw=true" alt="Github" id="contactimg"></img>
                  </a>

                  <a href="https://www.linkedin.com/in/shelkelly13/">
                    <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/linkedin.png?raw=true" alt="LinkedIn" id="contactimg"></img>
                  </a>

                  <a href="mailto:shelbytecode@gmail.com">
                    <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/at.png?raw=true" alt="Email" id="contactimg"></img>
                  </a>
                </Container>

              </MainContainer>
            </Col>
          </Row>
        </Col>
        <Col size="md-6">
          <MainContainer id="homecontainer" class="projectsdiv">
            <Container id="examples">
              <h1>. P r o j e c t s</h1>
              <Carousel />
            </Container>
          </MainContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
