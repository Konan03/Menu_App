import React from "react";
import { SlPeople } from 'react-icons/sl';
import Button from '@mui/material/Button';
import "../../../css/Card.css"

function Card(){
    return <div className="card">
        <div className="card__color"></div>
        <h2 className="card__text">Trabajadores</h2>
        <SlPeople size={40} className="card__icon"/>
        <Button variant="contained" color="success" className="card__button">Entrar</Button>
    </div>
}

export default Card