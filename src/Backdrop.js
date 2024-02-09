function Backdrop({ src, alt }) {
  return (
    <div>
      <div className="gif-card">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Backdrop;
