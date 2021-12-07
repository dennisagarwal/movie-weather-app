import React from "react";
import logo from "../../assets/logo/LogoMakr.png";
import { Link } from "react-router-dom";
import "./ForgotPassword.scss";
import { useRef, useState } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword} = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function register(e) {
    e.preventDefault();

    try {
      setMessage("")
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password");
      setLoading(false);
    }
  }

  return (
    <>
      <div className="forgotPassword">
        <img className="forgotPassword__logo" src={logo} alt="image logo" />
        <div className="forgotPassword__gradient"></div>
        <div className="forgotPassword__body">
          {error && (
            <div>
             {error}
            </div>
          )}
          {message && (
            <div>{message}
            </div>
          )}
          <form onSubmit={register} className="forgotPassword__form">
            <h1 className="forgotPassword__body--heading1">Reset Password</h1>
            <input
              ref={emailRef}
              className="forgotPassword__detail--forminput"
              placeholder="Email"
              type="email"
            />

            <button
              className="forgotPassword__detail--formbutton"
              disabled={loading}
              type="submit"
            >
              Reset Password
            </button>
            <h3 className="forgotPassword__body--heading3">
              <Link to="/signup" className="forgotPassword__form--link">Need An Account? Click here to Sign Up.</Link>
            </h3>
            <h3 className="forgotPassword__body--heading3">
              <Link to="/login" className="forgotPassword__form--link">Log In?</Link>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;

