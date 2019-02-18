import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={'/'} className="navbar-brand">An Idea A Day Can Bring Millions To Play!</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Index</Link>
              </li>
            </ul>
          </div>
          </nav> <br/>
          <h5 className='slogan'>Record an idea a day, come back and check them out later and hope for a winner!</h5> <br/>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <h1  textalign="center">Basic Idea: </h1>
            <p className="lead">No Idea is dumb. No idea is worthless. By coming in and recording your ideas daily you have an instant creative bank of idea's to help spurn new ones. Users should read an old idea a day and try to impove it in some way. By writing down new ideas and reading old ones maybe the next the big creation will be yours! </p>
            </div>
          </div>
          <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
