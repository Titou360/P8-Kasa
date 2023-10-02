import logoFooter from '../../assets/image/logo/f_logo.png';

export default function Footer() {
  return (
    <footer>
      
        <img
         src={logoFooter}
         alt="Logo de Kasa">
        </img>

        <p 
          className="footer--p">
            © 2020, Kasa All rights reserved
        </p>

    </footer>
  );
}