/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import '../styles/App.scss';
import imgUser from '../images/hierbas.webp';
import imgCover from '../images/playa.jpg';

function App() {
  //States
  const [data, setData] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    description: '',
  });

  const [authorData, setAuthorData] = useState({
    autor: '',
    job: '',
  });

  //Error states
  const [urlOneErrorMsg, setUrlEOnerrorMsg] = useState('');
  const [urlTwoErrorMsg, setUrlTwoErrorMsg] = useState('');
  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [sloganErrorMsg, setSloganErrorMsg] = useState('');
  const [technologiesErrorMsg, setTechnologiesErrorMsg] = useState('');
  const [descErrorMsg, setDescErrorMsg] = useState('');
  const [authorErrorMsg, setAuthorErrorMsg] = useState('');
  const [jobErrorMsg, setJobErrorMsg] = useState('');

  //RegExp
  const expRegUrl =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,})(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)*$/;

  const patron = /^[ A-Za-zäÄëËïÏöÖüÜáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ-]+$/;

  // Handlers
  const handleChangeInput = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === 'name') {
      setNameErrorMsg(!value ? 'Este campo es requerido' : '');
    } else if (id === 'slogan') {
      setSloganErrorMsg(!value ? 'Este campo es requerido' : '');
    } else if (id === 'technologies') {
      setTechnologiesErrorMsg(!value ? 'Este campo es requerido' : '');
    } else if (id === 'desc') {
      setDescErrorMsg(!value ? 'Este campo es requerido' : '');
    } else if (id === 'repo') {
      if (!expRegUrl.test(value)) {
        setUrlEOnerrorMsg(
          value
            ? 'La URL ingresada no es válida, debes incluir una URL completa con https://'
            : ''
        );
      } else {
        setUrlEOnerrorMsg('');
        validateUrl(value);
      }
    } else if (id === 'demo') {
      if (!expRegUrl.test(value)) {
        setUrlTwoErrorMsg(
          value
            ? 'La URL ingresada no es válida, debes incluir una URL completa con https://'
            : ''
        );
      } else {
        setUrlTwoErrorMsg('');
        validateUrl(value);
      }
    }

    setData({ ...data, [id]: value });
  };

  const handleAuthorInput = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === 'autor') {
      setAuthorErrorMsg(
        !patron.test(value)
          ? 'El nombre del autor no es válido, no puede contener números ni carácteres especiales'
          : ''
      );
    } else if (id === 'job') {
      setJobErrorMsg(
        !patron.test(value)
          ? 'El trabajo del autor no es válido, no puede contener números ni carácteres especiales'
          : ''
      );
    }

    setAuthorData({ ...authorData, [id]: value });
  };

  //functions
  const validateUrl = (url) => {
    if (expRegUrl.test(url)) {
      if (!url.startsWith('https://')) {
        setUrlEOnerrorMsg(
          'Debes ingresar una URL completa, que comience con https://'
        );
        setUrlTwoErrorMsg(
          'Debes ingresar una URL completa, que comience con https://'
        );
      } else {
        setUrlEOnerrorMsg('');
        setUrlTwoErrorMsg('');
      }
    } else {
      setUrlTwoErrorMsg('La URL ingresada no es válida');
      setUrlEOnerrorMsg('La URL ingresada no es válida');
    }
  };

  return (
    <>
      <div className='container'>
        <header className='header'>
          <i className='header__icon fa-solid fa-computer'></i>
          <h1 className='header__h1'>Proyectos Molones</h1>
          <p className='header__text'>Escaparate en línea para recoger ideas a través de la tecnología.</p>
          <button className='header__btn'>Ver proyectos</button>
        </header>
        <main className='main'>
          <section className='preview'>
            <img className='image' src={imgCover} alt='' />

            <section className='autor'>
              <section className='info-project'>
                <p className='subtitle'>Personal Project Card</p>
                <hr className='line' />

                <h2 className='title'>{data.name || 'Elegant Workspace'}</h2>
                <p className='slogan'>{data.slogan || 'Diseños Exclusivos'}</p>
                <p className='desc'>
                  {data.desc ||
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus'}
                </p>
                <section className='technologies'>
                  <p className='text'>
                    {data.technologies || 'React JS, MongoDB'}
                  </p>
                </section>
                <div className='icon-preview'>
                  <a href={data.demo} target='_blank'>
                    <i className='fa-solid fa-globe'></i>
                  </a>
                  <a href={data.repo} target='_blank'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </div>
              </section>

              <section className='info-autor'>
                <img className='image' src={imgUser} alt='' />
                <p className='job'>
                  {authorData.job || 'Full Stack Developer'}
                </p>
                <p className='name'>
                  {authorData.autor || 'Emmelie Björklund'}
                </p>
              </section>
            </section>
          </section>

          <section className='form'>
            <h2 className='title'>Información</h2>

            <section className='ask-info'>
              <p className='subtitle'>Cuéntanos sobre el proyecto</p>
              <hr className='line' />
            </section>

            <fieldset className='project'>
              <input
                className='input'
                type='text'
                placeholder='Nombre del proyecto'
                name='name'
                id='name'
                value={data.name}
                onChange={handleChangeInput}
              />
              {nameErrorMsg ? <p className='error-msg'>{nameErrorMsg}</p> : ''}
              <input
                className='input'
                type='text'
                name='slogan'
                id='slogan'
                value={data.slogan}
                placeholder='Slogan'
                onChange={handleChangeInput}
              />
              {sloganErrorMsg ? (
                <p className='error-msg'>{sloganErrorMsg}</p>
              ) : (
                ''
              )}
              <input
                className='input'
                type='text'
                name='repo'
                id='repo'
                placeholder='Repo'
                value={data.repo}
                onChange={handleChangeInput}
              />
              {urlOneErrorMsg ? (
                <p className='error-msg'>{urlOneErrorMsg}</p>
              ) : (
                ''
              )}
              <input
                className='input'
                type='text'
                placeholder='Demo'
                name='demo'
                id='demo'
                value={data.demo}
                onChange={handleChangeInput}
              />
              {urlTwoErrorMsg ? (
                <p className='error-msg'>{urlTwoErrorMsg}</p>
              ) : (
                ''
              )}
              <input
                className='input'
                type='text'
                placeholder='Tecnologías'
                name='technologies'
                id='technologies'
                value={data.technologies}
                onChange={handleChangeInput}
              />
              {technologiesErrorMsg ? (
                <p className='error-msg'>{technologiesErrorMsg}</p>
              ) : (
                ''
              )}
              <textarea
                className='textarea'
                type='text'
                placeholder='Descripción'
                name='desc'
                id='desc'
                value={data.desc}
                onChange={handleChangeInput}
              ></textarea>
              {descErrorMsg ? <p className='error-msg'>{descErrorMsg}</p> : ''}
            </fieldset>

            <section className='ask-info'>
              <p className='subtitle'>Cuéntanos sobre la autora</p>
              <hr className='line' />
            </section>

            <fieldset className='autor'>
              <input
                className='input'
                type='text'
                placeholder='Nombre'
                name='autor'
                id='autor'
                value={authorData.autor}
                onChange={handleAuthorInput}
              />
              {authorErrorMsg ? (
                <p className='error-msg'>{authorErrorMsg}</p>
              ) : (
                ''
              )}
              <input
                className='input'
                type='text'
                placeholder='Trabajo'
                name='job'
                id='job'
                value={authorData.job}
                onChange={handleAuthorInput}
              />
              {jobErrorMsg ? <p className='error-msg'>{jobErrorMsg}</p> : ''}
            </fieldset>

            <section className='buttons-img'>
              <button className='btn'>Subir foto de proyecto</button>
              <button className='btn'>Subir foto de autora</button>
            </section>
            <section className='buttons-img'>
              <button className='btn-large'>Crear Tarjeta</button>
            </section>

            <section className='card'>
              <span className=''> La tarjeta ha sido creada: </span>
              <a href='' className='' target='_blank' rel='noreferrer'>
                {' '}
              </a>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
