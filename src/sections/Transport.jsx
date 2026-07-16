export default function Transport({ title, subway, shuttle, note }) {
  return <section className="transport section"><div className="section-heading"><span>TRANSPORTATION</span><h2>{title}</h2></div><div className="transport-item"><b>지하철</b><p>{subway}</p></div><div className="transport-item"><b>순환 셔틀</b><p>{shuttle}</p></div><p className="transport-note">{note}</p></section>
}
