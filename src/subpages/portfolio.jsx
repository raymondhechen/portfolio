import React, { Component } from 'react';

import Writeup from '../pages/writeup';

class Portfolio extends Component {

    render() {
        return (
            <Writeup 
                color="#4a4a4a" 
                file="/images/projects/portfolio.svg"
                title="portfolio"
                year="2018"
                github="https://github.com/raymondhechen/portfolio"
                website="https://raymondchen.me"
            />
        )
    }
}

export default Portfolio;