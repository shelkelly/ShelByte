import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import Typical from 'react-typical';
import "./css/style.css"

const Home = () => {
  return (
    <Container id="overall" fluid>
      <Row class="row justify-content-around">
        <Col size="sm-6">
          <MainContainer id="homecontainer">
            <Container id="textarea">
            <Typical
        steps={['. S h e l B y //', 2000, '. S h e l B y // Full-Stack Web Developer', 3000]}
        loop={Infinity}
        wrapper="h1"
      />
              <h1> </h1>
              <h4>Front-End / Back-End Web Developer</h4>
              <p>Hello! I'm <b>Shelby Kelly</b>, a full-stack web developer out of Hickory, North Carolina. I have a passion for making the web a more fun and interactive place to be.
              </p>
              <p>I have a variety of skills in technologies ranging from Node.Js, Express, JavaScript, jQuery, React.js, React, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, ES6, React Hooks, JSON, Sequelize, C# and more. <b>A good developer never stops learning.</b>
              </p>
            </Container>
          </MainContainer>
          <Row>
            <Col size="sm-2"></Col>
            <Col size="sm-8">
              <MainContainer id="contactcenter">
                <Container id="contact">

                  <h1>. C o n t a c t</h1>

                  <p></p><img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/network.png?raw=true" id="contactimg"></img>


                  <p></p><a href="https://github.com/shelkelly">
                    <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/github.png?raw=true" id="contactimg"></img>
                  </a>

                  <a href="https://www.linkedin.com/in/shelkelly13/">
                    <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/linkedin.png?raw=true" id="contactimg"></img>
                  </a>

                  <a href="mailto:shelbytecode@gmail.com">
                    <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/at.png?raw=true"></img>
                  </a>
                </Container>

              </MainContainer>
            </Col>
          </Row>
        </Col>
        <Col size="sm-3">
          <MainContainer id="homecontainer">
            <Container id="examples">
              <h1>. P r o j e c t s</h1>
              <p><ul>
              <li><b><a href="https://arkcustom.herokuapp.com/" class="exlink">Ark Custom Laser Solutions</a></b> - <i><a href="https://github.com/shelkelly/ArkCustoms">Github</a></i> - E-commerce for a small business. Features the use of MYSQL for storing business inventory, Handlebars for displaying inventory to store front, localStorage in the cart functionality, MYSQL for placed orders, and Bootstrap on the front end.</li>
                <li><b><a href="https://sxiong6901.github.io/FirstProject/" class="exlink">Scout</a></b> - <i><a href="https://github.com/shelkelly/FirstProject">Github</a></i> - Implication of API from Cryptocompare to check daily values of top ten cryptocurrencies.</li>
                <li><b><a href="https://greatreadsproject.herokuapp.com/" class="exlink">GreatReads</a></b> - <i><a href="https://github.com/shelkelly/Project">Github</a></i> -  Using a database of over 10,000, search by term to find a like author, title or subject to find your next great read.</li>
                <li><b><a href="https://immense-stream-10834.herokuapp.com/" class="exlink">CovidFit</a></b> - <i><a href="https://github.com/shelkelly/CovidFit-1">Github</a></i> - Use of user authentication, React.js, NutritionixAPI, MYSQL to give the user a simple way to track foods and calories consumed.</li>
              </ul></p>
            </Container>
          </MainContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;