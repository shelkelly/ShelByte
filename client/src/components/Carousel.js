import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../pages/css/style.css'

import arkprev from "../images/ark-shopifypreview.png";
import ssprev from "../images/suiteskin-preview.jpg";
import grprev from "../images/lap-preview.png";

const items = [
    <div className="item" data-value="1">
        <img src={arkprev} class="responsive" alt="Ark Preview"></img>
        <h1>Ark Custom Laser Creations</h1>
        <p>E-Commerce solution for custom laser engraving business. Features Shopify with Quickbooks integration for inventory control, as well as custom user input for placing orders.</p>
    </div>,
    <div className="item" data-value="2">
        <img src={ssprev} class="responsive" alt="Suite Skin Preview"></img>
            <h1>Suite Skin</h1>
            <p>A small business owner looking to upgrade from their Wix website, for their site to be Search Engine Optimized, and to display personal success before and after photos. This site features React, Javascript, Node.js, Bootstrap, HTML and CSS methods such as keyframes, animate and transform.</p>
        </div>,
        <div className="item" data-value="3">
        <img src={grprev} class="responsive" alt="Life at Praise"></img>
            <h1>Life at Praise</h1>
            <p>Life at Praise had a pre-existing website for their Church through Wordpress. They were seeking to have a significantly heavier online presence in the form of Daily Devotions, Sermon Streaming as well as a Sunday Sermon Gallery. Successfully deployed Daily Devotional page and system, allowing for weekly change in video, and automatic rollout of videos each day.</p>
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