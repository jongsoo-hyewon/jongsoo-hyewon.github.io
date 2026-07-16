export default function Transport({ title = '오시는 길', subway, bus, shuttle, driving, parking, note }) {
  const items = [
    ['▤', '버스', bus],
    ['▥', '지하철', subway],
    ['↔', '셔틀버스', shuttle],
    ['⌂', '자가용', driving],
    ['Ⓟ', '주차', parking],
  ]

  return <section className="transport section">
    <div className="section-heading"><span>TRANSPORTATION</span><h2>{title}</h2></div>
    {items.map(([icon, label, text]) => <div className="transport-item" key={label}>
      <h3><span aria-hidden="true">{icon}</span>{label}</h3><p>{text}</p>
    </div>)}
    {note && <p className="transport-note">{note}</p>}
  </section>
}
