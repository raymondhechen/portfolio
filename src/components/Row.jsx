import React from 'react';
import { useMedia } from 'react-media';

const Row = (props) => {
    var style = {
        display: "flex",
    }
    const isSmallScreen = useMedia({ query: "(max-width: 768px)" });

    if (isSmallScreen) {
        style = {
            padding: "0 7.5vw",
        }
    }

    return <div style={{ ...style, ...props.style }}>
        {props.children}
    </div>
}

export default Row;