import { useState } from 'react'
import { copyText } from '../utils/clipboard'

export default function Share({ names }) {
  const [message, setMessage] = useState('')
  const share = async () => {
    const data = { title: `${names}의 모바일 청첩장`, text: `${names}의 결혼식에 초대합니다.`, url: window.location.href }
    if (navigator.share) {
      try { await navigator.share(data) } catch (error) { if (error.name !== 'AbortError') setMessage('공유하지 못했습니다.') }
      return
    }
    try { await copyText(window.location.href); setMessage('') } catch { setMessage('주소창의 링크를 복사해 주세요.') }
  }

  return <section className="share section"><div className="section-heading"><span>SHARE</span><h2>소중한 분께 전해 주세요</h2></div><button type="button" onClick={share}>청첩장 공유하기</button>{message && <p role="status">{message}</p>}</section>
}
