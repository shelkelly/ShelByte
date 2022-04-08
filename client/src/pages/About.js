import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import Typical from 'react-typical';
import "./css/style.css"
import Carousel from "../components/Carousel";
import CertImg from "../images/CE_Cert_Badge_Coding-01.png";
import CertRep from "../utils/CertificateReport.PDF";

const About = () => {
    return (
        <Container id="overall" fluid>
            <Row class="row justify-content-around">
                <Col size="md-3"></Col>
                <Col size="md-6">
                    <MainContainer id="aboutcontainer" class="aboutdiv">
                        <Container id="textarea">
                            <h1>About</h1>
                            <p>With lifelong coding skills, these were refined in 2020 through a program at the University of North Carolina at Charlotte. The Coding Bootcamp was a six-month intensive program, teaching and refining various basics and frameworks in HTML, CSS, Javascript and Computer Science.</p>
                            <p>After completion of the program, on-the-job skills were attained and new technologies were self taught. One of the keys in the Bootcamp was understanding that the ability to self-teach was imperative when it comes to web development, as technologies and frameworks are ever-evolving. With a natural drive to create and maintain websites, this was an easy process.</p>
                            <p><h1>Certificates</h1></p>
                            <p><img src={CertImg}></img></p>
                            <p><a href={CertRep}>Certificate Report</a></p>
                        </Container>
                    </MainContainer>
                </Col>
                <Col size="md-3"></Col>
            </Row>
        </Container>
    )
}

export default About;