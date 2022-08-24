import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import * as coordinate from "../Coordinator"

export function useProtectPage(){
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            coordinate.goToLogin(navigate)
        }
    },[])
}