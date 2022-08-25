import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { SelectCountry } from '../../Style'

function CountrySelector(props) {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return (
  <SelectCountry>
    <Select options={options} name="country" value={value} onChange={props.changeCountry} />
  </SelectCountry>
)  
}

export default CountrySelector

