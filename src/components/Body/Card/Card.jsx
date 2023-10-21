import React from "react";
import { SlPeople } from 'react-icons/sl';
import Button from '@mui/material/Button';
import "../../../css/Card.css"
import { Link } from 'react-router-dom';


function Card(props){
    const{area, logo, ruta} = props

    return <div className="card">
        <div className="card__color" >
           
        </div>
        <h2 className="card__text">{area}</h2>
        {logo}
        <Link to={ruta}>
            <button className="card__button" type="button">Entrar</button>
        </Link>
    </div>
}

export default Card