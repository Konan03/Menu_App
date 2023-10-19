import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body/Body';
import { useState } from 'react';
import { SlPeople} from 'react-icons/sl';
import { MdOutlineSecurity } from 'react-icons/md';
import { FaExclamationTriangle, FaHospitalSymbol } from 'react-icons/fa';
import { BsCapsulePill, BsBuildings } from 'react-icons/bs';




function App() {

  const[secciones, actualizarSeccion ] = useState([
    {
  
      area:"Trabajadores",
      logo: <SlPeople size={40} className="card__icon"/>
    },
    {
      area:"Ausentismo",
      logo: <MdOutlineSecurity size={40} className="card__icon"/>
    },
    {
      area:"Accidentalidad",
      logo: <FaExclamationTriangle size={40} className="card__icon"/>
    },
    {
      area:"Enfermedad laboral",
      logo: <BsCapsulePill size={40} className="card__icon"/>
    },
    {
      area:"Vacunacion",
      logo: <FaHospitalSymbol size={40} className="card__icon"/>
    },
    {
      area:"Administrar sedes",
      logo: <BsBuildings size={40} className="card__icon"/>
    }
    ])

  return (
    <div className="App">
        <Header/>
        <Body secciones={secciones}/>
    </div>
  );
}

export default App;
