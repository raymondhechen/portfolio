import React, { Component } from 'react';

import Writeup from '../pages/writeup';

class Coldcall extends Component {

    render() {
        return (
            <Writeup 
                color="#1E73E8" 
                file="/images/projects/coldcall.svg"
                title="coldcall" 
                year="2020"
                website="http://www.coldcall.ai"
                github="https://github.com/raymondhechen/coldcall"
            />
        )
    }
}

export default Coldcall;