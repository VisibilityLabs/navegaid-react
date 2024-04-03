import React, { useState } from "react";
import { Link } from "react-router-dom";
import { POST } from "../../api";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    POST("login", { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("submitted");
  };


  const appleSignIn = async ({ token, user, email, fullName }) => {
    try {
      const signInResponse = await apiSignInWithApple({ token, user, email, fullName });

      if (signInResponse && signInResponse.token) {
        await AsyncStorage.setItem('token', signInResponse.token);
        setIsAuthenticated(true);
        await verifyProStatus(); // Verify pro status upon successful Apple sign-in
      } else {
        console.error("signInResponse was not as expected: ", signInResponse);
        setErrorMessage('Unexpected response from server during Apple Sign-In.');
      }
    } catch (e) {
      console.error("Error during Apple Sign-In: ", e);
    }
  };
  const signInWithApple = async ({ token, user, email, fullName }) => {
    try {
      const response = await POST('apple-signin', {
        token,
        user,
        email,
        fullName
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  return (
    <div className="d-flex vw-100 vh-100">
      <div className="d-flex flex-column w-75 h-100  bd-highlight justify-content-center align-items-center">
        <h3 className="mb-5">Login to your Naivegaid account</h3>
        <form className="d-flex justify-content-center align-items-center flex-column" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group my-2">
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
          <Link
            to="/password"
            className="text-sm text-dark font-weight-lighter my-1"
            style={{ fontSize: "14px" }}
          >
            Forgot your Password?
          </Link>
          <button
            type="submit"
            className=" rounded px-2 py-1  text-white border-0 my-3"
            style={{ backgroundColor: "rgb(121, 22, 213)" }}
          >
            Login
          </button>
        </form>
        <h2>or</h2>

        <button
          type="submit"
          class=" rounded px-2 py-1  text-white border-0 my-3"
          style={{ backgroundColor: "rgb(200,50,50)" }}
        >
          Sign Up with Google
        </button>
        <button
          type="submit"
          class=" rounded px-2 py-1  text-white border-0 my-3"
          style={{ backgroundColor: "rgb(0, 0, 0)" }}
        >
          Sign Up with Apple
        </button>
      </div>
      <div className="d-flex w-25 h-100 bg-primary  bd-highlight login-sidepanel"></div>
    </div>
  );
};
