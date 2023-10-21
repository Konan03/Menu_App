import React from "react";
import Card from "./Card/Card";
import "../../css/Body.css"
import "../../css/Card.css"


function Body(props){

    const{secciones} = props
    
    return <section className="body">
        
             {secciones.length > 0 &&
                secciones.map((seccion, index) => (
                  <Card key={index} area={seccion.area} logo={seccion.logo} />
                ))}
        
    </section>
}

export default Body