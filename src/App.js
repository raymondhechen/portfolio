import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ZoomPage from './pages/Zoom';
import CalendlyPage from './pages/Calendly';
import ResumePage from './pages/Resume';
import IntroPage from './pages/Intro';

function App() {
    return (
        <Switch>
            <Route exact path="/zoom" component={ZoomPage} />
            <Route exact path="/calendly" component={CalendlyPage} />
            <Route exact path="/resume" component={ResumePage} />
            <Route exact path="/intro" component={IntroPage} />
            <Route path="/" component={HomePage} />
        </Switch>
    );
}

export default App;
