import React, { useState } from "react";
import { Footer } from "../../Components";
import { AccountsTabs } from "./AccountsTabs";
import { AccountSettings } from "./AccountSettings";
import {Outlet} from 'react-router-dom'
import './accounts.css';
export const Accounts = () => {
  const [isAccountActive, setIsAccountActive] = useState(true);
  return (
    <>
      <div className="account-header d-flex justify-content-end flex-column align-items-end p-3 m-0 ">
        <div
          className="cursor-pointer border-2 border-dark p-1 m-0 border"
          style={{cursor:'pointer'}}
          onClick={() => setIsAccountActive(true)}
        >
          Accounts
        </div>
        <div
          className="cursor-pointer border-2 border-dark p-1 m-0 border d-flex justify-content-center"
          style={{ width: "160px" , cursor:'pointer'}}
          onClick={() => setIsAccountActive(false)}
        >
          Account Settings
        </div>
        <div
          className="cursor-pointer border-2 border-dark p-1 m-0 border d-flex justify-content-center"
          style={{ width: "160px" , cursor:'pointer'}}
        >
          Logout
        </div>
      </div>
      {isAccountActive ? <AccountsTabs /> : <AccountSettings />}
      {/* <Outlet/> */}
      <Footer />
    </>
  );
};
