import React, { useState } from "react";

import {AiOutlineMenu, AiOutlineAlert} from  'react-icons/ai'
import Menu from "./Menu";
import Profile from "./Profile/Profile";
import "../../css/Header.css"

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';





function Header (){

    // Estado para rastrear si el menú está abierto
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setProfileOpen(false);
  };

  const toggleProfile = () =>{
    setProfileOpen(!isProfileOpen)
    setMenuOpen(false);
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
                <AiOutlineAlert size={20} className="nav__user-icon"/>
                <div className="nav__user-profile">
                    <Avatar className="nav__user-profileAvatar" onClick={toggleProfile}>M</Avatar>

                    {isProfileOpen && (
                        <div className="nav__user-menuProfile">
                            <Profile/>
                        </div>
                    )}

                </div>
            </div>



            

        </nav>
    </div>
}

export default Header