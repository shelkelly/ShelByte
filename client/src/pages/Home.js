import React from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import "./css/style.css"

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <MainContainer id="homecontainer">
            <Container id="textarea">
              <h1>. S h e l B y </h1>
              <h4>Front-End / Back-End Web Developer</h4>
              <p>Hello! I'm <b>Shelby</b>, a web-developing freelancer out of Hickory, North Carolina. 
              </p>
              <p>I have a variety of skills ranging from user interfaces using <b>JavaScript</b> and <b>HTML & CSS</b>. I also have a passion for back-end, server side functionality with <b>NodeJS</b> and other connections. I am familiar with databases such as <b>MYSQL</b> and <b>Mongoose</b>.
              </p>
              </Container>
          </MainContainer>
        </Col>
        <Col size="md-6 sm-12">
          <Container />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;