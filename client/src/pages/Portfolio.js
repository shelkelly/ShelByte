import React, { useState } from "react";
import Carousel from "../components/Carousel";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import "./css/style.css"


const Portfolio = () => {
    return (
        <Container id="overall" fluid>
            <Row class="row justify-content-around">
                <Col size="md-3"></Col>
                <Col size="md-6">
                    <MainContainer id="portcontainer">
                        <Col size="md-12"><h1>. Portfolio</h1></Col>
                        <Container id="carouselContainer">
                            <Carousel />
                        </Container>
                    </MainContainer>
                </Col>
                <Col size="md-3"></Col>
            </Row>
        </Container>
    )
}

export default Portfolio;