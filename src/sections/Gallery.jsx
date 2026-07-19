import { useEffect, useRef, useState } from 'react'

export default function Gallery({ title, images, imagePosition = 'center', imageFit = 'cover' }) {
  const [selected, setSelected] = useState(null)
  const [availableImages, setAvailableImages] = useState(images)
  const [showAll, setShowAll] = useState(false)
  const selectedButton = useRef(null)
  const closeButton = useRef(null)
  const close = () => setSelected(null)
  const visibleImages = showAll ? availableImages : availableImages.slice(0, 3)

  useEffect(() => {
    if (selected === null) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') setSelected((current) => Math.max(0, current - 1))
      if (event.key === 'ArrowRight') setSelected((current) => Math.min(availableImages.length - 1, current + 1))
    }
    window.addEventListener('keydown', onKeyDown)
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = previousOverflow; selectedButton.current?.focus() }
  }, [selected, availableImages.length])

  const removeBroken = (image) => setAvailableImages((current) => current.filter((item) => item !== image))

  return <section className="gallery-section">
    <div className="section-heading"><span>OUR MOMENTS</span><h2>{title}</h2></div>
    <div className="gallery">{visibleImages.map((image, i) => {
      const imageIndex = availableImages.indexOf(image)
      return <button type="button" key={image} onClick={(event) => { selectedButton.current = event.currentTarget; setSelected(imageIndex) }}><img src={image} alt={`웨딩 사진 ${imageIndex + 1}`} loading="lazy" onError={() => removeBroken(image)} style={{ objectPosition: imagePosition, objectFit: imageFit }} /></button>
    })}</div>
    {!showAll && availableImages.length > 3 && <button className="gallery-more" type="button" onClick={() => setShowAll(true)}>더보기</button>}
    {selected !== null && availableImages[selected] && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`웨딩 사진 ${selected + 1}`} onClick={close}><button ref={closeButton} className="lightbox-close" type="button" onClick={close} aria-label="사진 닫기">×</button><img src={availableImages[selected]} alt={`웨딩 사진 ${selected + 1}`} onClick={(event) => event.stopPropagation()} style={{ objectFit: imageFit }} /></div>}
  </section>
}
