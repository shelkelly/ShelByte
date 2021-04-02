import React, { Component } from 'react';
import './css/style.css';

export default class ExampleCss extends Component {
    constructor(props) {
        super(props) {
            this.wrapperRef = React.createRef();
        }

        handleRender() {
            const wrapper = this.wrapperRef.current;
            wrapper.classList.toggle('is-render')
        }
        render() {
            return(
                
            )
        }
    }
}