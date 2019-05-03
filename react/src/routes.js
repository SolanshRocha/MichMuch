import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import {
    Films,
    Contact
} from './Components/Films'


const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/all-films" component={Films} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))