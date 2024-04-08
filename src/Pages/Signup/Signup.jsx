import React, { useState } from 'react'
import { POST } from '../../api';
import AppleLogin from 'react-apple-login';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


export const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
POST("register", { email, password })
.then((res) => {
  console.log(res); 
})
.catch((err) => {
  console.log(err);
});
    console.log("submitted");
  };

  return (
    <div className="d-flex vw-100 vh-100">
      <div className="d-flex flex-column w-75 h-100  bd-highlight justify-content-center align-items-center">
        <h3 className="mb-5">Create a new Naivegaid account</h3>
        <form className="d-flex justify-content-center align-items-center flex-column" onSubmit={(e)=>onSubmit(e)} >
          <div className="form-group my-2">
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
       
          <button
            type="submit"
            className=" rounded px-2 py-1  text-white border-0 my-3"
            style={{ backgroundColor: "rgb(121, 22, 213)" }}
          >
            Sign Up with Email
          </button>
        </form>
        <h2>or</h2>
        <GoogleOAuthProvider clientId="http://264190521545-pp055k4jcrid04584koavs924ck5ua78.apps.googleusercontent.com">
          {/* Sign Up with Google */}
          <GoogleLogin
            onSuccess={response => {
              console.log(response);
            }}
            onError={response => {
              console.log(response);
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
        <AppleLogin
          clientId="com.example.client-web"
          redirectURI="https://example.com"
          scope="email name"
          usePopup={true}
          responseMode="query"
          
          render={renderProps => (
            <button
              type="submit"
              class=" rounded px-2 py-1  text-white border-0 my-3"
              style={{ backgroundColor: 'rgb(0, 0, 0)' }}
              onClick={renderProps.onClick}
            >
              Sign in with Apple
            </button>
          )}
          callback={response => {
            // console.log(response);
            // if (!response.authorization) return console.log('error');
            // signInWithApple({
            //   token: response.authorization.id_token,
            //   user: response.user,
            //   email: response.email,
            //   fullName: response.fullName,
            // });
          }}
        />
      </div>
      <div className="d-flex w-25 h-100 bg-primary  bd-highlight login-sidepanel"></div>
    </div>
  )
}
