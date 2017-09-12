import React  from 'react';
import { Route } from 'react-router-dom'
import App from './components/App'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import LandingPage from './components/LandingPage'

export default (
  <Route path="/" component={Form1}>
    <Route path="/Form1" component={Form1}></Route>
    <Route path="/Form2" component={Form2}></Route>
    <Route path="/Form3" component={Form3}></Route>
  </Route>
);