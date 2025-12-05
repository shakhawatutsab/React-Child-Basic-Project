import React from "react";
import { useState } from 'react';


const LoginForm = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
        
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
                    {email.includes("@") ? (<div className="alert alert-success">email is invalid</div>) : (<div className="alert alert-danger">email is valid</div>)}
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
                  {password.length < 8 ?(<div className="alert alert-danger" > Password is week </div>) : (<div className="alert alert-success">Password is good</div>)}
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    name="pwd"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
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
