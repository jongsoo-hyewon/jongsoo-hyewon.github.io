import { useEffect, useRef, useState } from 'react'

export default function Contacts({ groom, bride }) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('groom')
  const openButton = useRef(null)
  const closeButton = useRef(null)
  const historyActive = useRef(false)
  const people = tab === 'groom' ? groom : bride

  const close = () => {
    if (historyActive.current) {
      historyActive.current = false
      window.history.back()
    }
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key !== 'Tab') return
      const focusable = [...document.querySelectorAll('.contact-modal button, .contact-modal a')]
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = previousOverflow; openButton.current?.focus() }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    window.history.pushState({ contactModal: true }, '')
    historyActive.current = true
    const onPopState = () => {
      if (!historyActive.current) return
      historyActive.current = false
      setOpen(false)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [open])

  return <>
    <section className="contacts section"><div className="section-heading"><span>CONTACT</span><h2>축하 연락하기</h2></div><div className="parents-summary"><div><p><span>{groom[1]?.name ?? '신랑 아버지'}</span> · <span>{groom[2]?.name ?? '신랑 어머니'}</span><em>의 아들</em></p><strong>{groom[0]?.name ?? '신랑 금종수'}</strong></div><div><p><span>{bride[1]?.name ?? '신부 아버지'}</span> · <span>{bride[2]?.name ?? '신부 어머니'}</span><em>의 딸</em></p><strong>{bride[0]?.name ?? '신부 강혜원'}</strong></div></div><button ref={openButton} className="contact-open" type="button" onClick={() => setOpen(true)}>축하 연락하기 <span aria-hidden="true">→</span></button></section>
    {open && <div className="contact-modal-backdrop" role="presentation" onClick={close}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={(event) => event.stopPropagation()}><button ref={closeButton} className="modal-close" type="button" onClick={close} aria-label="연락처 닫기">×</button><h2 id="contact-title">축하 연락하기</h2><p>직접 축하의 마음을 전해보세요</p><div className="contact-tabs"><button type="button" className={tab === 'groom' ? 'active' : ''} onClick={() => setTab('groom')}>신랑에게</button><button type="button" className={tab === 'bride' ? 'active' : ''} onClick={() => setTab('bride')}>신부에게</button></div><div className="contact-list">{people.map((person) => <article key={person.name}><div><strong>{person.name}</strong><span>{person.relation}</span></div><div className="contact-actions"><a href={`sms:${person.phone}`}>문자 보내기</a><a href={`tel:${person.phone}`}>전화하기</a></div></article>)}</div></section></div>}
  </>
}
