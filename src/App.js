import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AboutPage from './components/AboutPage'

class App extends Component {
  render() {
    return (
          <div>
            <nav>
            <ul>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/">home</Link>
              </li>
            </ul>
            </nav>
            <hr/>
            <Route path="/" exact component={() => <h1>home page</h1>} />
            <Route path="/about" component={AboutPage}/>
          </div>
    );
  }
}

export default App;
