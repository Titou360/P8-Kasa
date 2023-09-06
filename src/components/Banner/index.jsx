

import "../Banner/banner.scss";

export default function Banner({ image, alt, title1, title2 }) {
  return (
    <div>
      <img className="banner" src={ image } alt={ alt } />
      <h1 className="banner--text">
        <span>{ title1 }</span>
        <span>{ title2 }</span>
      </h1>
    </div>
  );
}

