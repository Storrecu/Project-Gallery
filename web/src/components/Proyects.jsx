import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout/Proyects.scss';

import CardPreview from './proyecto/CardPreview';
import Card from './Card';

const Proyects = () => {
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
    // foto autora
    photo: 'src/images/2.jpg', 
    // photo: 'src/images/playa.jpg', 
    // foto proyecto
  };
  return (
    <>

      <main className="main_proyects">

        <section className='section_proyects' >
          {/* <a href="">Agregar nuevo proyecto</a> */}
          <div className='btn_1_proyects' >
            <Link className='header__btn' to='/form'
            >
              Crea tu proyecto
            </Link>
          </div>
          <div className='btn_2_proyects'>
            <Link className='header__btn' to='/' > Volver al inicio </Link>
          </div>

        </section>
       <Card
        data= {fakeData}
       />





      </main>
    </>
  );
};

export default Proyects;









0