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
          <form onSubmit={register} className="signin__form">
            <h1 className="signin__form--heading1">Log In</h1>
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
              <span className="signin__form--heading3">Need An Account ?</span>
              <Link to="/signup" className="signin__form--link">Click here to Sign Up.</Link>
            </h3>
            <h3 className="signin__body--heading3">
              <Link className="signin__form--link" to="/forgetpassword">Forgot Password?</Link>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
}

export default SigninPage;
