import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';

import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';

function App() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/blog/:title' component={BlogPage} />
        </BrowserRouter>
    );
}

export default App;
