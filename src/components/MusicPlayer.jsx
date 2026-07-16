import { useRef, useState } from 'react'

export default function MusicPlayer({ src, label }) {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = async () => {
    if (playing) {
      audio.current.pause()
      setPlaying(false)
      return
    }
    await audio.current.play()
    setPlaying(true)
  }

  return <div className="music-player">
    <audio ref={audio} src={src} preload="metadata" onEnded={() => setPlaying(false)} />
    <button type="button" onClick={toggle} aria-pressed={playing} aria-label={`${label} ${playing ? '정지' : '재생'}`}>
      <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>{label}
    </button>
  </div>
}
