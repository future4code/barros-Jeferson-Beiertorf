import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BackgroundAppForm } from "../../Style";
import CountrySelector from "../Hooks/useCountrySelector";
import { useForm } from "../Hooks/useForm";
import {axios} from "axios"
import { BASE_URL } from "../Constants/Constants";


// https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply
function ApplicationFormPage() {

    
  const [form, onChange, clear] = useForm({email:"", password:""})
  const ApplicationForm = (event) => {
      event.preventDefault()
      axios.post(`${BASE_URL}trips/:id/apply`, form)
      .then((response)=>{
          console.log(response.data);
      }).catch((error)=>{
          console.log(error.message);
      })
      clear();
  }
  // //estados dos inputs//
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [application, setApplication] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [country, setCountry] = useState("");
  // //estados dos inputs//
  
  // //eventos dos inputs//
  // const handleInputName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleInputAge = (e) => {
  //   setAge(e.target.value);
  // };
  // const handleInputApplication = (e) => {
  //   setApplication(e.target.value);
  // };
  // const handleInputOccupation = (e) => {
  //   setOccupation(e.target.value);
  // };
  // const handleInputCountry = (e) => {
  //   setCountry(e.target.value);
  // }
  // //eventos dos inputs//
  

// BOTÕES DE NAVEGAÇÃO// 
const navigate= useNavigate();
const goToLastPage =() =>{
  navigate(-1)
  // BOTÕES DE NAVEGAÇÃO// 
  }
    return (
    <BackgroundAppForm>  
      <div className="form-register">
        <h1>Register</h1>
        <form >
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={onChange}
            pattern="^.{3,}"
            required
            />
          <input
            name="age"
            id="age"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={onChange}
            min={18}
            required
            />
          <input
            name="application"
            id="application"
            type="text"
            placeholder="Application Text"
            value={form.application}
            onChange={onChange}
            pattern="^.{30,}"
            required
            />
          <input
            name="occupation"
            id="occupation"
            type="text"
            placeholder="Profession"
            value={form.occupation}
            onChange={onChange}
            pattern="^.{10,}"
            required
            />
          <label name="country" id="country">Select your country</label>
          <CountrySelector
            name="country" 
            id="country"
            value={form.country} 
            onChange={onChange} 
            required>
          </CountrySelector>
        <div className="button"> 
          <button type="button" onClick={ goToLastPage }>Return</button>
          <button onClick={ApplicationForm}>Send</button>
        </div>
        </form>
      </div>
    </BackgroundAppForm>
    );
  }
  export default ApplicationFormPage;