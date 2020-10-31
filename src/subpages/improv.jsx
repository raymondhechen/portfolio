import React, { Component } from 'react';

import Writeup from '../pages/writeup';

class Improv extends Component {

    render() {
        return (
            <Writeup 
                color="#6400A1" 
                file="/images/projects/improv.svg"
                title="improv" 
                year="2019"
                github="https://github.com/raymondhechen/improv"
                website="https://pearsonlab.github.io/"
            />
        )
    }
}

export default Improv;