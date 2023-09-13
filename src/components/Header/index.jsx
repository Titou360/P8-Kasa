import {Link, NavLink} from "react-router-dom";
import logoHeader from '../../assets/image/logo/h_logo.png';

export default function Header() {

  return (
    <header>
      <nav>
        <Link to="/">
          <img src= { logoHeader }
          className="logo-header"
          alt="Logo de Kasa"
          />
        </Link>

        <ul>
          <li>
            <NavLink to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            exact="true">
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink to ="/about"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
            À propos
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}