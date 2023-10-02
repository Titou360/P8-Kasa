// This component represents an individual card for each property.
// This component takes property data & displays informations
import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';

export default function PropertyCard ( {property} ) {
    return (
        <li className="card">
          <Link to={`/property/${property.id}`} title={property.title}>
            <article className="card--article" id={property.id}>
              <img className="card--article__image" src={property.cover} alt={property.title} />
                <h2 className="card--article__title">
                    {property.title}
                </h2>
                    {/* <p className="card--article__location">
                    {property.location}
                    </p> */}
            </article>
          </Link>
        </li>
    )
}


PropertyCard.propTypes = {
    property: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }).isRequired,
      rating: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };