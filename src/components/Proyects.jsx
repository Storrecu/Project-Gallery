import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout/Proyects.scss';
import CardPreview from './proyecto/CardPreview';

const Proyects = () => {
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
       <div  className='btn_2_proyects'>
       <Link className='header__btn'  to='/' > Volver al inicio </Link>
       </div>
      
      </section>
     

      
         </main>
    </>
  );
};

export default Proyects;









0