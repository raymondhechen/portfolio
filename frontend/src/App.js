import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import WritingPage from './pages/Writing';
import PostPage from './pages/templates/Post';
import ZoomPage from './pages/links/Zoom';
import CalendlyPage from './pages/links/Calendly';
import ResumePage from './pages/links/Resume';
import PhotographyPage from './pages/Photography';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 10vh 15vw;
    box-sizing: border-box;
    width: 100vw;
    min-height: 100vh;
    @media (max-width: 800px) {
        padding: 10vh 10vw;
    }
    @media (max-width: 500px) {
        padding: 7.5vh 5vw;
    }
`;

function App() {
    return (
        <Container>
            <Switch>
                <Route exact path="/zoom" component={ZoomPage} />
                <Route exact path="/calendly" component={CalendlyPage} />
                <Route exact path="/resume" component={ResumePage} />
                <Route exact path="/writing/:postname" component={PostPage} />
                <Route path="/writing" component={WritingPage} />
                <Route path="/photography" component={PhotographyPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Container>
    );
}

export default App;
