import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useForm } from "../Hooks/useForm"
import {BASE_URL} from "../Constants/Constants"
import { BackgroundLogin } from "../../Style"

function LoginPage() {
    
    const [body, onChange, clear] = useForm({email:"", password:""})
    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}login`, body)
        .then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log("ERROR");
        })
        clear();
    }
    // NAVEGAÇÃO//
const navigate= useNavigate();
const goToAdmin = () =>{
    navigate("/admin")
}
const goToLastPage =() =>{
    navigate(-1)
    // NAVEGAÇÃO//
  }
    return (
        <BackgroundLogin>
          <div className="login-form">
            <h1> LOGIN </h1>
            <form className="form" onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail:</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    value={body.email}
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
                    value={body.password}
                    onChange={onChange}
                    required
                    pattern="^.{3,}"
                />
            <div className="button">
                <button type="buton"  onClick={ goToLastPage }>Return</button>
                <button  onClick={ goToAdmin }>Login</button>
            </div>
            </form>
          </div>
        </BackgroundLogin>
    );
}
  
  export default LoginPage;
