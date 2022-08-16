import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import {  BackgroundCreateTrip } from "../../Style";
import 'react-datepicker/dist/react-datepicker.css'



function CreateTripPplanet() {
  //estados dos inputs//
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  //estados dos inputs//
  
  //eventos dos inputs//
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputPlanet = (e) => {
    setPlanet(e.target.value);
  };
  const handleInputDate = (e) => {
    setDate(e.target.value);
  };
  const handleInputDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleInputDurationInDays = (e) => {
    setDurationInDays(e.target.value);
  }
  //eventos dos inputs//
  

// BOTÕES DE NAVEGAÇÃO// 
const navigate= useNavigate();
const goToLastPplanet =() =>{
  navigate(-1)
  // BOTÕES DE NAVEGAÇÃO// 
  }
    return (
      <BackgroundCreateTrip>  
      <div className="form-create-trip">
        <h1>Create trip</h1>
        <form >
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name trip"
            value={name}
            onChange={handleInputName}
            />
            
          <select
            name="planet"
            id="planet"
            type="number"
            placeholder="planet"
            value={planet}
            onChange={handleInputPlanet}
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
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="date-field"
            id="planet"
            placeholderText="Choose date"
            />
            
          <input
            name="description"
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleInputDescription}
            />
          <input
            name="durationInDays" 
            id="durationInDays"
            placeholder="Duration in days"
            value={durationInDays} 
            onChange={handleInputDurationInDays} 
            required/>
        </form>
        <div className="button"> 
          <button onClick={ goToLastPplanet }>Return</button>
          <button>Send</button>
        </div>
      </div>
    </BackgroundCreateTrip>
    );
  }
  
  export default CreateTripPplanet;