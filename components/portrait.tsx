export function Portrait({ large = false }: { large?: boolean }) {
  return <figure className={large ? "portrait-large" : "portrait-frame"}>
    <img
      className="portrait-photo"
      src="/images/zee-caniago.png"
      alt="Black-and-white portrait of Zee Caniago"
      width={1273}
      height={1236}
      loading={large ? "lazy" : "eager"}
      fetchPriority={large ? "auto" : "high"}
    />
    <figcaption className="portrait-caption">
      <p>Zee Caniago</p>
      <small>{large ? "Vancouver, British Columbia" : "Staff Software & Platform Engineer"}</small>
    </figcaption>
  </figure>;
}
