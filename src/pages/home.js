import React, { Component } from 'react';
import Typist from 'react-typist';

import './home.css'

class Home extends Component {
    state = {
        typing: true,
        i: 0, 
        words: [ "Student", "Developer", "Researcher", "Huang Fellow", "NULL"],
        styles: [ "duke", "dev", "research", "huang", "NULL"]
    }
    done = () => {
        this.setState({i: this.state.i+1});

        if (this.state.i === this.state.words.length-1) {
            this.setState({i: 0});
        }

        this.setState({ typing: false }, () => {
            this.setState({ typing: true })
        });
    }

    render() {
        return (
            <div className="home">
                <div className="col1">
                    <div className="hname">
                        Raymond Chen
                    </div>
                    <div className={["typer", this.state.styles[this.state.i]].join(' ')}>
                        {this.state.typing
                            ? 
                                <Typist startDelay={500} onTypingDone={this.done}>
                                    { this.state.words[ this.state.i ] }
                                    <Typist.Backspace count={ this.state.words[this.state.i].length } delay={1500} />
                                </Typist>
                            : ''
                        }
                    </div>
                    <div className="hdesc">
                        <span style={{color: 'rgba(255, 255, 255, 0.8)'}}>at</span> Duke University
                    </div>
                </div>
                <div className="links">
                    <div className="row">
                        <a href="https://github.com/raymondhechen" target="_blank" rel="noopener noreferrer">
                            <img className="icon" alt="github" src="/images/github.svg"/>
                        </a>
                        <a href="https://www.linkedin.com/in/raymondhechen/" target="_blank" rel="noopener noreferrer">
                            <img className="icon" alt="linkedin" src="/images/linkedin.svg"/>
                        </a>
                    </div>
                    <div className="row">
                        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <img className="icon" alt="resume" src="/images/resume.svg"/>
                        </a>
                        <a href="mailto:rc284@duke.edu" target="_blank" rel="noopener noreferrer">
                            <img className="icon" alt="email" src="/images/mail.svg"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.body.style.backgroundColor = "black";
    }
}

export default Home;