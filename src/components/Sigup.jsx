import { useState } from "react";

export default function Signup() {
  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target); //it's a function from  the browser to get easily data inside a form
        // fd.get('email') // accede a la propiedad name del form\
        //para evitar usar fd.get(<name>) creamos un objeto.fromEntries y los datos de entrada
        // seran los del form
        const acqusitionChannel = fd.getAll('acquisition')// se usa cuando tienes muchos checkbox, ya q el Object.fromEntries
        //no puede acceder a ellos debido a que tienen el mismo name<label>
        const data = Object.fromEntries(fd.entries()) // te crea un hash key, value con los valores del form
        data.acquisition = acqusitionChannel
        //password is the name of the input in his property name
        if(data.password !== data.confirm-password){
          return setPasswordAreNotEqual(true)
        }
        console.log(data)

        event.target.reset();// reset the form also you can do it with the type='reset' in the btn<label>
    }
    return (
      <form onSubmit={handleSubmit}>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
  
        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" />
          </div>
  
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
            />
            <div className="control-error">
              {passwordAreNotEqual && <p>Password mush match.</p>}
            </div>
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>
  
          <div className="control">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>
  
          <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    );
  }