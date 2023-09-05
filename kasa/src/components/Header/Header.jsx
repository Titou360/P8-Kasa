import {NavLink} from "react-router-dom";
import logoHeader from '../../assets/image/logo/h_logo.png';

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logoHeader} alt="Logo de Kasa"></img>

        <ul>
          <li><NavLink to="/" activeClassName="active-link">Accueil</NavLink></li>
          <li><NavLink to ="/about"activeClassName="active-link">À propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}