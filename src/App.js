import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage';

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
              <li>
                <Link to="/news">news</Link>
              </li>
              <li>
                <Link to="/users">users</Link>
              </li>
            </ul>
            </nav>
            <hr/>
            <Switch>
              <Route path="/" exact component={() => <h1>home page</h1>} />
              <Route path="/about" component={AboutPage}/>
              <Route path="/users/:userid" component={({match}) => {return <h1>hello user {match.params.userid}</h1>}} />
              <Route path="/users" component={() => <h1>users page</h1>} />
              <Route path="/news" component={() => <h1>news page</h1>} />
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
    );
  }
}

export default App;
