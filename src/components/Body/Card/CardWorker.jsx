import React from "react";
import "../../../css/CardWorker.css"

function CardWorker(props){
    const{name, img} = props

    const{workers} = props
   

    return <div className="table__container">
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo Electrónico</th>
                </tr>
            </thead>
            <tbody>
                {workers.map((worker) => (
                <tr key={worker.id}>
                    <td>{worker.id}</td>
                    <td>{worker.name}</td>
                    <td>{worker.apellido}</td>
                    <td>{worker.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default CardWorker