import React, { useState } from "react";
import { Footer } from "../../Components";
import { AccountsTabs } from "./AccountsTabs";
import { AccountSettings } from "./AccountSettings";

export const Accounts = () => {
  const [isAccountActive, setIsAccountActive] = useState(true);
  return (
    <>
      <div className="vw-100 d-flex justify-content-end flex-column align-items-end p-3 m-0 ">
        <div
          className="border-2 border-dark p-1 m-0 border"
          onClick={() => setIsAccountActive(true)}
        >
          Accounts
        </div>
        <div
          className="border-2 border-dark p-1 m-0 border d-flex justify-content-center"
          style={{ width: "160px" }}
          onClick={() => setIsAccountActive(false)}
        >
          Account Settings
        </div>
        <div
          className="border-2 border-dark p-1 m-0 border d-flex justify-content-center"
          style={{ width: "160px" }}
        >
          Logout
        </div>
      </div>
      {isAccountActive?
      <AccountsTabs />:<AccountSettings/>}
      <Footer />
    </>
  );
};
