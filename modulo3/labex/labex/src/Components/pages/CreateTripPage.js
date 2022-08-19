import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import {  BackgroundCreateTrip } from "../../Style";
import { useForm } from "../Hooks/useForm";
import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment";
import {BASE_URL} from '../Constants/Constants'
import axios from "axios";


function CreateTripPage() {
  //estados dos inputs//
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  // const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [form, onChange, clear] = useForm({id: "", name: "", planet: "", 	date: "", description: "", durationInDays: ""})
  //estados dos inputs//
  
  //eventos dos inputs//
  const creatTrip = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}trips`)
    .then((response)=>{
        console.log(response.data);
    }).catch((error)=>{
        console.log("ERROR");
    })
    clear();
}

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
        <form onSubmit={creatTrip}>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name trip"
            value={form.name}
            onChange={handleInputName}
            required
            pattern="^.{5,}" 
            />
            
          <select
            name="planet"
            id="planet"
            type="number"
            placeholder="planet"
            value={form.planet}
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
            value={form.description}
            onChange={handleInputDescription}
            required
            pattern="^.{30,}" 
            />
          <input
            name="durationInDays" 
            id="durationInDays"
            type="number"
            placeholder="Duration in days"
            value={form.durationInDays} 
            onChange={handleInputDurationInDays} 
            required
            pattern="^.{50,}" 
            />
        </form>
        <div className="button"> 
          <button type="button" onClick={ goToLastPage }>Return</button>
          <button>Send</button>
        </div>
      </div>
    </BackgroundCreateTrip>
    );
  }
  
  export default CreateTripPage;