import {Link, NavLink} from "react-router-dom";
import logoHeader from '../../assets/image/logo/h_logo.png';
import '../Header/header.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/"><img src={logoHeader} alt="Logo de Kasa"></img></Link>

        <ul>
          <li><NavLink to="/" activeClassName="active-link">Accueil</NavLink></li>
          <li><NavLink to ="/about"activeClassName="active-link">À propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}