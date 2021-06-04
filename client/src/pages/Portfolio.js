import React, { useState } from "react";
import Carousel from "../components/Carousel";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import "./css/style.css"


const Portfolio = () => {
    return (
        <Container id="overall" fluid>
            <Row class="row justify-content-around">
                <Col size="md-2"></Col>
                <Col size="md-8">
                    <MainContainer id="portcontainer">
                        <Col size="md-12"><h1>. Portfolio</h1></Col>
                        <Col size="md-2"></Col>
                        <Container id="carouselContainer">
                            <Carousel />

                            <ul>
              <li><b><a href="https://arkcustom.herokuapp.com/" class="exlink">Ark Custom Laser Solutions</a></b> - <i><a href="https://github.com/shelkelly/ArkCustoms">Github</a></i> - <b><i>**WIP**</i></b> - E-commerce for a small business. Features the use of MYSQL for storing business inventory, Handlebars for displaying inventory to store front, localStorage in the cart functionality, MYSQL for placed orders, and Bootstrap on the front end.</li>
                <li><b><a href="https://sxiong6901.github.io/FirstProject/" class="exlink">Scout</a></b> - <i><a href="https://github.com/shelkelly/FirstProject">Github</a></i> - Implication of API from Cryptocompare to check daily values of top ten cryptocurrencies.</li>
                <li><b><a href="https://greatreadsproject.herokuapp.com/" class="exlink">GreatReads</a></b> - <i><a href="https://github.com/shelkelly/Project">Github</a></i> -  Using a database of over 10,000, search by term to find a like author, title or subject to find your next great read.</li>
                <li><b><a href="https://immense-stream-10834.herokuapp.com/" class="exlink">CovidFit</a></b> - <i><a href="https://github.com/shelkelly/CovidFit-1">Github</a></i> - Use of user authentication, React.js, NutritionixAPI, MYSQL to give the user a simple way to track foods and calories consumed.</li>
              </ul>
                        </Container>
                        <Col size="md-2"></Col>
                    </MainContainer>
                </Col>
                <Col size="md-2"></Col>
            </Row>
        </Container>
    )
}

export default Portfolio;