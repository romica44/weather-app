import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
//import data, { Cairns } from './data.js';

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
 const [cities, setCities] = useState([])
  
  function handleAddCity(city){
    setCities((prevCities)=> {
      return [city, ...prevCities]
    })
  }
  
  function handleRemoveCity(cityId){
    setCities((prevCities)=>{
      return prevCities.filter((city)=> { //el metodo filter es no destructivo, recorre el array no pisa el contenido
        return cityId !== city.id}) //si retorna true agrega la ciudad si retorna false no lo agrega
    })
  }

  function onSearch(ciudad){
    fetch( // fetch es una api interna del navegador//se trae los datos que necesitamos de la api
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
    .then(r=> r.json()) //la respuesta que recibe se convierte en una archivo json
    .then((recurso)=> {
      if(recurso.main !==undefined){ //si recibe data...
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        }
        handleAddCity(ciudad);
      }else {
        alert("Ciudad no encontrada");
      }
    })
  }

  return (
    <div className="App">
     
        <SearchBar onSearch={onSearch}/>
         <Cards cities={cities} onRemove={handleRemoveCity} />
    </div>
  );
}



export default App;
