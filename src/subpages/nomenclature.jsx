import React, { Component } from 'react';

import Writeup from '../pages/writeup';

class Nomenclature extends Component {

    render() {
        return (
            <Writeup 
                color="#ad424c" 
                file="/images/projects/nomenclature.svg"
                title="nomenclature" 
                year="2020"
                github="https://github.com/raymondhechen/nomenclature"
                website="https://www.raymondchen.me"
            />
        )
    }
}

export default Nomenclature;