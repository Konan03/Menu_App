import React from "react";
import CardWorker from "../Card/CardWorker";
import { Link } from 'react-router-dom';
import "../../../css/cssPages/Workers.css"

function Workers (props){

    const{workers} = props

    return <div className="body__workers">
        <div className="body__workers--button">
            <Link to="/">
                <button className="card__button--workers" type="button">Atras</button>
            </Link>
            <button className="card__button--workers" type="button">Registrar</button>
            <button className="card__button--workers" type="button">Editar</button>
            <button className="card__button--workers" type="button">Eliminar</button>
        </div>
        <CardWorker workers={workers}></CardWorker>
    </div>
}

export default Workers