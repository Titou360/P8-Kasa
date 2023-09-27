import PropTypes from 'prop-types';

export default function Banner({ image, alt, title1, title2 }) {
  return (
    <div className='container-banner'>
    <div className='banner'>
      <img className="banner--image" src={ image } alt={ alt } />
      <h1 className="banner--text">
        <span>{ title1 }</span>
        <span>{ title2 }</span>
      </h1>
    </div>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};