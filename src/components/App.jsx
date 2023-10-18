/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import CardPreview from './proyecto/CardPreview';
import Form from './proyecto/Form';
import GetAvatar from './proyecto/GetAvatar';
import Profile from './proyecto/Profile';



function App() {
  //States
  const [data, setData] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    image:
      'https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg?w=585&scale=down',
    autor: '',
    job: '',
    photo:
      'https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg?w=585&scale=down',
  });

  //msg/url states

  const [cardMsg, setCardMsg] = useState('');
  const [cardURL, setCardURL] = useState('');

  //RegExp
  const expRegUrl =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,})(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)*$/;

  const patron = /^[ A-Za-zäÄëËïÏöÖüÜáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ-]+$/;


  const [pepino, setPepino] = useState ({});

   /*const handlePepino = () => {
  }
*/

  // Handlers

  const handleChangeInput = (input, value) => {

    if (input === 'name') {
      setNameErrorMsg(!value ? 'Este campo es requerido' : '');
    } else if (input === 'slogan') {
      setSloganErrorMsg(!value ? 'Este campo es requerido' : '');
    } else if (input === 'technologies') {
      setTechnologiesErrorMsg(!value ? 'Este campo es requerido' : '');
    } else if (input === 'desc') {
      setDescErrorMsg(!value ? 'Este campo es requerido' : '');
    } else if (input === 'repo') {
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
    } else if (input === 'demo') {
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

    setData({ ...data, [input]: value });
  };

  const handleCreateCard = () => {
    fetch('https://dev.adalab.es/api/projectCard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((pepino) => {
        console.log(pepino);
        console.log(data);
        if (pepino.success === false) {
          setCardMsg('Algo ha ido mal');
        } else {
          setCardURL(pepino.cardURL);
          setCardMsg(`Tu tarjeta ha sido creada:`);
        }
      });
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
      <div className="container">
        <Header />
        <main className="main">
          <CardPreview />
          <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
      <Profile avatar={avatar} />
          <Form handleChangeInput = {handleChangeInput} handleAuthorInput = {handleAuthorInput}/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
