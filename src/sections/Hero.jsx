export default function Hero({ eyebrow, names, date, venue, image, imagePosition = 'center', overlay = 0.6 }) {
  return <header className="hero" style={{ '--hero-overlay': overlay, '--hero-position': imagePosition, backgroundImage: `linear-gradient(180deg, rgba(35,24,18,.06), rgba(35,24,18,var(--hero-overlay))), url(${image})` }}><div><span>{eyebrow}</span><h1>{names}</h1><p>{date}</p>{venue && <p className="hero-venue">{venue}</p>}</div></header>
}
