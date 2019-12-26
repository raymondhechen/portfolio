import React, { Component } from 'react';
import Card from '../components/card';

import './items.css';

class Research extends Component {
    render() {
        return (
            <div>
                <div className="flex">
                    <Card 
                        img="/images/research6.png" 
                        text1="Calcium Imaging Real Time Analysis Platform" 
                        text2="Pearson Lab, Duke University" 
                        text3="2019" 
                        linkA="/assets/research6_abstract.pdf" 
                        linkP="/assets/research6.pdf"
                        linkG="https://github.com/raymondhechen/improv" 
                        linkW="https://pearsonlab.github.io"
                    />
                    <Card 
                        img="/images/research5.jpg" 
                        text1="Effects of Bcl2L12 on Melanoma using Zebrafish" 
                        text2="IRT, Pingry School" 
                        text3="2018"
                        linkP="/assets/research5.pdf"
                        linkW="https://www.pingry.org"
                    />
                    <Card 
                        img="/images/research4.jpg" 
                        text1="Spatiotemporal Sequence Learning in Mouse V1" 
                        text2="Gavornik Lab, Boston University" 
                        text3="2017"
                        linkA="/assets/research4_abstract.pdf" 
                        linkP="/assets/research4.pdf"
                        linkW="https://gavorniklab.bu.edu"
                    />
                    <Card 
                        img="/images/research3.jpg" 
                        text1="Studying p53 Knockout Glioblastoma in Mice" 
                        text2="Zhu Lab, Children's National" 
                        text3="2016"
                        linkW="https://zhulab.wordpress.com"
                    />
                    <Card 
                        img="/images/research2.jpg" 
                        text1="Isolating and Analyzing Duckweed Genes" 
                        text2="Waksman, Rutgers University" 
                        text3="2016"
                        linkA="/assets/research2_abstract.pdf" 
                        linkP="/assets/research2.pdf"
                        linkW="https://www.waksman.rutgers.edu"
                        />
                    <Card 
                        img="/images/research1.jpg" 
                        text1="Analysis and Modeling of the FadR Protein" 
                        text2="Kull Lab, Dartmouth University" 
                        text3="2015"
                        linkA="/assets/research1_abstract.pdf" 
                        linkP="/assets/research1.pdf"
                        linkW="https://sites.dartmouth.edu/kull_lab"
                    />
                </div>
                <div className="footer"></div>
            </div>
        )
    }

    componentDidMount() {
        document.body.style.backgroundColor = "rgb(63, 194, 139)";
    }
}

export default Research;