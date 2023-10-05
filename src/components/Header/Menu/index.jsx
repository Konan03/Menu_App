import React, { useState } from "react";
import "../../../css/Menu.css"
import { GiExitDoor } from 'react-icons/gi';

function Menu(){
    return <div className="menu">
        <div className="menu__color"></div>
        <h2 className="menu__title">Administracion</h2>
        <ul className="menu__lista">
            <li className="menu__lista--item">Trabajadores</li>
            <li className="menu__lista--item">Ausentismo</li>
            <li className="menu__lista--item">Accidentalidad</li>
            <li className="menu__lista--item">Vacinacion</li>
            <li className="menu__lista--item">Administrar</li>
        </ul>
        <div className="menu__salir">
            <h3 className="menu__salir--text"> Salir </h3>
            <GiExitDoor size={40} className="menu__salir--icon"/>
        </div>
    </div>
}

export default Menu