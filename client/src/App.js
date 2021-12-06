import './App.scss';
import Home from './Home'
// import LoginPage from './Components/LoginPage';
// import PrivateRoute from './Components/PrivateRoute';
// import AuthButton from './Components/AuthButton';
import SigninPage from './Components/SigninPage/SigninPage';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
// import requests from './requests';
// export const API_URL = 'http://localhost:5000';
function App() {


  return (
     <Router>
      {/* <AuthButton /> */}
      {/* <li>
              <Link to="/Home">Home Page</Link>
            </li> */}
            <Switch>
      {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/login" component={SigninPage} />
              <Route path="/home" component={Home} />
      {/* <PrivateRoute path="/Home" component={Home} /> */}
      </Switch>

     </Router>
  );
}

export default App;

//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom