import { Link } from 'react-router-dom';
import './error404.scss';

export default function Page404() {
    return (
        <div className="errorpage">
            <span className="errorpage--span">
                404
            </span>

            <p className="errorpage--info">
                Oups! Votre page n&apos;a pas été trouvée
            </p>

            <Link to="/"><p className='errorpage--backtohome'>Retourner sur le page d&apos;accueil</p></Link>


        </div>
    )
}