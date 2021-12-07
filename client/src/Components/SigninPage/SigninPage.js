// import {auth} from '../../firebase';
import React from "react";
import logo from "../../assets/logo/LogoMakr.png";
import { Link, useHistory } from "react-router-dom";
import "./SigninPage.scss";
import { useRef, useState } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

function SigninPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
      setLoading(false);
    }
  }

  return (
    <>
      <div className="signin">
        <img className="signin__logo" src={logo} alt="image logo" />
        <div className="signin__gradient"></div>
        <div className="signin__body">
          <h1 className="signin__body--heading1">Unlimited movies, TV</h1>
          <h1 className="signin__body--heading1">shows and more.</h1>
          <h2 className="signin__body--heading2">
            Watch Anywhere.Cancel anytime.
          </h2>
          <h3 className="signin__body--heading3">Welcome to your Account</h3>

          {error && (
            <div>{error}
            </div>
          )}
          <form onSubmit={register} className="signUp__form">
            <h1 className="signin__body--heading3">Log In</h1>
            <input
              ref={emailRef}
              className="signin__detail--forminput"
              placeholder="Email"
              type="email"
            />
            <input
              ref={passwordRef}
              className="signin__detail--forminput"
              placeholder="Password"
              type="password"
            />

            <button
              className="signin__detail--formbutton"
              disabled={loading}
              type="submit"
            >
              Log In
            </button>
            <h3 className="signin__body--heading3">
              <span className="signin__body--heading3">Need An Account?</span>
              <Link to="/signup">Click here to Sign Up.</Link>
            </h3>
            <h3 className="signin__body--heading3">
              <Link to="/forgetpassword">Forgot Password?</Link>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
}

export default SigninPage;

// import React, { Component } from 'react';
// import logo from "../../assets/logo/LogoMakr.png"
// import { useState } from 'react';
// import "./SigninPage.scss"
// import Login from '../LoginPage/LoginPage';
// import SignUpScreen from '../SignupScreen/SignUpScreen';

// function SigninPage(){
//   const [signIn, setSignIn] = useState(false);
// // class SigninPage extends Component {

//     return (

//       <div className="signin">
//        {/* <Login onClick={this.login} /> */}
//      <img className="signin__logo" src={logo} alt="image logo" />
//         {/* <p>You must log in to view the page</p> */}
//         <button onClick={()=>setSignIn(true)} className="signin__button" >Sign in </button>
//         <div className="signin__gradient"></div>
//         <div className="signin__body">
//         {signIn?(
//           <SignUpScreen />
//         ):(
//         <>
//           <h1 className="signin__body--heading1">Unlimited movies, TV</h1>
//           <h1 className="signin__body--heading1">shows and more.</h1>
//         <h2 className="signin__body--heading2">Watch Anywhere.Cancel anytime.</h2>
//         <h3 className="signin__body--heading3">Ready to watch?Enter your email to create or restart your membership</h3>
//         <div className="signin__detail">
//         <form className="signin__detail--form">
//           <input className="signin__detail--forminput" type="email" placeholder="Email Address" />
//           <button onClick={()=>setSignIn(true)} className="signin__detail--formbutton">GET STARTED</button>
//         </form>
//         </div>
//         </>
//         )}
//         </div>
//       </div>
//     );
//   }

// export default SigninPage;
