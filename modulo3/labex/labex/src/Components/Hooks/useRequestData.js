import {useEffect, useState} from 'react'
import axios from 'axios'

const useRequestData = ( url ) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [erro, setErro] = useState(undefined)
    const [att, setAtt] = useState(true)
     useEffect(() => {
        setIsLoading(true)
        axios.get(url).then(response =>{
            setIsLoading(false)
          setData(response.data)
        }).catch(error =>{
            setIsLoading(false)
          setErro(error)
        })
      }, [url,att])

    return [data, isLoading, erro, att, setAtt];
};

export default useRequestData;