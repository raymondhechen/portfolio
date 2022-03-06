import React from 'react';
import { useMedia } from 'react-media';


const Text = (props) => {
    var style = {}
    const isSmallScreen = useMedia({ query: "(max-width: 768px)" });
    
    switch (props.type) {
        case "h1":
            if (isSmallScreen) {
                style = {
                    fontWeight: "700",
                    fontSize: "35px",
                }
            }
            else {
                style = {
                    fontWeight: "700",
                    fontSize: "42.5px",
                }
            }
            break;
        case "h2":
            if (isSmallScreen) {
                style = {
                    fontWeight: "500",
                    fontSize: "22.5px",
                    lineHeight: "30px",
                }
            }
            else {
                style = {
                    fontWeight: "500",
                    fontSize: "27.5px",
                    lineHeight: "35px"
                }
            }
            break;
        case "b1":
            if (isSmallScreen) {
                style = {
                    fontWeight: "500",
                    fontSize: "17.5px",
                    lineHeight: "27.5px"
                }
            }
            else {
                style = {
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "32.5px"
                }
            }
            break;
        default:
            break;
    }

    return <div style={{ ...style, ...props.style }}>
        {props.children}
    </div>
}

export default Text;