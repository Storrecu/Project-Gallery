import imgUser from '../../images/hierbas.webp';
import imgCover from '../../images/playa.jpg';

const CardPreview = () => {
  return (
    <section className="preview">
      <img className="image" src={imgCover} alt="" />

      <section className="autor">
        <section className="info-project">
          <p className="subtitle">Personal Project Card</p>
          <hr className="line" />

          <h2 className="title">{data.name || 'Elegant Workspace'}</h2>
          <p className="slogan">{data.slogan || 'Diseños Exclusivos'}</p>
          <p className="desc">
            {data.desc ||
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus'}
          </p>
          <section className="technologies">
            <p className="text">{data.technologies || 'React JS, MongoDB'}</p>
          </section>
          <a href={data.demo} target="_blank">
            <i className="fa-solid fa-globe"></i>
          </a>

          <a href={data.repo} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </section>

        <section className="info-autor">
          <img className="image" src={imgUser} alt="" />
          <p className="job">{data.job || 'Full Stack Developer'}</p>
          <p className="name">{data.autor || 'Emmelie Björklund'}</p>
        </section>
      </section>
    </section>
  );
};
export default CardPreview;
