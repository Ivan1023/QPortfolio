import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.scss';
import Nav from './Components/Nav'
import Footer from './Components/Footer'

import Main from './Pages/Main'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
// import Blog from './Pages/Blog'
import BlogDetail from './Pages/BlogDetails'

require('dotenv').config()

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/About" component={About}/>
          <Route path="/Portfolio" component={Portfolio}/>
          <Route path="/Project/:value?" component={Project}/>
          <Route path="/Contact" component={Contact}/>
          {/* <Route path="/Blog" component={Blog}/> */}
          <Route path="/BlogDetails/:value?" component={BlogDetail}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

