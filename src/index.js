import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function preload(list) {
    for (var i = 0; i < list.length; i++) {
        var img = new Image();
        img.src = list[i];
    }
}

preload([
    "/images/DSC_0414-low.jpg",
    "/images/photos/DSC_0601.JPG",
    "/images/photos/20191018_180008.jpg",
    "/images/photos/20190623_192407.png",
    "/images/photos/DSC_0290.JPG",
    "/images/photos/20190816_232708.jpg",
    "/images/photos/IMG_6599.jpg",
    "/images/photos/20190629_190428.jpg",
    "/images/photos/DSC_0255.JPG",
    "/images/photos/DSC_0332.JPG",
    "/images/photos/IMG_7195.png",
    "/images/photos/IMG_1442.jpg",
    "/images/projects/coldcall.svg",
    "/images/projects/improv.svg",
    "/images/projects/nomenclature.svg",
    "/images/projects/position.svg",
    "/images/projects/portfolio.svg",
    "/images/projects/shuttlerank.svg",
    "/images/orgs/duke.svg",
    "/images/orgs/pingry.svg",
    "/images/orgs/pendo.svg",
    "/images/orgs/ul.svg",
    "/images/orgs/pearson.svg",
    ]
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
