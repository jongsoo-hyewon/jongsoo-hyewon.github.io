export default function Ceremony({ date, venue, address, kakaoMapUrl, naverMapUrl, googleMapUrl }) {
  return <section className="ceremony section"><div className="section-heading"><span>CEREMONY</span></div><h2>{date}</h2><p>{venue}<br />{address}</p><div className="map-links"><a className="map-primary" href={naverMapUrl} target="_blank" rel="noreferrer">네이버지도에서 길찾기</a><a href={kakaoMapUrl} target="_blank" rel="noreferrer">카카오맵</a><a href={googleMapUrl} target="_blank" rel="noreferrer">Google Maps</a></div></section>
}
