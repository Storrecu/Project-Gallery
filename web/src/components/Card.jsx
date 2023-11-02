


const Card = ({data}  )=> {

    return(

       
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
          <div className='icon-div'>
            <a className='icon-preview' href={data.demo} target='_blank'>
              <i className='fa-solid fa-globe'></i>
            </a>
            <a className='icon-preview' href={data.repo} target='_blank'>
              <i className='fa-brands fa-github'></i>
            </a>
          </div>
        </section>

        <section className='info-autor'>
          <img
            className='image'
            src={data.image || '../../images/hierbas.webp'}
            alt=''
          />
          <p className='job'>{data.job || 'Full Stack Developer'}</p>
          <p className='name'>{data.autor || 'Emmelie Björklund'}</p>
        </section>
      </section>

    )

}
export default Card;