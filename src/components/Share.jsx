import { useEffect, useState } from 'react'
import { copyText } from '../utils/clipboard'

export default function Share({ names }) {
  const [message, setMessage] = useState('')
  const kakaoKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
  const templateId = Number(import.meta.env.VITE_KAKAO_TEMPLATE_ID)

  useEffect(() => {
    if (!message) return undefined
    const timer = window.setTimeout(() => setMessage(''), 2200)
    return () => window.clearTimeout(timer)
  }, [message])

  const shareWithKakao = () => {
    const kakao = window.Kakao
    if (!kakao || !kakaoKey || !templateId) return false
    if (!kakao.isInitialized()) kakao.init(kakaoKey)
    kakao.Share.sendCustom({ templateId })
    return true
  }

  const shareNative = async () => {
    const data = { title: `${names}의 모바일 청첩장`, text: `${names}의 결혼식에 초대합니다.`, url: window.location.href }
    if (navigator.share) {
      try { await navigator.share(data) } catch (error) { if (error.name !== 'AbortError') setMessage('공유하지 못했습니다.') }
      return
    }
    try { await copyText(window.location.href); setMessage('링크를 복사했습니다.') } catch { setMessage('주소창의 링크를 복사해 주세요.') }
  }

  const copyLink = async () => {
    try { await copyText(window.location.href); setMessage('링크를 복사했습니다.') } catch { setMessage('링크를 복사하지 못했습니다.') }
  }

  const share = async () => {
    try {
      if (shareWithKakao()) return
    } catch {
      setMessage('카카오 공유를 열지 못했습니다. 일반 공유를 사용해 주세요.')
    }
    await shareNative()
  }

  const copied = message === '링크를 복사했습니다.'

  return <section className="share section"><div className="section-heading"><span>SHARE</span><h2>소중한 분께 전해 주세요</h2></div><div className="share-actions"><button type="button" onClick={share}>카카오톡으로 전하기</button><button type="button" onClick={copyLink}>링크 복사하기</button></div>{message && <p className={`share-toast ${copied ? 'is-copy-success' : ''}`} role="status">{message}</p>}</section>
}
