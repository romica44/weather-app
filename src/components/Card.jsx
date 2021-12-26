import React from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import styles from './Card.module.css'


export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleonClose(){
    if(typeof onClose === 'function') onClose();
  }
  return <div className={styles.card}>  
      <button className= {styles.closeButton} onClick={handleonClose}> 
        <IoCloseCircle />
      </button>
      <span className={styles.cityName}>{name}</span>
      <div>
        <label>Min</label>
        <span>{min}</span>
      </div>
      <div>
        <label>Max</label>
        <span>{max}</span>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima"/>
  </div>
};

