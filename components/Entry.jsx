export default function Entry(props) {
  return (
    <>
      <article className="entry__container">
        <div className="image__container">
          <img
            src={props.entry.img.src}
            className="entry__image"
            alt={props.entry.img.alt}
          />
        </div>
        <div className="text__container">
          <div className="location__container">
            <img
              src="/images/marker.png"
              className="location__marker"
              alt="location marker"
            />
            <span className="location__country">{props.entry.country}</span>
            <a
              href={props.entry.googleMapsLink}
              className="location__link"
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
          <h2 className="entry__title">{props.entry.title}</h2>
          <p className="entry__date">{props.entry.dates}</p>
          <p className="entry__description">{props.entry.text}</p>
        </div>
      </article>
      <hr className="entry__divider" />
    </>
  );
}
