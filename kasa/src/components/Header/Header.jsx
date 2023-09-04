import {Link} from "react-router-dom";
import logoHeader from '../../assets/image/logo/h_logo.png';

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logoHeader} alt="Logo de Kasa"></img>

        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to ="/about">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}