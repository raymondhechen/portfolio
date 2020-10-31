import React, { Component } from 'react';

import Writeup from '../pages/writeup';

class Shuttlerank extends Component {

    render() {
        return (
            <Writeup 
                color="#031A6D" 
                file="/images/projects/shuttlerank.png"
                title="shuttlerank" 
                year="2019"
                github="https://github.com/raymondhechen/shuttlerank"
                website="http://rank.dukebadminton.org"
            />
        )
    }
}

export default Shuttlerank;