import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import WritingPage from './pages/Writing';
import ZoomPage from './pages/Links/Zoom';
import CalendlyPage from './pages/Links/Calendly';
import ResumePage from './pages/Links/Resume';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 10vh 15vw;
    box-sizing: border-box;
    width: 100vw;
    min-height: 100vh;
`;

function App() {
    return (
        <Container>
            <Switch>
                <Route exact path="/zoom" component={ZoomPage} />
                <Route exact path="/calendly" component={CalendlyPage} />
                <Route exact path="/resume" component={ResumePage} />
                <Route path="/writing" component={WritingPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Container>
    );
}

export default App;
