import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function ChoiceButton({ active, children, onClick }) {
  return <button className={`attendance-choice${active ? ' is-selected' : ''}`} type="button" aria-pressed={active} onClick={onClick}>
    <span>{children}</span>
  </button>
}

export default function AttendanceModal({ names, date, venue, theme, open, startAt = 'intro', onClose }) {
  const [step, setStep] = useState('intro')
  const [hideToday, setHideToday] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [side, setSide] = useState('groom')
  const [attendance, setAttendance] = useState('attending')

  useEffect(() => {
    if (localStorage.getItem('attendance-modal-hidden') === new Date().toDateString()) onClose()
  }, [onClose])

  useEffect(() => {
    if (!open) return
    setStep(startAt)
    setSubmitted(false)
    setSubmitError('')
    setSide('groom')
    setAttendance('attending')
  }, [open, startAt])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  const close = () => {
    if (hideToday) localStorage.setItem('attendance-modal-hidden', new Date().toDateString())
    onClose()
  }

  const submitRsvp = async (event) => {
    event.preventDefault()
    if (!supabase) {
      setSubmitError('참석 여부 연결 정보를 찾을 수 없습니다. 잠시 후 다시 시도해 주세요.')
      return
    }

    const form = new FormData(event.currentTarget)
    setSubmitting(true)
    setSubmitError('')
    const { error } = await supabase.from('rsvps').insert({
      side: form.get('side'),
      attendance: form.get('attendance'),
      companion_count: Number(form.get('companions')),
      guest_name: form.get('name')?.trim(),
      note: form.get('note')?.trim() || null,
      consented_at: new Date().toISOString(),
    })
    setSubmitting(false)

    if (error) {
      setSubmitError('전달에 실패했습니다. 입력 내용을 확인한 뒤 다시 시도해 주세요.')
      return
    }
    setSubmitted(true)
  }

  if (!open) return null

  return <div className={`attendance-backdrop theme-${theme}`} role="dialog" aria-modal="true" aria-labelledby="attendance-title">
    <section className="attendance-modal">
      <button className="attendance-close" type="button" onClick={close} aria-label="참석 여부 팝업 닫기">×</button>
      {step === 'intro' ? <>
        <span className="attendance-kicker">RSVP</span>
        <h2 id="attendance-title">참석 여부 전달</h2>
        <p className="attendance-intro">귀한 걸음으로 함께해 주실 수 있는지<br />미리 알려주시면 감사하겠습니다.</p>
        <dl className="attendance-summary">
          <div><dt>두 사람</dt><dd>{names}</dd></div>
          <div><dt>일시</dt><dd>{date}</dd></div>
          <div><dt>장소</dt><dd>{venue}</dd></div>
        </dl>
        <button className="attendance-primary" type="button" onClick={() => setStep('form')}>참석 여부 전달하기</button>
        <label className="attendance-hide"><input type="checkbox" checked={hideToday} onChange={(event) => setHideToday(event.target.checked)} /> 오늘 하루 보지 않기</label>
      </> : <form className="attendance-form" onSubmit={submitRsvp}>
        <span className="attendance-kicker">RSVP</span>
        <h2 id="attendance-title">참석 여부 전달</h2>
        {submitted ? <div className="attendance-complete"><p>마음을 알려주셔서 감사합니다.</p><small>참석 여부가 정상적으로 전달되었습니다.</small><button className="attendance-primary" type="button" onClick={close}>확인</button></div> : <>
          <fieldset><legend>어느 쪽 하객이신가요? <em>*</em></legend><input type="hidden" name="side" value={side} /><div className="attendance-options"><ChoiceButton active={side === 'groom'} onClick={() => setSide('groom')}>신랑측</ChoiceButton><ChoiceButton active={side === 'bride'} onClick={() => setSide('bride')}>신부측</ChoiceButton></div></fieldset>
          <fieldset><legend>참석 여부 <em>*</em></legend><input type="hidden" name="attendance" value={attendance} /><div className="attendance-options"><ChoiceButton active={attendance === 'attending'} onClick={() => setAttendance('attending')}>참석</ChoiceButton><ChoiceButton active={attendance === 'absent'} onClick={() => setAttendance('absent')}>불참</ChoiceButton></div></fieldset>
          <label className="attendance-field attendance-companions">동반 인원 <em>*</em><input name="companions" type="number" min="0" max="10" defaultValue="0" required /></label>
          <label className="attendance-field">성함 <em>*</em><input name="name" required placeholder="성함을 입력해 주세요" /></label>
          <label className="attendance-field">전달사항<textarea name="note" rows="4" placeholder="남기실 말씀이 있다면 적어 주세요" /></label>
          <label className="attendance-agree"><input type="checkbox" required /> 개인정보 수집 및 활용에 동의합니다.</label>
          {submitError && <p className="attendance-error" role="alert">{submitError}</p>}
          <button className="attendance-primary" type="submit" disabled={submitting}>{submitting ? '전달 중…' : '전달하기'}</button>
        </>}
      </form>}
    </section>
  </div>
}
