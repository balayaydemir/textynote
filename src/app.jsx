import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { magic } from './lib/magic';
import { UserContext } from './lib/UserContext.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Profile from './components/profile.jsx';
import Callback from './components/callback.jsx';
import Layout from './components/layout.jsx';


export default props => {
  const [user, setUser] = useState();

  // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, set it to {user: null}
  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      return isLoggedIn
        ? magic.user.getMetadata().then((userData) => setUser(userData))
        : setUser({ user: null });
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <UserContext.Provider value={[user, setUser]}>
          <Layout>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
            <Route path='/callback' component={Callback} />
          </Layout>
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}