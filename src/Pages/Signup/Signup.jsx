import React, { useState } from 'react'
import { POST } from '../../api';

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
       
          <button
            type="submit"
            className=" rounded px-2 py-1  text-white border-0 my-3"
            style={{ backgroundColor: "rgb(121, 22, 213)" }}
          >
            Sign Up with Email
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
  )
}
