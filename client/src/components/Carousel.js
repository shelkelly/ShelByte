import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../pages/css/style.css'

import arkprev from "../images/arkcustom-preview.jpg";
import ssprev from "../images/suiteskin-preview.jpg";
import grprev from "../images/greatreads-preview.jpg";

const items = [
    <div className="item" data-value="1">
        <img src={arkprev} class="responsive" alt="Ark Preview"></img>
        <h1>Ark Custom Laser Creations</h1>
        <h3>GitHub</h3>
        <h4>Solo</h4>
        <p>E-Commerce solution for a laser engraving business. Features Handlebars to render content from MySQL database, localStorage for UX/UI of the Cart feature, JS and Jquery on the back end, Bootstrap implementation on the front end for a smooth interface, and Stripe RESTful API for secure input of sensitive user information.</p>
    </div>,
    <div className="item" data-value="2">
        <img src={ssprev} class="responsive" alt="Suite Skin Preview"></img>
            <h1>Suite Skin</h1>
            <h3>Github</h3>
            <h4>Solo</h4>
            <p>A small business owner who was looking to upgrade from their Wix website, for their site to be Search Engine Optimized, and to display personal success before and after photos. This site features React, Javascript, Node.js, Bootstrap, HTML and CSS methods such as keyframes, animate and transform.</p>
        </div>,
        <div className="item" data-value="3">
        <img src={grprev} class="responsive" alt="GreatReads Preview"></img>
            <h1>GreatReads</h1>
            <h3>Github</h3>
            <h4>Group</h4>
            <p>A small group project using a SQL database of 10,000 books. The form bar is used to search for either title, author or key word. The results then fade into the once empty box. Utilizes MySQL, Javascript, Node.js, Bootstrap, HTML and CSS.</p>
        </div>,
];

const renderSlideInfo = ({ item, itemsCount }) => {
    return `${item}\\${itemsCount}`;
};

const renderDotsItem = ({ isActive }) => {
    return isActive ? 'x' : 'o';
};

const renderPrevButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&lt;</span>;
};

const renderNextButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&gt;</span>;
};

const renderPlayPauseButton = ({ isPlaying }) => {
    return isPlaying ? 'PAUSE' : 'PLAY';
};

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlayControls
        disableSlideInfo={false}
        renderSlideInfo={renderSlideInfo}
        renderDotsItem={renderDotsItem}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
    />
);
export default Carousel;