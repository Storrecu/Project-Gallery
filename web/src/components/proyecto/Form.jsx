/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import PropTypes from 'prop-types';
import GetAvatar from './GetAvatar';

const Form = ({
  handleChangeInput,
  handleAuthorInput,
  handleCreateCard,
  clearFormData,
  data,
  nameErrorMsg,
  sloganErrorMsg,
  urlOneErrorMsg,
  urlTwoErrorMsg,
  technologiesErrorMsg,
  descErrorMsg,
  authorErrorMsg,
  jobErrorMsg,
  cardMsg,
  cardURL,
}) => {
  const [showCardMessage, setShowCardMessage] = useState(true);

  const handleChangeForm = (ev) => {
    handleChangeInput(ev.target.id, ev.target.value);
    setShowCardMessage(true);
  };
  const handleClearForm = () => {
    clearFormData();
    setShowCardMessage(false);
  };

  return (
    <section className="form">
      <h2 className="title">Información</h2>

      <section className="ask-info">
        <p className="subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="line" />
      </section>

      <fieldset className="project">
        <input
          className="input"
          type="text"
          placeholder="Nombre del proyecto"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChangeForm}
        />
        {nameErrorMsg ? <p className="error-msg">{nameErrorMsg}</p> : ''}
        <input
          className="input"
          type="text"
          name="slogan"
          id="slogan"
          value={data.slogan}
          placeholder="Slogan"
          onChange={handleChangeForm}
        />
        {sloganErrorMsg ? <p className="error-msg">{sloganErrorMsg}</p> : ''}
        <input
          className="input"
          type="text"
          name="repo"
          id="repo"
          placeholder="Repo"
          value={data.repo}
          onChange={handleChangeForm}
        />
        {urlOneErrorMsg ? <p className="error-msg">{urlOneErrorMsg}</p> : ''}
        <input
          className="input"
          type="text"
          placeholder="Demo"
          name="demo"
          id="demo"
          value={data.demo}
          onChange={handleChangeForm}
        />
        {urlTwoErrorMsg ? <p className="error-msg">{urlTwoErrorMsg}</p> : ''}
        <input
          className="input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          value={data.technologies}
          onChange={handleChangeForm}
        />
        {technologiesErrorMsg ? (
          <p className="error-msg">{technologiesErrorMsg}</p>
        ) : (
          ''
        )}
        <textarea
          className="textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          value={data.desc}
          onChange={handleChangeForm}
        ></textarea>
        {descErrorMsg ? <p className="error-msg">{descErrorMsg}</p> : ''}
      </fieldset>

      <section className="ask-info">
        <p className="subtitle">Cuéntanos sobre la autora</p>
        <hr className="line" />
      </section>

      <fieldset className="autor">
        <input
          className="input"
          type="text"
          placeholder="Nombre"
          name="autor"
          id="autor"
          value={data.autor}
          onChange={handleAuthorInput}
        />
        {authorErrorMsg ? <p className="error-msg">{authorErrorMsg}</p> : ''}
        <input
          className="input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
          value={data.job}
          onChange={handleAuthorInput}
        />
        {jobErrorMsg ? <p className="error-msg">{jobErrorMsg}</p> : ''}
      </fieldset>

      <section className="buttons-img">
        <GetAvatar
          className="btn"
          updateAvatar={(image) => handleChangeInput('image', image)}
          text="Subir foto de la autora"
        />
        <GetAvatar
          className="btn"
          updateAvatar={(image) => handleChangeInput('photo', image)}
          text="Subir foto del proyecto"
        />
      </section>
      <section className="buttons-img">
        <button className="btn-large" onClick={handleCreateCard}>
          Crear Tarjeta
        </button>
        <button className="btn-large" onClick={handleClearForm}>
          Limpiar Formulario
        </button>
      </section>

      <section className="card">
        {showCardMessage ? (
          <span className="">
            <a className="card__url" target="_blank" href={cardURL}>
              {cardMsg} {cardURL}
            </a>
          </span>
        ) : null}
      </section>
    </section>
  );
};
Form.propTypes = {
  handleChangeInput: PropTypes.func,
  handleAuthorInput: PropTypes.func,
  handleCreateCard: PropTypes.func,
  clearFormData: PropTypes.func,
  data: PropTypes.object,
  nameErrorMsg: PropTypes.string,
  sloganErrorMsg: PropTypes.string,
  urlOneErrorMsg: PropTypes.string,
  urlTwoErrorMsg: PropTypes.string,
  technologiesErrorMsg: PropTypes.string,
  descErrorMsg: PropTypes.string,
  authorErrorMsg: PropTypes.string,
  jobErrorMsg: PropTypes.string,
  cardMsg: PropTypes.string,
  cardURL: PropTypes.string,
};
export default Form;
