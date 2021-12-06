import "./App.scss";
import Home from "./Home";
// import { useEffect } from "react";
// import LoginPage from './Components/LoginPage';
// import PrivateRoute from './Components/PrivateRoute';
// import AuthButton from './Components/AuthButton';

import { AuthProvider } from "./Components/contexts/AuthContext";
import SignUpScreen from "./Components/SignupScreen/SignUpScreen";
import SigninPage from "./Components/SigninPage/SigninPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import { auth } from "./firebase";
// import requests from './requests';
// export const API_URL = 'http://localhost:5000';
function App() {
  // const user=null;

  // useEffect(()=>{
  //   const unsubscribe = auth.onAuthStateChanged(userAuth=>{
  // if(userAuth){
  //   console.log(userAuth)
  // }else{
  // }

  // })
  // return()=>unsubscribe
  //   },[])
  return (
    <Router>
      <AuthProvider>
      <Switch>
      <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUpScreen} />
          <Route path="/login" component={SigninPage} />
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
