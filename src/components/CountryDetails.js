import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function CountryDetails(){

const {id} = useParams()    
const [detail, setDetail] = useState(null)

useEffect(() => {
    async function getData(){
        let response = await axios.get('https://restcountries.com/v3.1/all')
        const {borders, flag, population} = response.data
        let countries = {
            borders: id,
            flag: flag,
            population: population

        }

        setDetail(countries)
    }

  getData()

}, [id])

if(!detail){
  return <p> Still loading...</p>
}

return (

    <div>
        <h1>Country Details</h1>
    </div>

)

}


export default CountryDetails