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
                                <li><b><a href="https://arkcustom.com/" class="exlink">Ark Custom Laser Creations</a></b> - E-commerce website for a small business. Features Shopify with Quickbooks integration for management of inventory and custom order placing.</li>
                                <li><b><a href="http://www.suiteskinbylindsey.com/" class="exlink">Suite Skin by Lindsey</a></b> - <i><a href="https://github.com/shelkelly/ArkCustoms">Github</a></i> - Small business owner wanted upgrade from Wix site. Did not wan't to manage her website at all, and thus sought out a developer to create and maintain. Occasionally needing website updates for before and after photos, contact information updates, services, products. Client also wanted Search Engine Optimization.</li>
                                <li><b><a href="https://lifeatpraise.org/" class="exlink">Life at Praise</a></b> - Life at Praise had a pre-existing website for their Church through Wordpress. They were seeking to have a significantly heavier online presence in the form of Daily Devotions, Sermon Streaming as well as a Sunday Sermon Gallery. Successfully deployed Daily Devotional page and system, allowing for weekly change in video, and automatic rollout of videos each day.</li>
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