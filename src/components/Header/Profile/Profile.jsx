import React from "react";
import "../../../css/Profile.css"



function Profile (){


    return <div className="profile">
        <ul className="profile__menu">
            <li className="profile__menu--item">Perfil</li>
            <li className="profile__menu--item">Mi cuenta</li>
            <li className="profile__menu--item">Salir</li>
        </ul>
    </div>
}

export default Profile