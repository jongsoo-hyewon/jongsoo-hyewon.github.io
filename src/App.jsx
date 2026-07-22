import { useEffect, useState } from 'react'
import { invitation, sectionOrder } from './content/invitation'
import { sections } from './sections'
import MusicPlayer from './components/MusicPlayer'
import Reveal from './components/Reveal'
import Share from './components/Share'
import Contacts from './components/Contacts'
import AttendanceModal from './components/AttendanceModal'
import Rsvp from './sections/Rsvp'
import Footer from './sections/Footer'
import './styles/themes.css'

function Opening() {
  const [leaving, setLeaving] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 2500)
    const hideTimer = window.setTimeout(() => setVisible(false), 3050)
    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`opening ${leaving ? 'is-leaving' : ''}`} aria-hidden="true">
      <div className="opening-card">
        <span className="opening-kicker">WEDDING INVITATION</span>
        <p className="opening-title">We're getting married!</p>
      </div>
    </div>
  )
}

export default function App() {
  const [attendanceOpen, setAttendanceOpen] = useState(true)
  const [attendanceStartAt, setAttendanceStartAt] = useState('intro')

  const openAttendanceForm = () => {
    setAttendanceStartAt('form')
    setAttendanceOpen(true)
  }

  return (
    <>
      <main className={`invitation theme-${invitation.theme}`}>
        {sectionOrder.filter((section) => section !== 'footer').map((section) => {
          const Section = section === 'contacts' ? Contacts : sections[section]
          return Section ? <Reveal key={section}><Section {...invitation[section]} /></Reveal> : null
        })}
        <MusicPlayer {...invitation.music} />
        <Reveal><Rsvp {...invitation.rsvp} onOpen={openAttendanceForm} /></Reveal>
        <Share names={invitation.hero.names} />
        <Reveal><Footer {...invitation.footer} /></Reveal>
      </main>
      <Opening />
      <AttendanceModal names={invitation.hero.names} date={invitation.hero.date} venue={invitation.hero.venue} theme={invitation.theme} open={attendanceOpen} startAt={attendanceStartAt} onClose={() => setAttendanceOpen(false)} />
    </>
  )
}
