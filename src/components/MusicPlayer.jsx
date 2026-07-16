import { useRef, useState } from 'react'

export default function MusicPlayer({ src, label }) {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState('')

  const toggle = async () => {
    if (playing) {
      audio.current.pause()
      setPlaying(false)
      return
    }
    try {
      await audio.current.play()
      setPlaying(true)
      setError('')
    } catch {
      setPlaying(false)
      setError('음악을 재생하지 못했습니다.')
    }
  }

  return <div className="music-player">
    <audio ref={audio} src={src} preload="metadata" onEnded={() => setPlaying(false)} onError={() => setError('음악을 불러오지 못했습니다.')} />
    <button type="button" onClick={toggle} aria-pressed={playing} aria-label={`${label} ${playing ? '정지' : '재생'}`}>
      <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>{label}
    </button>
    {error && <p className="music-error" role="status">{error}</p>}
  </div>
}
