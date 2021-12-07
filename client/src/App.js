import "./App.scss";
import Home from "./Home";
import PrivateRoute from './Components/PrivateRoute';
import { AuthProvider } from "./Components/contexts/AuthContext";
import SignUpScreen from "./Components/SignupScreen/SignUpScreen";
import SigninPage from "./Components/SigninPage/SigninPage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";

function App() {

  return (
    <Router>
      <AuthProvider>
      <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/updateprofile" component={UpdateProfile} />
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
