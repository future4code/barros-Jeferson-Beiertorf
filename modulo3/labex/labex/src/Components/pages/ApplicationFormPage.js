import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BackgroundAppForm } from "../../Style";
import CountrySelector from "../Hooks/useCountrySelector";



function ApplicationFormPage() {

  //estados dos inputs//
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [application, setApplication] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");
  //estados dos inputs//
  
  //eventos dos inputs//
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputAge = (e) => {
    setAge(e.target.value);
  };
  const handleInputApplication = (e) => {
    setApplication(e.target.value);
  };
  const handleInputOccupation = (e) => {
    setOccupation(e.target.value);
  };
  const handleInputCountry = (e) => {
    setCountry(e.target.value);
  }
  //eventos dos inputs//
  

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
            value={name}
            onChange={handleInputName}
            minLength="5"
            required
            />
          <input
            name="age"
            id="age"
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleInputAge}
            min="18"
            required
            />
          <input
            name="application"
            id="application"
            type="text"
            placeholder="Application Text"
            value={application}
            onChange={handleInputApplication}
            minLength="30"
            required
            />
          <input
            name="occupation"
            id="occupation"
            type="text"
            placeholder="Profession"
            value={occupation}
            onChange={handleInputOccupation}
            minLength="10"
            required
            />
          
          

          <select 
            name="country" 
            id="country"
            value={country} 
            onChange={handleInputCountry} 
            required>
            <option value="choose">Choose your planet!</option>
            <option value="Mercury">Mercury</option>
            <option value="Venus">Venus</option>
            <option value="Earth">Earth</option>
            <option value="Mars">Mars</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
            <option value="Uranus">Uranus</option>
            <option value="Neptune">Neptune</option>
          </select>
        </form>
        <div className="button"> 
          <button onClick={ goToLastPage }>Return</button>
          <button>Send</button>
        </div>
      </div>
    </BackgroundAppForm>
    );
  }
  
  export default ApplicationFormPage;