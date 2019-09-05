import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/configureStore';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './page/Home';
import Register from './page/Register';
import NotFound from './page/NotFound.js';

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  )
}

export default App;
