import React from "react";
import { useNavigate } from 'react-router-dom';
import { BackgroundAdmin } from "../../Style";
import { CardAdm } from "../Hooks/useCards";
import { useProtectPage } from "../Hooks/useProtectPage";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function AdminHomePage() {
  useProtectPage();
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
        <div className="card-adm">
          <h2>List Trips</h2>
          <div card-container>
            <CardAdm></CardAdm>
          </div>
        </div>
      </BackgroundAdmin>
    );
  }
  
  export default AdminHomePage;