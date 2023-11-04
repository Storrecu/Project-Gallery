import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <i className="header__icon fa-brands fa-pagelines"></i>
      <h1 className="header__h1">Proyectos Molones</h1>
      <i className="header__icon fa-solid fa-leaf"></i>
      <p className="header__text">
        Escaparate en línea para recoger ideas a través de la tecnología.
      </p>
      <section className="navigation__btns">
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
        {isMenuOpen ? (
          <section className={`menu-section ${isMenuOpen ? 'open' : ''}`}>
            <Link className="navigation__btns-one" to="/" onClick={toggleMenu}>
              Volver al inicio
            </Link>
            <Link
              className="navigation__btns-two"
              to="/projects"
              onClick={toggleMenu}
            >
              Ver proyectos
            </Link>
            <Link
              className="navigation__btns-three"
              to="/form"
              onClick={toggleMenu}
            >
              Crea tu proyecto
            </Link>
          </section>
        ) : null}
      </section>
    </header>
  );
};

export default Header;
