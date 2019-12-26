import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Research from './pages/research';
import Projects from './pages/projects';
import page404 from './pages/404';

import './app.css'
import './transitions.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>

                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition 
                        key={location.key}
                        appear={true}
                        classNames="fade"
                        timeout={{enter: 300, exit: 0}}
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/research" component={Research}/>
                                <Route path="/projects" component={Projects}/>
                                <Route component={page404}/>
                            </Switch>
                        </CSSTransition>
                </TransitionGroup>
                )} />
            </BrowserRouter>
        )
    }
}

export default App
