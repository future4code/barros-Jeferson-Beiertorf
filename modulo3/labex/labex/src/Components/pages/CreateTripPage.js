import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import {  BackgroundCreateTrip } from "../../Style";
import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment";


function CreateTripPage() {
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
  // const handleInputDate = (e) => {
  //   setDate(e.target.value);
  // };
  const handleInputDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleInputDurationInDays = (e) => {
    setDurationInDays(e.target.value);
  }
  //eventos dos inputs//
  

// BOTÕES DE NAVEGAÇÃO// 
const navigate= useNavigate();
const goToLastPage =() =>{
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
            required
            min="5"
            />
            
          <select
            name="planet"
            id="planet"
            type="number"
            placeholder="planet"
            value={planet}
            onChange={handleInputPlanet}
            required>
            <option value="choose">Choose  planet!</option>
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
            id="date-field"
            placeholderText="Choose date"
            minDate={moment().toDate()}
            required

            />
            
          <input
            name="description"
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleInputDescription}
            required
            min="30"
            />
          <input
            name="durationInDays" 
            id="durationInDays"
            type="number"
            placeholder="Duration in days"
            value={durationInDays} 
            onChange={handleInputDurationInDays} 
            required
            min="50"
            />
        </form>
        <div className="button"> 
          <button onClick={ goToLastPage }>Return</button>
          <button>Send</button>
        </div>
      </div>
    </BackgroundCreateTrip>
    );
  }
  
  export default CreateTripPage;