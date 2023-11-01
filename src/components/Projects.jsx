import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout/Projects.scss';
import CardPreview from './proyecto/CardPreview';

const projects = () => {
  return (
    <>
    
      <div className="projects__div">
         
      <section className='projects__section' >
       {/* <a href="">Agregar nuevo proyecto</a> */}
     
       <Link className='projects__btn' to='/form'
        >
      Crea tu projecto
      </Link>
   
  
       <Link className='projects__btn'  to='/' > Volver al inicio </Link>

      
      </section>
     

      
         </div>
    </>
  );
};

export default projects;








