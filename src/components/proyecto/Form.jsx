const Form = () => {
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
          onChange={handleChangeInput}
        />
        {nameErrorMsg ? <p className="error-msg">{nameErrorMsg}</p> : ''}
        <input
          className="input"
          type="text"
          name="slogan"
          id="slogan"
          value={data.slogan}
          placeholder="Slogan"
          onChange={handleChangeInput}
        />
        {sloganErrorMsg ? <p className="error-msg">{sloganErrorMsg}</p> : ''}
        <input
          className="input"
          type="text"
          name="repo"
          id="repo"
          placeholder="Repo"
          value={data.repo}
          onChange={handleChangeInput}
        />
        {urlOneErrorMsg ? <p className="error-msg">{urlOneErrorMsg}</p> : ''}
        <input
          className="input"
          type="text"
          placeholder="Demo"
          name="demo"
          id="demo"
          value={data.demo}
          onChange={handleChangeInput}
        />
        {urlTwoErrorMsg ? <p className="error-msg">{urlTwoErrorMsg}</p> : ''}
        <input
          className="input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          value={data.technologies}
          onChange={handleChangeInput}
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
          onChange={handleChangeInput}
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
        <button className="btn">Subir foto de proyecto</button>
        <button className="btn">Subir foto de autora</button>
      </section>
      <section className="buttons-img">
        <button className="btn-large" onClick={handleCreateCard}>
          Crear Tarjeta
        </button>
      </section>

      <section className="card">
        <span className="">
          <a target="_blank" href={cardURL}>
            {cardMsg} {cardURL}
          </a>
        </span>
      </section>
    </section>
  );
};
export default Form;
