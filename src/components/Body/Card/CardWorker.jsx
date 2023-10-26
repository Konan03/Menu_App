import React from "react";

function CardWorker(props){
    const{name, img} = props
   

    return <div className="card">
        <div className="card__color" ></div>
        <h2 className="card__text">{name}</h2>
        {}
    </div>
}

export default CardWorker