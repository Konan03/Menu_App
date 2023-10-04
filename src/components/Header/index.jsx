import React, { useState } from "react";

import {AiOutlineMenu, AiOutlineAlert} from  'react-icons/ai'
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
                <AiOutlineMenu size={40} onClick={toggleMenu}/>

                {isMenuOpen && (
                <div className="menu__dropdown">
                    <ul>
                        <li>Opción 1</li>
                        <li>Opción 2</li>
                        <li>Opción 3</li>
                    </ul>
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