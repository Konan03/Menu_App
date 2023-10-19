import React from "react";
import { SlPeople } from 'react-icons/sl';
import Button from '@mui/material/Button';
import "../../../css/Card.css"

function Card(props){
    const{area, logo} = props

    return <div className="card">
        <div className="card__color" >
           
        </div>
        <h2 className="card__text">{area}</h2>
        {logo}
        <button className="card__button" type="button">Entrar</button>
    </div>
}

export default Card