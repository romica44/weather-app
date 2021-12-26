import React from 'react';
import {IoSearchOutline} from "react-icons/io5";
import styles from './SearchBar.module.css';

export default function SearchBar(onSearch) {
  
  function handleOnSearch(event){
    event.preventDefault();
    if(typeof onSearch === 'function'){
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
      input.value = [] //para que se borre el input (la ciudad que se coloca a buscar) luego que se ejecuta
    }
  }
  return (
  <form className = {styles.searchBar} onSubmit={handleOnSearch}>
      <input placeholder= "Agregar una nueva ciudad..." id="search-bar-input"/>
      <button type= "submit">
        <IoSearchOutline />
      </button>  
  </form>
  )
};