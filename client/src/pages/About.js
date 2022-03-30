import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import Typical from 'react-typical';
import "./css/style.css"
import Carousel from "../components/Carousel";

const About = () => {
    return (
        <Container id="overall" fluid>
            <Row class="row justify-content-around">
                <Col size="md-6">
                    <MainContainer id="aboutcontainer" class="aboutdiv">
                        <Container id="textarea">
                            4564564654564565
                        </Container>
                    </MainContainer>
                </Col>
            </Row>
        </Container>
    )
}

export default About;