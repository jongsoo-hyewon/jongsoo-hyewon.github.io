export default function Rsvp({ title, body, onOpen }) {
  return <section className="section rsvp">
    <div className="section-heading"><span>RSVP</span><h2>{title}</h2></div>
    <p>{body}</p>
    <button type="button" onClick={onOpen}>참석 여부 전달하기</button>
  </section>
}
