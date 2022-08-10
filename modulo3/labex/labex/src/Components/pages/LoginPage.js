import React from "react";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate= useNavigate();

  const goToAdmin = () =>{
    navigate("/admin")
  }

  const goToLastPage =() =>{
    navigate(-1)
  }
    return (
      <div className="user-login">
        <h1 className="user-login__title">LOGIN</h1>
        <form>
          <div className="user-login__form-control">
            <label htmlFor="user">User</label>
            <input id="user" type="text" name="user"/>
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">password</label>
            <input id="password" type="password" name="password"/>
          </div>
          <div>
            <button onClick={ goToLastPage }>Return</button>
            <button onClick={ goToAdmin }>Login</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default LoginPage;