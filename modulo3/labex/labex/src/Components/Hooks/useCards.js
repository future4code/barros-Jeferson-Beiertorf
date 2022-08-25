import React from "react";
import { CardItem, CardItemAdm } from "../../Style";
import {BASE_URL} from '../Constants/Constants';
import useRequestData from "./useRequestData";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
library.add(fas)

export function CardItens(){
    const [dataTrip, isLoadingTrip, erroTrip] = useRequestData(`${BASE_URL}trips`)
    console.log(dataTrip);
    const trip = dataTrip && dataTrip.trips && dataTrip.trips.map((t)=>{
      


      return (
        <CardItem key={t.id}>
          <li>
            <h3>{t.name}</h3>
            <p>{t.description}</p>
            <p><strong>Planet:</strong>  {t.planet}</p>
            <p><strong>Date:</strong> {t.date}</p>
            <p><strong>Duration: </strong>{t.durationInDays} Days</p>
          </li>
        </CardItem>
      )
      })
      return(
        <div className="card">
        {isLoadingTrip && "...Carregando!!! ..."}
        <ul>
        { !isLoadingTrip && dataTrip && dataTrip.trips && trip}
        </ul>
        {!isLoadingTrip && !dataTrip && erroTrip} 
      </div>
      )
}

export function CardAdm(){
    const [dataTrip, isLoadingTrip, erroTrip, att, setAtt] = useRequestData(`${BASE_URL}trips`)
    console.log(dataTrip);
    
    
    const DeleteTrip = (id) => {
      axios.delete(`${BASE_URL}trips/${id}`,{
        headers:{
          auth: localStorage.getItem("token")
        }
      }).then((response) => {
          alert("Viagem excluída!")
          setAtt(!att)
      }).catch((erro) => { 
        console.log(erro) })}
        
        const trip = dataTrip && dataTrip.trips && dataTrip.trips.map((t, i, v)=>{
      return (
        <CardItemAdm>
          <li>
            <h3>{t.name}</h3>
            <p><strong>Date:</strong> {t.date}</p>
          </li>
        <div className="icon-trash">
          <FontAwesomeIcon icon = "trash-can" onClick={()=> DeleteTrip(t.id)} ></FontAwesomeIcon>
        </div>
        </CardItemAdm>
      )
      })
      return(
        <div className="card">
        {isLoadingTrip && "...Carregando!!! ..."}
        <ul>
        { !isLoadingTrip && dataTrip && dataTrip.trips && trip}
        </ul>
        {!isLoadingTrip && !dataTrip && erroTrip} 
      </div>
      )
}