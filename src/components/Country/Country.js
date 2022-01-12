import React, {useState, useEffect} from 'react';
import { fetchCountries } from '../../api/index';
import { NativeSelect, FormControl } from '@material-ui/core';
import './Country.css';

function Country({handleCountryChange}) {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };
  
      fetchAPI();
    }, []);

    return (
        <div>
            
      <div className="countryContainer">
        <div className="countryContainer1">
            Country
        </div>
        <div className="countryContainer2">
          <FormControl className="countryContainer3">
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
              <option value="">India</option>
              {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
          </FormControl>
        </div>
      </div>
        </div>
    )
}

export default Country
