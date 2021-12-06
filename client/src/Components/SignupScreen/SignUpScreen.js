import React from 'react'
import "./SignUpScreen.scss"

function SignUpScreen() {
  const register=(e)=>{
e.preventDefault();
  }

  const signIn=(e)=>{
    e.preventDefault();
      }

  return (
    <>
<div className="signUp">
<form className="signUp__form">
<h1 className="signUp__form--heading1">Sign In</h1>
<input className="signUp__form--input" placeholder="Email" type="email" />
<input className="signUp__form--input" placeholder="password" type="password" />
<button className="signUp__form--button" onClick={signIn } type="submit">Sign In</button>
<h4 className="signUp__form--heading4"><span className="signUp__form--span-heading4">New to MovieChat? </span><span className="signUp__form--spanlink" onClick={register}>Sign Up now.</span></h4>
</form>
</div>
</>
  )
}

export default SignUpScreen
