import logo from "../../assets/logo/LogoMakr.png";
import "./UpdateProfile.scss";
import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function register(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }


  return (
    <>
      <div className="signUp">
        <img className="signUp__logo" src={logo} alt="image logo" />
        <div className="signUp__gradient"></div>
        <div className="signUp__body">
          {error && <div>{error}</div>}
          <form onSubmit={register} className="signUp__form">
            <h1 className="signUp__body--heading3">Update Profile</h1>
            <input
              ref={emailRef}
              required defaultValue={currentUser.email}
              className="signUp__detail--forminput"
              placeholder="Email"
              type="email"
            />
            <input
              ref={passwordRef}
              className="signUp__detail--forminput"
              type="password"
              placeholder="Leave blank to keep the same"
            />
            <input
              ref={passwordConfirmRef}
              className="signUp__detail--forminput"
              type="password"
              placeholder="Leave blank to keep the same"
            />
            <button
              className="signUp__detail--formbutton"
              disabled={loading}
              type="submit"
            >
              Update
            </button>
            <h3 className="signUp__body--heading3">
              <Link to="/">Cancel</Link>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
