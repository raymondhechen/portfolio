import { Component } from 'react';

export default class ResumePage extends Component {
    componentDidMount() {
        window.location.href = process.env.PUBLIC_URL + 'resume.pdf';
    }

    render() {
        return null;
    }
}