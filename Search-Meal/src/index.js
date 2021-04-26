import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, NavLink} from 'react-router-dom';
import './index.css';
import Search from './Search';
import Click from './Click';


const App = () => (
    <Router>
      <main>
        <nav>
          <NavLink exact to="/">Search</NavLink>   
          <NavLink exact to="/click">Click</NavLink>                        

        </nav>
        <Route exact path="/" component={Search} />
        <Route exact path="/click" component={Click} />
      </main>
    </Router>
  )
  
ReactDOM.render(<Search />, document.getElementById('root')); // React Router
ReactDOM.render(<App />, document.getElementById('root'))

