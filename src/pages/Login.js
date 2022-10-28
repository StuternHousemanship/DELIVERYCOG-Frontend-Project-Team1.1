import React from 'react'

function Login() {
  return (
    <div className="login-pg ">
          <form action="submit">
            <h2>Create account</h2>
            <div className="input-field1">
              <label className="label1" htmlFor="firstname">
                First name
              </label>
              <input
                className="input1"
                type="text"
                id="firstname"
                name="firstname"
                autoComplete="firstname"
                required
              />
            </div>
            <div className="input-field2">
              <label className="label2" htmlFor="lastname">
                Last name
              </label>
              <input
                className="input2"
                type="text"
                id="lastname"
                name="lastname"
                autoComplete="lastname"
                required
              />
            </div>
            <div className="input-field3">
              <label className="label3" htmlFor="email">
                Email
              </label>
              <input
                className="input3"
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="input-field4">
              <label className="label4" htmlFor="mobile">
                Mobile
              </label>
              <input
                className="input4"
                type="tel"
                id="mobile"
                name="mobile"
                autoComplete="mobile"
                required
              />
            </div>
            <div className="input-field5">
              <label className="label5" htmlFor="password">
                Last name
              </label>
              <input
                className="input5"
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                required
              />
            </div>
            <div className="input-field6">
              <label className="label6" htmlFor="re-enterPassword">
                Re-enter Password
              </label>
              <input
                className="input6"
                type="password"
                id="re-enterPassword"
                name="re-enterPassword"
                autoComplete="re-enterPassword"
                required
              />
            </div>
            <div className="input-field7">
              <input
                className="input7"
                type="button"
                id="submit-button"
                name="button"
                value="Continue"
              />
            </div>
            <a className="form-footer" href="#">
              Log into existing account
            </a>
         </form>
        </div>
      
      );
}

export default Login