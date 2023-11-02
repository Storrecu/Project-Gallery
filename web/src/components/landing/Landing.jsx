import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout/landing.scss';

const Landing = () => {
  return (
    <>
      <div className='landing__div'>
        <h1 className='landing__h1'>Proyectos Molones</h1>

        <section className='landing__section'>
          <Link className='landing__btn' to='/projects'>
            Ver proyectos
          </Link>

          {/* <a href="">Agregar nuevo proyecto</a> */}

          <Link className='landing__btn' to='/form'>
            Crear proyectos
          </Link>
        </section>
      </div>
    </>
  );
};

export default Landing;
