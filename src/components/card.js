import React, { Component } from 'react';

import './card.css'

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="image">
                    <img className="pic" alt="logo" src={this.props.img}/>
                </div>
                <div className="text">
                    <div className="inText">
                        <span className="inText2">{this.props.text1}</span>
                        <br/>
                        {this.props.text2}
                        <br/>
                        {this.props.text3}
                    </div>
                    <div className="cardlinks">
                        {this.props.linkA && (<a href={this.props.linkA} target="_blank" rel="noopener noreferrer">
                                <img className="icon" alt="pdf" src="/images/pdf.svg"/>
                            </a>)
                        }
                        {this.props.linkP && (<a href={this.props.linkP} target="_blank" rel="noopener noreferrer">
                                <img className="icon" alt="poster" src="/images/poster.svg"/>
                            </a>)
                        }
                        {this.props.linkG && (<a href={this.props.linkG} target="_blank" rel="noopener noreferrer">
                                <img className="icon" alt="github" src="/images/github.svg"/>
                            </a>)
                        }
                        {this.props.linkW && (<a href={this.props.linkW} target="_blank" rel="noopener noreferrer">
                                <img className="icon" alt="website" src="/images/world.svg"/>
                            </a>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
