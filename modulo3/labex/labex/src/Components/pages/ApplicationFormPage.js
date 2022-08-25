import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BackgroundAppForm } from "../../Style";
import CountrySelector from "../Hooks/useCountrySelector";
import { useForm } from "../Hooks/useForm";
import axios from "axios"
import { BASE_URL, URL_COUNTRY } from "../Constants/Constants";
import useRequestData from "../Hooks/useRequestData";

// https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply
function ApplicationFormPage() {

  
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clear] = useForm({name:"", age:"",application:"",occupation:"",country:"", tripId:""})
  const [data] = useRequestData(`${BASE_URL}trips`)
  const [paises, status] = useRequestData(`${URL_COUNTRY}`)
  // console.log(form);
  if(status=== false){
    console.log(paises);
  }
  // console.log(countrySelected);
  // const myCountrySelected = countrySelected&&countrySelected.paises&&countrySelected.paises.map((countries)=>{
  //   return(
    
  //     <option key={countries.countrySelected}></option>
  //   )
  // })
  const ApplicationForm = (event) => {
    event.preventDefault()
    setIsLoading(true)
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.application,
      profession: form.occupation,
      country: form.country
    }
    
    // console.log({body});
    const test = localStorage.getItem("token")

    // console.log(test);
    axios.post(`${BASE_URL}trips/${form.tripId}/apply`, body)
    .then(()=>{
      setIsLoading(false)
          alert("Cadastro efetuado com sucesso!")
        }).catch((error)=>{
          setIsLoading(false)
          alert(`ERROR: ${error}`)
          console.log(error.message);
        })
        clear();
      }
      // BOTÕES DE NAVEGAÇÃO// 
      const navigate= useNavigate();
      const goToLastPage =() =>{
        navigate("/list-trips")
        // BOTÕES DE NAVEGAÇÃO// 
      }
    return (
    <BackgroundAppForm>
      <div className="form-register">
          <h1>Register</h1>
          <form onSubmit={ApplicationForm}>
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
              max={60}
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

            <select 
              name="tripId" 
              value={form.tripId} 
              onChange={onChange} 
              required>
              <option>Choose trip</option>
              {data && data.trips && data.trips.map(item => {
              return (
              <option 
              key={item.id} 
              value={item.id}>
              {item.name}
              </option>)
              })}
              </select>

            <label name="country" id="country">Select your country</label>
            <CountrySelector
              name="country" 
              id="country"
              changeCountry = {onChange}
              required/>
        <div className="button"> 
          <button type="button" onClick={ goToLastPage }>Return</button>
          <button >Send</button>
        </div>
          </form> 
      </div>
    </BackgroundAppForm>
    );
  }
  export default ApplicationFormPage;