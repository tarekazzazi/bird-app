import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import UserPage from "./UserPage/UserPage";
import Footer from "./Footer";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="/login" />
          {/* 
          <Route exact path="/about">
            <AboutPage />
          </Route> */}

          <ProtectedRoute exact path="/user">
            <UserPage />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              //   If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              //   Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              //   If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              //   Otherwise, show the registeration page
              <RegisterPage />
            )}
          </Route>
          {/* If no routes are matched, show a 404 error */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
