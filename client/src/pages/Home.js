import React from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import "./css/stylesheets.css"

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <MainContainer id="homecontainer">
            <Banner />
            <Container id="textarea">
              <p>Welcome to <h1>Betta Bytes</h1></p>
              <p>Betta Bytes is here to help you find your perfect Betta Fish! Your new fish friend will be coming from its home in Hickory, North Carolina. This is where it's fishkeeper has looked in the glass a hundred times a day, just to see whats new.
              </p>
              <p>Betta Bytes began with the purchase of a Mustard Half Moon Betta. He ignited a passion for fishkeeping and maintaining aquariums. Starry-eyed, one became two, and then three, and then many. If you share the hobby of these great fish, then come see what we have to offer at Betta Bytes.</p>
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