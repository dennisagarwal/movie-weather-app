import "./App.scss";
import Home from "./Home";
// import { useEffect } from "react";
// import LoginPage from './Components/LoginPage';
import PrivateRoute from './Components/PrivateRoute';
// import AuthButton from './Components/AuthButton';

import { AuthProvider } from "./Components/contexts/AuthContext";
import SignUpScreen from "./Components/SignupScreen/SignUpScreen";
import SigninPage from "./Components/SigninPage/SigninPage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {

  return (
    <Router>
      <AuthProvider>
      <Switch>
      <PrivateRoute exact path="/" component={Home} />
          <Route path="/signup" component={SignUpScreen} />
          <Route path="/login" component={SigninPage} />
          <Route path="/forgotpassword" component={ForgotPassword} />

      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
