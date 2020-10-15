import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AuthService from './services/AuthService';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/home">
          <HomePage />
        </ProtectedRoute>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function ProtectedRoute({ children, ...rest }) {
  let loggedIn = AuthService.isUserLoggedIn();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}