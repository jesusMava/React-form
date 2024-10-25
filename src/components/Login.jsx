import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    pwd: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
  
    console.log(enteredValues)
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(preValues => ({
      ...preValues,
      [identifier]: value
    }))
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
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
            />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
             onChange={(event) => handleInputChange('pwd', event.target.value)}
             value={enteredValues.pwd}
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
