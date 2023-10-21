import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body/Body';
import { useState } from 'react';
import { SlPeople} from 'react-icons/sl';
import { MdOutlineSecurity } from 'react-icons/md';
import { FaExclamationTriangle, FaHospitalSymbol } from 'react-icons/fa';
import { BsCapsulePill, BsBuildings } from 'react-icons/bs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Workers from './components/Body/Pages/Workers';
import Absenteeism from './components/Body/Pages/Absenteeism';
import ManageHeadquarters from './components/Body/Pages/ManageHeadquarters';
import OccupationalDisease from './components/Body/Pages/OccupationalDisease';
import RateAccident from './components/Body/Pages/RateAccident';
import Vaccination from './components/Body/Pages/Vaccination';



function App() {

  const[secciones, actualizarSeccion ] = useState([
    {
  
      area:"Trabajadores",
      logo: <SlPeople size={40} className="card__icon"/>,
      ruta: '/trabajadores'
    },
    {
      area:"Ausentismo",
      logo: <MdOutlineSecurity size={40} className="card__icon"/>,
      ruta: "/ausentismo"
    },
    {
      area:"Accidentalidad",
      logo: <FaExclamationTriangle size={40} className="card__icon"/>,
      ruta: "/accidentalidad"
    },
    {
      area:"Enfermedad laboral",
      logo: <BsCapsulePill size={40} className="card__icon"/>,
      ruta: "/enfermedad_laboral"
    },
    {
      area:"Vacunacion",
      logo: <FaHospitalSymbol size={40} className="card__icon"/>,
      ruta: "/vacunacion"
    },
    {
      area:"Administrar sedes",
      logo: <BsBuildings size={40} className="card__icon"/>,
      ruta: "/administrar_redes"
    },
    ])

  return (
    <Router>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Body secciones={secciones}/>}/>
        <Route path='/trabajadores' element={<Workers/>}/>
        <Route path='/ausentismo' element={<Absenteeism/>}/>
        <Route path='/accidentalidad' element={<RateAccident/>}/>
        <Route path='/enfermedad_laboral' element={<OccupationalDisease/>}/> 
        <Route path='/vacunacion' element={<Vaccination/>}/>
        <Route path='/administrar_redes' element={<ManageHeadquarters/>}/>
      </Routes>
       
     

      
    </Router>
  );
}

export default App;
