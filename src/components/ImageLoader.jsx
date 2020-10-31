import React, { Component } from "react";
import styled from "styled-components";
import ReactPlaceholder from "react-placeholder";
import { withRouter } from "react-router-dom";


const Photo = styled.img`
    margin: 8px 0;
    vertical-align: middle;
    width: 100%;
`;

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    handleImageLoaded() {
        this.setState({ loaded: true });
    }

    render() {
        const { loaded } = this.state;
        const imageStyle = !loaded ? { opacity: "0" } : { opacity: 1};
        const image = <Photo src={this.props.src} style={imageStyle} onLoad={() => this.handleImageLoaded()} />;
        return (
            <div>
                <ReactPlaceholder type="rect" ready={this.state.loaded} style={{opacity: 0}} >
                    <div className="imageHolder" >
                        {image}
                    </div> 
                </ReactPlaceholder>
                {!loaded && image}
            </div>
        );
    }
}

export default withRouter(Loader);
