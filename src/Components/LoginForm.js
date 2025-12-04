import React from "react";
import { useState } from 'react';

const LoginForm = () => {
    const [email , setEmail] = useState("");
        
    const emailOnChange = (e) => {
        setEmail(e.target.value);
    };

  return (
    <div>
      <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-log-in"></span>
                Log In
              </h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                    <h1>{email}</h1>
                  <input
                    type="text"
                    className="form-control"
                    id="uid"
                    name="uid"
                    placeholder="Username"
                    onChange={emailOnChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    name="pwd"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-default">
                  Log In
                </button>
              </form>
            </div>
          </div>
    </div>
  )
}

export default LoginForm
