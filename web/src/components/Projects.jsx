import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout/Projects.scss';
import Card from './Card';
import api from '../services/api';

const projects = () => {
  const [listProject, setListProject] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getDataProjects();
      console.log(data);
      setListProject(data.projects);
    };
    fetchData();
  }, []);

  /*const fakeData = {
    name: 'proyect',
    slogan: 'hola',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: 'claudia',
    job: 'babyfullstack',
    image: 'src/images/hierbas.webp',
    photo: 'src/images/2.jpg',
  };*/

  return (
    <>
      <div className='projects__div'>
        <section className='projects__section'>
          {/* <a href="">Agregar nuevo proyecto</a> */}

          <Link className='projects__btn' to='/form'>
            Crea tu projecto
          </Link>

          <Link className='projects__btn' to='/'>
            {' '}
            Volver al inicio{' '}
          </Link>
        </section>
        {listProject.map((project) => {
          return <Card data={project} />;
        })}

        {/*  <Card data={fakeData} />*/}
      </div>
    </>
  );
};

export default projects;
