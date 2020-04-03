import React, { Component } from 'react';

import './bar.css'

class Bar extends Component {
    render() {
        const text2 = this.props.text2;
        return (
            <div className="container">
                <div className="logo">
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                        <img className="icon" alt="" src={this.props.img}/>
                    </a>
                </div>
                <div>
                    <div className="text1">
                        <span>{this.props.text1}</span>
                        <br/>
                        <span className="text2">{this.props.text2}</span>
                        <br/>
                        <span className="text3">{this.props.text3}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bar;
