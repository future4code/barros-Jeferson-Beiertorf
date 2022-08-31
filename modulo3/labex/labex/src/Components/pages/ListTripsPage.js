import React from "react";
import { useNavigate } from 'react-router-dom';
import { BackgroundListTrips, CardItem } from "../../Style";
import {CardItens} from "../Hooks/useCards";

function ListTripsPage() {



// BOTÕES DE NAVEGAÇÃO //
  const navigate= useNavigate();
  const goToHome =() =>{
    navigate("/")
  }
  const goToSubscribe = () =>{
    navigate("/form-page")
  }
// BOTÕES DE NAVEGAÇÃO //
    return (
      <BackgroundListTrips>  
          <div className="button">
            <button onClick={ goToHome }>Home</button>
            <button onClick={ goToSubscribe }>Subscribe</button>
          </div>
          <div>
            <CardItens></CardItens>
          </div>
      </BackgroundListTrips>
    );
  }
  
export default ListTripsPage;