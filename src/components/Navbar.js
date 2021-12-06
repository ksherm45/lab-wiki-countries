import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/">Lab Wiki Countries</Link>
            <Link to="/CountriesList">CountriesList</Link>
            <Link to="/CountriesDetails">CountriesDetails</Link>
        </div>
    )
}

export default Navbar
