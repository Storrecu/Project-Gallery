// Fichero src/components/App.jsx
import '../styles/App.scss';
import imgUser from '../images/user.jpeg';
import imgCover from '../images/cover.jpeg';
import { useState } from 'react';

function App() {
  //constantes que necesitamos
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [tech, setTech] = useState('');
  const [desc, setDesc] = useState('');

  //ExpReg
  const expRegUrl =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,})(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)*$/;

  //funciones manejadoras

  const handleChangeInput = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    if (inputId === 'name') {
      setName(inputValue);
      console.log(event.target.value);
    } else if (inputId === 'slogan') {
      setSlogan(inputValue);
    } else if (inputId === 'tech') {
      setTech(inputValue);
    } else if (inputId === 'desc') {
      setDesc(inputValue);
    }
  };

  const handleBlurUrl = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    if (inputId === 'repo') {
      const result = handleValidateUrl(inputValue);

      if (result) {
        setRepo(event.target.value);
      }
    } else if (inputId === 'demo') {
      handleValidateUrl();
      setDemo(event.target.value);
    }
  };

  const handleValidateUrl = (url) => {
    if (expRegUrl.test(url)) {
      if (url.includes('https://')) {
        return url;
      } else {
        const newUrl = 'https://' + url;
        return newUrl;
      }
    } else {
      return false;
    }
  };

  return (
    <>
      <div className='container'>
        <header className='header'>
          <p className='text'>Proyectos Molones</p>
        </header>
        <main className='main'>
          <section className='preview'>
            <img className='image' src={imgCover} alt='' />

            <section className='autor'>
              <section className='info-project'>
                <p className='subtitle'>Personal Project Card</p>
                <hr className='line' />

                <h2 className='title'>{name || 'Elegant Workspace'}</h2>
                <p className='slogan'>{slogan || 'Diseños Exclusivos'}</p>
                <p className='desc'>
                  {desc ||
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus'}
                </p>
                <section className='technologies'>
                  <p className='text'>{tech || 'React JS, MongoDB'}</p>
                </section>
                <a href={demo} target='_blank'>
                  <i className='fa-solid fa-globe'></i>
                </a>

                <a href={repo} target='_blank'>
                  <i className='fa-brands fa-github'></i>
                </a>
              </section>

              <section className='info-autor'>
                <img className='image' src={imgUser} alt='' />
                <p className='job'>Full Stack Developer</p>
                <p className='name'>Emmelie Björklund</p>
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
                value={name}
                onChange={handleChangeInput}
              />
              <input
                className='input'
                type='text'
                name='slogan'
                id='slogan'
                value={slogan}
                placeholder='Slogan'
                onChange={handleChangeInput}
              />
              <input
                className='input'
                type='text'
                name='repo'
                id='repo'
                placeholder='Repo'
                onChange={handleBlurUrl}
              />
              <input
                className='input'
                type='text'
                placeholder='Demo'
                name='demo'
                id='demo'
                value={demo}
                onBlur={handleBlurUrl}
              />
              <input
                className='input'
                type='text'
                placeholder='Tecnologías'
                name='technologies'
                id='technologies'
                value={tech}
                onChange={handleChangeInput}
              />
              <textarea
                className='textarea'
                type='text'
                placeholder='Descripción'
                name='desc'
                id='desc'
                value={desc}
                onChange={handleChangeInput}
              ></textarea>
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
              />
              <input
                className='input'
                type='text'
                placeholder='Trabajo'
                name='job'
                id='job'
              />
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
