import starActive from '../../assets/image/stars/star-active.png';
import starInactive from '../../assets/image/stars/star-inactive.png';
import PropTypes from 'prop-types';



export default function Stars ({starRating}) {

    const maxRating = 5;
    const star = [];
    for (let i = 1; i <= maxRating; i++) {
        star.push(
            <img
                key={i}
                src={i <= starRating ? starActive : starInactive}
                alt={i <= starRating ? "Active star" : "Inactive Star "}
            />
        )
    }

    return (
        
        <div className="star">{star}</div>
    );
}

Stars.propTypes = {
    starRating : PropTypes.string.isRequired
  };

