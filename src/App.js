import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Misc from './pages/misc';

import Menu from './pages/mobilemenu';

import Portfolio from './subpages/portfolio';
import Improv from './subpages/improv';
import Shuttlerank from './subpages/shuttlerank';
import Coldcall from './subpages/coldcall';
import Nomenclature from './subpages/nomenclature';
import Position from './subpages/SubPagePosition';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/misc" component={Misc} />

                <Route exact path="/menu" component={Menu} />

                <Route exact path="/projects/portfolio" component={Portfolio} />
                <Route exact path="/projects/improv" component={Improv} />
                <Route exact path="/projects/shuttlerank" component={Shuttlerank} />
                <Route exact path="/projects/coldcall" component={Coldcall} />
                <Route exact path="/projects/nomenclature" component={Nomenclature} />
                <Route exact path="/projects/position" component={Position} />

                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
