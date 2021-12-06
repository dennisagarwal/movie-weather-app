import React, { Component } from 'react';
import logo from "../../assets/logo/LogoMakr.png"
import { useState } from 'react';
import "./SigninPage.scss"
import Login from '../LoginPage/LoginPage';
import SignUpScreen from '../SignupScreen/SignUpScreen';

function SigninPage(){
  const [signIn, setSignIn] = useState(false);
// class SigninPage extends Component {

    return (

      <div className="signin">
       {/* <Login onClick={this.login} /> */}
     <img className="signin__logo" src={logo} alt="image logo" />
        {/* <p>You must log in to view the page</p> */}
        <button onClick={()=>setSignIn(true)} className="signin__button" >Sign in </button>
        <div className="signin__gradient"></div>
        <div className="signin__body">
        {signIn?(
          <SignUpScreen />
        ):(
        <>
          <h1 className="signin__body--heading1">Unlimited movies, TV</h1>
          <h1 className="signin__body--heading1">shows and more.</h1>
        <h2 className="signin__body--heading2">Watch Anywhere.Cancel anytime.</h2>
        <h3 className="signin__body--heading3">Ready to watch?Enter your email to create or restart your membership</h3>
        <div className="signin__detail">
        <form className="signin__detail--form">
          <input className="signin__detail--forminput" type="email" placeholder="Email Address" />
          <button onClick={()=>setSignIn(true)} className="signin__detail--formbutton">GET STARTED</button>
        </form>
        </div>
        </>
        )}
        </div>
      </div>
    );
  }

export default SigninPage;
