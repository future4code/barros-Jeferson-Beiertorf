import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useForm } from "../Hooks/useForm"
import {BASE_URL} from "../Constants/Constants"
import { BackgroundLogin } from "../../Style"
import * as coordinate from "../Coordinator"

function LoginPage() {
    const navigate= useNavigate();
    
    const [form, onChange, clear] = useForm({email:"", password:""})
    const logIn = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}login`, form)
        .then((response)=>{
            console.log(response.data);
            localStorage.setItem("token", response.data.token)
            coordinate.goToAdmin(navigate)
        }).catch((error)=>{
            alert("Senha incorreta")
            console.log(error.message);
        })
        clear();
    }
    // NAVEGAÇÃO//
const goToLastPage =() =>{
    navigate(-1)
    // NAVEGAÇÃO//
  }
    return (
        <BackgroundLogin>
          <div className="login-form">
            <h1> LOGIN </h1>
            <form className="form" onSubmit={logIn}>
                <label htmlFor="email">E-mail:</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                
                <label htmlFor="password">Password:</label>
                <input 
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={onChange}
                    required
                    pattern="^.{3,}"
                />
            <div className="button">
                <button type="buton"  onClick={ goToLastPage }>Return</button>
                <button>Login</button>
            </div>
            </form>
          </div>
        </BackgroundLogin>
    );
}
  
  export default LoginPage;
