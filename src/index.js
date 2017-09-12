import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import rootReducer from './reducers';
import LandingPage from './components/LandingPage'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'


const store = (function(initialState) {
  return createStore(rootReducer, initialState);
})()

render(
  <Provider store={store}>
    <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/form1" component={Form1}/>
          <Route path="/form2" component={Form2}/>
          <Route path="/form3" component={Form3}/>
        </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
