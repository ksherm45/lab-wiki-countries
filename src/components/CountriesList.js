import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function CountriesList(){

const [countries, setCountries] = useState([])

useEffect(() => {

    async function getData(){
        let response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)

    }

    getData()
    
    
}, [])

if (!countries.length) {
    return <p>Loading . . . </p>
}

return(

    <div>
        <h1>Wiki Countries</h1>
    {
        countries.map((elem, i) => {
            return (
                <div>
                    <Link key={i} to={`/lab-wiki-countries/${i+1}`} >{elem.name.common}</Link>
                </div>    
            )
        })
    }
</div>
)

}


export default CountriesList