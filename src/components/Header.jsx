import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <i className='header__icon fa-brands fa-pagelines fa-lg'></i>
      <h1 className='header__h1'>Proyectos Molones</h1>
      <i className='header__icon fa-solid fa-leaf fa-lg'></i>
      <p className='header__text'>
        Escaparate en línea para recoger ideas a través de la tecnología.
      </p>
      {/* <button className='header__btn'>Ver proyectos</button> */}
      {/* <Link className='header__btn' to='/form'
        >
      Ver proyectos
      </Link> */}
    </header>
  );
};
export default Header;
