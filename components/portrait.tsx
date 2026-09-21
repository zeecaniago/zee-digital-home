export function Portrait({ large = false, personal = false }: { large?: boolean; personal?: boolean }) {
  const photo = personal
    ? { src: "/images/zee-family.png", alt: "Zee Caniago carrying his daughter on his shoulders", width: 1024, height: 1536 }
    : { src: "/images/zee-caniago.png", alt: "Black-and-white portrait of Zee Caniago", width: 1273, height: 1236 };
  return <figure className={large ? "portrait-large" : "portrait-frame"}>
    <img
      className="portrait-photo"
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={large ? "lazy" : "eager"}
      fetchPriority={large ? "auto" : "high"}
    />
    <figcaption className="portrait-caption">
      <p>Zee Caniago</p>
      <small>{personal ? "Life beyond the terminal" : large ? "Vancouver, British Columbia" : "Staff Software & Platform Engineer"}</small>
    </figcaption>
  </figure>;
}
