import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ZoomPage from './pages/Zoom';
import CalendlyPage from './pages/Calendly';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/zoom" component={ZoomPage} />
            <Route exact path="/calendly" component={CalendlyPage} />
        </Switch>
    );
}

export default App;
