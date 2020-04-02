import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Student from './components/Student'
import Error from './components/Error'
import Redirect from './components/Redirect'
import Navigation from './components/Navigation'
import customHistory from './components/History'

function App() {
  return (
    <BrowserRouter history={customHistory}>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/student/:studentname/:studentno?" component={Student} />
          <Route path="/redirect" component={Redirect} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
