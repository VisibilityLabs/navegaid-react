import React from 'react'

export const AccountSettings = () => {
  return (
    <div className='m-5'>
      <h5>Account Settings</h5>
      <form className="d-flex justify-content-center align-items-start  flex-column">
          <div className="form-group my-2 d-flex flex-column align-items-center ">
            <input
              type="text"
              className="form-control m-2"
              placeholder="Name"
            />
             <input
              type="password"
              className="form-control m-2"
              placeholder="Password"
            />
             <input
              type="password"
              className="form-control m-2"
              placeholder="Password"
            />
          </div>
          <div className='d-flex align-items-center'>
            <div className='rounded m-2 btn border border-2 border-dark bg-light '>Cancel</div>
            <div className='rounded m-2 btn  bg-primary text-white'>Update Information</div>
          </div>

          <div className="form-group my-2 d-flex justify-content-center my-5 flex-column alig-items-center">
          <input
              type="text"
              className="form-control"
              placeholder="Email"
            />
            <div className='rounded m-2 btn  bg-primary  text-white'>Update Email</div>
            </div>

            <div className='d-flex flex-column'>
            <div>You are about to delete your
              <br/> account 
              and all your information</div>
            <div className='rounded m-2 btn  bg-danger text-white'>Delete Account</div>
            </div>
          </form>
    </div>
  )
}
