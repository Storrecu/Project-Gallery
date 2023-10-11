// Fichero src/components/App.jsx
import { useState } from 'react';
import '../styles/App.scss';
import imgUser from '../images/user.jpeg';
import imgCover from '../images/cover.jpeg';


function App() {


  const [data , setData] = useState ({ name : "", slogan : "", repo : "", demo: "", technologies: "", desc: "" });
 const [message, setMessage] = useState ("")
  //ExpReg
  const expRegUrl =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,})(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)*$/;

  //funciones manejadoras

  const handleChangeInput = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    ///condiconal? si el imput id es demo o repo llamar a la funcion validate
    if(id === data.demo || id === data.repo) {
      validateUrl();
      console.log('hola');
    }
  setData({...data, [id]: value});
  };

  

  const validateUrl = (url) => {
    if (expRegUrl.test(url)) {
      if (url.includes('https://')) {
        setMessage("");
      }
    } else {
      setMessage("oye y el protocolo???");
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

                <h2 className='title'>{data.name || 'Elegant Workspace'}</h2>
                <p className='slogan'>{data.slogan || 'Diseños Exclusivos'}</p>
                <p className='desc'>
                  {data.desc ||
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus'}
                </p>
                <section className='technologies'>
                  <p className='text'>{data.technologies || 'React JS, MongoDB'}</p>
                </section>
                <a href={data.demo} target='_blank'>
                  <i className='fa-solid fa-globe'></i>
                </a>

                <a href={data.repo} target='_blank'>
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
                value={data.name}
                onChange={handleChangeInput}
              />
              <input
                className='input'
                type='text'
                name='slogan'
                id='slogan'
                value={data.slogan}
                placeholder='Slogan'
                onChange={handleChangeInput}
              />
              <input
                className='input'
                type='text'
                name='repo'
                id='repo'
                placeholder='Repo'
                value = {data.repo}
                onChange={handleChangeInput}
              />
              {message ? "" : <p>{message}</p>  }
              <input
                className='input'
                type='text'
                placeholder='Demo'
                name='demo'
                id='demo'
                value={data.demo}
                onChange={handleChangeInput}
              />
              <input
                className='input'
                type='text'
                placeholder='Tecnologías'
                name='technologies'
                id='technologies'
                value={data.technologies}
                onChange={handleChangeInput}
              />
              <textarea
                className='textarea'
                type='text'
                placeholder='Descripción'
                name='desc'
                id='desc'
                value={data.desc}
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
