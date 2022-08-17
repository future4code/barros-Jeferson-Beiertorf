import React from "react";
import { useNavigate } from 'react-router-dom';
import { BackgroundAdmin } from "../../Style";

function AdminHomePage() {
  const navigate= useNavigate();

  const goToCreate = () =>{
    navigate("/create-trip")
  }

  const goToLogin =() =>{
    navigate("/login-page")
  }

  const goToLastPage =() =>{
    navigate(-1)
  }
  
    return (

      <BackgroundAdmin>
        <section>
          <h1>ADMIN PAGE</h1>
          <div className="button">
            <button onClick={ goToLastPage }>Return</button>
            <button onClick={ goToCreate }>Create Trip</button>
            <button onClick={ goToLogin }>Logout</button>
          </div>
        </section>
      </BackgroundAdmin>
    );
  }
  
  export default AdminHomePage;