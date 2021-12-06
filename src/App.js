
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div style={{display: 'flex'}}>    <CountriesList />
    <Routes>
      <Route path=':id' element={<CountryDetails />} />
    </Routes>
   
      
    </div>
  );
}

export default App;
