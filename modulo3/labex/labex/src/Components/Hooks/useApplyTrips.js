import {useEffect, useState} from 'react'
import axios from 'axios'

const useApplyTrips = ( BASE_URL ) => {
    const [getApplyTrips, setGetApplyTrips] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}trips/:id/apply`).then(response =>{
          setGetApplyTrips(response.data)
        }).catch(error =>{
          console.log(error)
        })
      }, [])

    return getApplyTrips;
};

export default useApplyTrips;