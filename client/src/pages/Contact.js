import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import Typical from 'react-typical';
import "./css/style.css"
import Header from "../components/Header";

const About = () => {
    return (
        <Container id="overall" fluid>
            <Header />
            <Row class="row justify-content-around">
                <Col size="md-3"></Col>
                <Col size="md-6">
                    <MainContainer id="contactcontainer" class="contactdiv">
                        <Container id="textarea">
                            <h1>. Contact</h1>
                            <p></p><a href="https://github.com/shelkelly">
                                <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/github.png?raw=true" alt="Github" id="contactimg"></img>
                            </a>

                            <a href="https://www.linkedin.com/in/shelkelly13/">
                                <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/linkedin.png?raw=true" alt="LinkedIn" id="contactimg"></img>
                            </a>

                            <a href="mailto:shelby@shelbytecode.com">
                                <img src="https://github.com/shelkelly/ShelByte/blob/main/client/src/images/at.png?raw=true" alt="Email" id="contactimg"></img>
                            </a>
                            <p></p>
                        </Container>
                    </MainContainer>
                </Col>
                <Col size="md-3"></Col>
            </Row>
        </Container>
    )
}

export default About;