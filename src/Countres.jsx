import { useState } from 'react';
import './Countres.css'
const Countryes = ({country}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
        const handleVisited = () => {
        setVisited(!visited);
        }
    return (
        <div className={`count ${visited && 'visited'}` }>
            <img className='img' src={flags.png} alt="" />
            <h3 className='count'>Name : {name?.common}</h3>
            <p className='count'>Population : {population}</p>
            <p className='count'>Area : {area}</p>
            <p className='count'><small>code : {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want visit'}
            
        </div>
    )
}

export default Countryes;