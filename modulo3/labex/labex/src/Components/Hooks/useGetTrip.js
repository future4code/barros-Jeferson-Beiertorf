import {useEffect, useState} from 'react'
import axios from 'axios'

const useGetTrip = ( BASE_URL ) => {
    const [getTrip, setGetTrip] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}trips`).then(response =>{
          setGetTrip(response.data)
        }).catch(error =>{
          console.log(error)
        })
      }, [])

    return getTrip;
};

export default useGetTrip;