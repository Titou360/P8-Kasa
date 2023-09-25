import {Link} from "react-router-dom";
import logoHeader from '../../assets/image/logo/h_logo.png';
import Navbar from "../Navbar";

export default function Header() {

  return (
    <header>
        <Link to="/">
          <img src= { logoHeader }
          className="logo-header"
          alt="Logo de Kasa"
          />
        </Link>
      <Navbar />
    </header>
  );
}