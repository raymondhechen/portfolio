import React, { Component } from 'react';

import Writeup from '../pages/writeup';

class Coldcall extends Component {

    render() {
        return (
            <Writeup 
                color="#1DD3B0" 
                file="/images/projects/position.svg"
                title="position" 
                year="2020"
                website="http://www.coldcall.ai"
                github="https://github.com/raymondhechen/position"
            />
        )
    }
}

export default Coldcall;