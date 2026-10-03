import Image from "next/image";

const photo = { src: "/images/zee-caniago.png", alt: "Black-and-white portrait of Zee Caniago", width: 1273, height: 1236 };
const title = "Staff Software & Platform Engineer";

/** Homepage hero portrait: grayscale photo with an offset sage frame line. */
export function HeroPortrait({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return <div className="hero-id">
      <div className="hero-photo hero-photo-small"><Image src={photo.src} alt="" width={photo.width} height={photo.height} sizes="64px" loading="eager" /></div>
      <p><b>Zee Caniago</b><span>{title}</span></p>
    </div>;
  }
  return <figure className="hero-figure">
    <div className="hero-photo"><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="310px" loading="eager" fetchPriority="high" /></div>
    <figcaption><span className="fig-label">Fig. 01</span> · Zee Caniago<br /><span className="fig-title">{title}</span></figcaption>
  </figure>;
}
