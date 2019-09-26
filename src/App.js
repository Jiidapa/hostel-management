import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/configureStore';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './page/Home';
import Register from './page/Register';
import Hostel from './page/Hostel';
import Profile from './page/Profile';
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
              <Route path="/profile" component={Profile} />
              <Route path="/hostel/:id" component={Hostel} />
              <Route component={NotFound} />
            </Switch>
          </div>

        </Router>
      </PersistGate>
    </Provider>
  )
}

const withFooter = WrappedComponent => () => [
  <WrappedComponent key="1" />,
  <Footer key="2" />
];

const WrapperWithFooter = withFooter(App);

export default WrapperWithFooter;
