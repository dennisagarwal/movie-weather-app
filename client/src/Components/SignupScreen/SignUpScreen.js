import React from "react";
import logo from "../../assets/logo/LogoMakr.png";
import "./SignUpScreen.scss"
import { useRef, useState } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function SignUpScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create Error");
      setLoading(false);
    }
  }

  return (
    <>
      <div className="signUp">
        <img className="signUp__logo" src={logo} alt="image logo" />
        <div className="signUp__gradient"></div>
        <div className="signUp__body">
          <h1 className="signUp__body--heading1">Unlimited movies, TV</h1>
          <h1 className="signUp__body--heading1">shows and more.</h1>
          <h2 className="signUp__body--heading2">
            Watch Anywhere.Cancel anytime.
          </h2>
          <h3 className="signUp__body--heading3">Create Your Account</h3>

          {error && <div>{error}</div>}
          <form onSubmit={register} className="signUp__form">
            <h1 className="signUp__form--heading1">Sign Up</h1>
            <input
              ref={emailRef}
              className="signUp__detail--forminput"
              placeholder="Email"
              type="email"
            />
            <input
              ref={passwordRef}
              className="signUp__detail--forminput"
              placeholder="Password"
              type="password"
            />
            <input
              ref={passwordConfirmRef}
              className="signUp__detail--forminput"
              placeholder="Confirm Password"
              type="password"
            />
            <button
              className="signUp__detail--formbutton"
              disabled={loading}
              type="submit"
            >
              Sign Up
            </button>
            <h3 className="signUp__body--heading3">
              <span className="signUp__form--heading3">
                Already have an account?{" "}
              </span>
            </h3>
            <h3 className="signin__body--heading3">
              <Link to="/login" className="signin__form--link">
                Login now.
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpScreen;
