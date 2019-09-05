import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/index';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './page/Home';
import Register from './page/Register';
import NotFound from './page/NotFound.js';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App;
