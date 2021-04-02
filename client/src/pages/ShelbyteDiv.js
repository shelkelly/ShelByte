import React, { Component } from 'react';
import { Spring } from 'react-spring';
import './css/style.css';

export default function ShelbyteDiv() {
    return (

        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
        >
            {props => (
                <div style={props}>
                    <div style={sdStyle}>
                        <h1>Shelbyte Divvvvvv</h1>
                        <p> LOREM IPSUMMMFDSKAFJDKL;SAJFKDSAJ;FLKD AKFJDKJAFEJIA ;FJKFJAD FJKDA JFIEIA KFJA  JFAFA A F AJFK.</p>
                    </div>
                </div>
            )}
        </Spring>




    )
}

const sdStyle = {
    background: 'steelblue'
}