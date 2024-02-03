import React, { useState } from "react";
import { Link } from "react-router-dom";

export const PasswordRecovery = () => {
  const [request, setRequest] = useState(false);
  return (
    <div className="d-flex vw-100 vh-100">
      <div className="d-flex flex-column w-75 h-100  bd-highlight justify-content-center align-items-center">
        {!request ? (
          <>
            <h3 className="mb-5">Password Recovery</h3>
            <form className="d-flex justify-content-center align-items-center flex-column">
              <div className="form-group my-2">
                <input
                  type="email"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <button
                onClick={() => setRequest(!request)}
                type="submit"
                className=" rounded px-2 py-1  text-white border-0 my-3"
                style={{ backgroundColor: "rgb(121, 22, 213)" }}
              >
                Submit Request
              </button>
            </form>
          </>
        ) : (
          <h3>Please check your inbox</h3>
        )}
        <Link
          to="/login"
          className="text-sm text-dark font-weight-lighter my-1"
          style={{ fontSize: "14px" }}
        >
          Back to Login
        </Link>
      </div>
      <div className="d-flex w-25 h-100 bg-primary  bd-highlight">2</div>
    </div>
  );
};
