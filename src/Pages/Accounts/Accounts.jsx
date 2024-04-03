import React, { useState } from "react";
import { Footer } from "../../Components";
import { AccountsTabs } from "./AccountsTabs";
import { AccountSettings } from "./AccountSettings";
import {Outlet, useNavigate} from 'react-router-dom'
import './accounts.css';
export const Accounts = () => {
  const navigate=useNavigate()
  const redirectToSettings = (e) => {
    e.preventDefault();
    navigate('settings')
  }
  return (
    <>
      <div className="account-header">
        <div className="accounts-logo">
          <img src="https://via.placeholder.com/50" alt="logo" />
        </div>
        <div className="accounts-dropdown">
          {/* create a bootstrap dropdown with account as the dropdown title and account settings and logout as the main  options */}
          <div className="dropdown">
            <button
              className="btn btn-secondary "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => redirectToSettings(e)}>
                  Account Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
            </div>
            
        </div>
      </div>
      {/* {isAccountActive ? <AccountsTabs /> : <AccountSettings />} */}
      <Outlet/>
      <Footer />
    </>
  );
};
