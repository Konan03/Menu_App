import React, { useState } from "react";

import {AiOutlineMenu, AiOutlineAlert} from  'react-icons/ai'
import Menu from "./Menu";
import "../../css/Header.css"



function Header (){

    // Estado para rastrear si el menú está abierto
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    return <div>
        <nav className="nav">
            <div className="menu__icon-container">
                <AiOutlineMenu size={40} onClick={toggleMenu} className="icon"/>

                {isMenuOpen && (
                <div className="menu__dropdown">
                    <Menu/>
                </div>
                )}
            </div>
            
            
            <h2>Menu principal</h2>
            <div className="nav__user">
                <AiOutlineAlert size={40} className="nav__user-icon"/>
                Manuel Caicedo
            </div>

            

        </nav>
    </div>
}

export default Header