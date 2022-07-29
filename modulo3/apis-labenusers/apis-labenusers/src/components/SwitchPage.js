import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import UsersList from "./UsersList";

const SwitchPage = () =>{
    const [Registration,setRegistration] = useState(false)
    
    if (Registration === true){
    return(
        <Registration/>
    )
    }else{
        return(
        <UsersList pageList={setRegistration}/>
        )
    }
}

export default SwitchPage;