
import { useState, useEffect } from 'react';
import Countryes from './Countres';
import './mideaq.css'


const Country = () => {


        const [countrys, setCountres] = useState([]);
        useEffect(()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res=> res.json())
            .then(data => setCountres(data))
    
        }, [])
    return(
        <div>
            <h3>Countries :- {countrys.length}</h3>
            <div className='country-container'>
            {
                countrys.map(country => <Countryes key={country.cca3} country={country}></Countryes>)
            }
            </div>
        </div>
    )
}
export default Country;

