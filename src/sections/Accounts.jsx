export default function Accounts({ title, items }) {
  return <section className="accounts section"><div className="section-heading"><span>WITH WARM WISHES</span><h2>{title}</h2></div>{items.map(({ label, value }) => <p key={label}><b>{label}</b> {value}</p>)}</section>
}
