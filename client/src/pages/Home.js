import React from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import "./css/style.css"

const Home = () => {
  return (
    <Container fluid>
      <Row class="row justify-content-around">
        <Col size="sm-6">
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
          <Row>
            <Col size="sm-4">
              <MainContainer id="contact">

                  <img src=""></img>


                <p></p><a href="https://github.com/shelkelly">
                  <img src=""></img>
                </a>

                <a href="https://www.linkedin.com/in/shelkelly13/">
                  <img src=""></img>
                </a>
              </MainContainer>
            </Col>
          </Row>
        </Col>
        <Col size="sm-3">
          <MainContainer id="homecontainer">
            <Container id="examples">
              <h1>. P r o j e c t s</h1>
              <p><ul>
                <li><b><a href="https://sxiong6901.github.io/FirstProject/" class="exlink">Scout</a></b> - Implication of API from Cryptocompare to check daily values of top ten cryptocurrencies.</li>
                <li><b><a href="https://greatreadsproject.herokuapp.com/" class="exlink">GreatReads</a></b> - Using a database of over 10,000, search by term to find a like author, title or subject to find your next great read.</li>
                <li><b><a href="https://immense-stream-10834.herokuapp.com/" class="exlink">CovidFit</a></b> - Use of user authentication, React.js, NutritionixAPI, MYSQL to give the user a simple way to track foods and calories consumed.</li>
                <li><b><a href="" class="exlink">Ark Custom Laser Solutions</a></b> - E-commerce for a small business. Features the use of MYSQL for storing business inventory, Handlebars for displaying inventory to store front, localStorage in the cart functionality, MYSQL for placed orders, and Bootstrap on the front end.</li>
              </ul></p>
            </Container>
          </MainContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;