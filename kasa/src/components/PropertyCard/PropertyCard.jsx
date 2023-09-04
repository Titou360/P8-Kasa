// This components represents an individual card for each property.
// This compoents takes data property & displays informations
import PropTypes from 'prop-types';

export default function PropertyCard ( {property} ) {
    return (
        <li className="card">
            <article>
              <img src={property.cover} alt={property.title} />
                <h3>
                    {property.title}
                </h3>
                    <p>
                    {property.location}
                    </p>
            </article>
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