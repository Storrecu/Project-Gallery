import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout/Projects.scss';
import Card from './Card';

const projects = () => {

    const fakeData = {
      name: 'proyect',
      slogan: 'hola',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: 'claudia',
      job: 'babyfullstack',
      image: 'src/images/hierbas.webp',
      photo: 'src/images/2.jpg'

    };

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
     
      <Card data={fakeData}/>
      
         </div>
    </>
  );
};

export default projects;








