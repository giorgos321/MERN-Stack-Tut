import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Landing from './components/layout/Landing';
import CreateProfile from './components/profile-forms/CreateProfile';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Privateroute from './components/routing/Privateroute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/layout/Alert';
import EditProfile from './components/profile-forms/EditProfile';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment className='App'>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Privateroute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <Privateroute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <Privateroute exact path='/dashboard' component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
