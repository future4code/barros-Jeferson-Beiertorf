import React from "react";
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {
  const navigate= useNavigate();

  const goToCreate = () =>{
    navigate("/create-trip")
  }

  // const goToDetails =() =>{
  //   navigate("/trip-details")
  // }

  const goToLastPage =() =>{
    navigate(-1)
  }
  
    return (
      <div>
        <h1>ADMIN PAGE</h1>
        <button onClick={ goToLastPage }>Return</button>
        <button onClick={ goToCreate }>Create Trip</button>
        <button>Logout</button>
      </div>
    );
  }
  
  export default AdminHomePage;