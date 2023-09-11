import starActive from '../Stars/star-active.png';
import starInactive from '../Stars/star-inactive.png';


export default function Stars ({ starRating }) {

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
        console.log(starRating);
    }

    return (
        
        <div className="star">{star}</div>
    );
}

