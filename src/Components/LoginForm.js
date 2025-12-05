import React from "react";
import { useState } from 'react';


const LoginForm = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [loginSubmit, setSubmit] = useState(false);
        
    const emailOnChange = (e) => {
        setEmail(e.target.value);
    };

    const handleLogin = (e) => {
      e.preventDefault();
      setSubmit(true);
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

                    {loginSubmit && !email.includes("@") && (
                      <div className="alert alert-danger">Email is invalid</div>
                        ) }
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
                  {loginSubmit && password.length < 8 && (
                    <div className="alert alert-danger" > Password is week </div>
                  )}
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    name="pwd"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <button type="submit" className="btn btn-default" onClick={handleLogin} >
                  Log In
                </button>
              </form>
            </div>
          </div>
    </div>
  )
}

export default LoginForm
