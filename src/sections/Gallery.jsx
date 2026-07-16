import { useEffect, useState } from 'react'

export default function Gallery({ title, images, imagePosition = 'center', imageFit = 'cover' }) {
  const [selected, setSelected] = useState(null)
  const [availableImages, setAvailableImages] = useState(images)
  const close = () => setSelected(null)

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && close()
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const removeBroken = (image) => setAvailableImages((current) => current.filter((item) => item !== image))
  return <section className="gallery-section"><div className="section-heading"><span>OUR MOMENTS</span><h2>{title}</h2></div><div className="gallery">{availableImages.map((image, i) => <button type="button" key={image} onClick={() => setSelected(i)}><img src={image} alt={`웨딩 사진 ${i + 1}`} loading="lazy" onError={() => removeBroken(image)} style={{ objectPosition: imagePosition, objectFit: imageFit }} /></button>)}</div>{selected !== null && availableImages[selected] && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`웨딩 사진 ${selected + 1}`} onClick={close}><button className="lightbox-close" type="button" onClick={close} aria-label="사진 닫기">×</button><img src={availableImages[selected]} alt={`웨딩 사진 ${selected + 1}`} onClick={(event) => event.stopPropagation()} style={{ objectFit: imageFit }} /></div>}</section>
}
