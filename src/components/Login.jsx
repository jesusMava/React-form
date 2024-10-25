import { useRef, useState } from "react";

export default function Login() {
  const email = useRef()
  const pwd = useRef()

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value
    const enteredPwd = pwd.current.value
    console.log(enteredEmail, enteredPwd)
  }

  return (
    // onSubmit is for doesnt reload the page 
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email" 
            type="email"
            name="email"
            ref={email}
            />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
          ref={pwd}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* type button doesnt send the email */}
        {/* <button type="button" className="button" onClick={handleSubmit}>Login</button> */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
