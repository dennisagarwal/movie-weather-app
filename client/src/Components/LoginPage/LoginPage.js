// import React, { Component } from 'react';
// import github from "../../assets/logo/GitHub-Mark.png"
// import "./LoginPage.scss"
// import { API_URL } from '../../App';



// class Login extends Component {
//   login = () => {
//     // Change location to /login server route while sending a redirect url
//     // If user is coming from a page different than /, get the page they
//     // are coming from, otherwise redirect to / after login
//     const { from } = this.props.location.state || { from: { pathname: '/' } };
//     // const { from } = this.props.location.state || { from: { pathname: '/Home' } };
//     const url = `${window.location.protocol}//${window.location.host}${from.pathname}`;
//     window.location = `${API_URL}/login/?from=${url}`;
//   };

//   render() {
//     return (
//       <div className="login">
//         <button className="login__button" onClick={this.login}>Log in  <img className="login__button--img"  src={github}/></button>
//       </div>
//     );
//   }
// }

// export default Login;
