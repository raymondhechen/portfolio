import React from 'react';
import { Link } from 'react-router-dom';

const StyledLink = (props) => {
    var style = {
        textDecoration: "none",
        color: "#222",
    }

    if (props.external) {
        return <a style={{ ...style, ...props.style }} href={props.to} target='_blank' rel="noopener noreferrer">
            {props.children}
        </a>
    }

    return <Link style={{ ...style, ...props.style }} to={props.to}>
        {props.children}
    </Link>
}

export default StyledLink;