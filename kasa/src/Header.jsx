import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <img alt="Logo de Kasa"></img>
        <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;