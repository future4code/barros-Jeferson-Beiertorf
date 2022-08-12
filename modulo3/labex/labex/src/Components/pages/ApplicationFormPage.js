import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';



// {
//   "name": "Jeff",
//   "age": 30,
//   "applicationText": "Sei lá",
//   "profession": "Vivendo da arte que a natureza dá",
//   "country": "Brasil"
// }

function ApplicationFormPage() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [application, setApplication] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");

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


// BOTÕES DE NAVEGAÇÃO// 
const navigate= useNavigate();
const goToLastPage =() =>{
  navigate(-1)
  // BOTÕES DE NAVEGAÇÃO// 
  }
    return (
      
      <div>
        <h1>ApplicationFormPage</h1>
        <form >
        <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleInputName}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleInputAge}
          />
          <input
            type="text"
            placeholder="Application Text"
            value={application}
            onChange={handleInputApplication}
          />
          <input
            type="text"
            placeholder="Profession"
            value={occupation}
            onChange={handleInputOccupation}
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
        
        <button onClick={ goToLastPage }>Return</button>
        <button>Send</button>
        </div>
    );
  }
  
  export default ApplicationFormPage;