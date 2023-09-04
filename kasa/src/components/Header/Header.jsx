import {Link} from "react-router-dom";

export default function Header() {
  return (
    <nav>
    <img src="#" alt="Logo de Kasa"></img>
    <ul>
    <li><Link to="/">Accueil</Link></li>
    <li><Link to ="/about">À propos</Link></li>
    </ul>
        
</nav>
  );
}