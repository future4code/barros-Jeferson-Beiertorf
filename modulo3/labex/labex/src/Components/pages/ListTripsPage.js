import React from "react";
import { useNavigate } from 'react-router-dom';
import { BackgroundListTrips, CardItem } from "../../Style";
import {BASE_URL} from '../Constants/Constants';
import useRequestData from "../Hooks/useRequestData";

function ListTripsPage() {

  const [dataTrip, isLoadingTrip, erroTrip] = useRequestData(`${BASE_URL}trips`)
  console.log(dataTrip);
  const trip = dataTrip && dataTrip.trips && dataTrip.trips.map((t, i, v)=>{
    
    return (
      <CardItem>
        <li>
          <h3>{t.name}</h3>
          <p>{t.description}</p>
          <p>Planeta:{t.planet}</p>
          <p>{t.durationInDays} Dias</p>
        </li>
      </CardItem>
    )
    })


// BOTÕES DE NAVEGAÇÃO //
  const navigate= useNavigate();
  const goToLastPage =() =>{
    navigate(-1)
  }
  
  const goToSubscribe = () =>{
    navigate("/form-page")
  }
// BOTÕES DE NAVEGAÇÃO //
    return (
      <BackgroundListTrips>  
          <div className="button">
            <button onClick={ goToLastPage }>Return</button>
            <button onClick={ goToSubscribe }>Subscribe</button>
          </div>
        <div className="card">
          {isLoadingTrip && "...Carregando!!! ..."}
          <ul>
          { !isLoadingTrip && dataTrip && dataTrip.trips && trip}
          </ul>
          {!isLoadingTrip && !dataTrip && erroTrip} 
        </div>
      </BackgroundListTrips>
    );
  }
  
  export default ListTripsPage;