import React from 'react';
import { useMedia } from 'react-media';


const Text = (props) => {
    var style = {}
    const isSmallScreen = useMedia({ query: "(max-width: 768px)" });

    switch (props.type) {
        case "h1":
            if (isSmallScreen) {
                style = {
                    fontWeight: "500",
                    fontSize: "32.5px",
                }
            }
            else {
                style = {
                    fontWeight: "500",
                    fontSize: "40px",
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
        case "h3":
            if (isSmallScreen) {
                style = {
                    fontWeight: "500",
                    fontSize: "17.5px",
                    lineHeight: "25px",
                }
            }
            else {
                style = {
                    fontWeight: "500",
                    fontSize: "25px",
                    lineHeight: "30px"
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
        case "b2":
            if (isSmallScreen) {
                style = {
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "20px"
                }
            }
            else {
                style = {
                    fontWeight: "400",
                    fontSize: "17.5px",
                    lineHeight: "25px"
                }
            }
            break;
        default:
            break;
    }

    if (props.monospace) {
        style.fontFamily = "monospace";
    }

    return <div style={{ ...style, ...props.style }}>
        {props.children}
    </div>
}

export default Text;