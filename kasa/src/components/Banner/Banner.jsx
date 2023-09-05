

export default function Banner({ text, background }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
      {text && <h1 className="banner--text">{text}</h1>}
    </div>
  );
}
