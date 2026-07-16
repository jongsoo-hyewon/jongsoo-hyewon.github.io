import { invitation, sectionOrder } from './content/invitation'
import { sections } from './sections'
import MusicPlayer from './components/MusicPlayer'
import Reveal from './components/Reveal'
import Share from './components/Share'
import Contacts from './components/Contacts'
import Footer from './sections/Footer'
import './styles/themes.css'

export default function App() {
  return (
    <main className={`invitation theme-${invitation.theme}`}>
      {sectionOrder.filter((section) => section !== 'footer').map((section) => {
        const Section = section === 'contacts' ? Contacts : sections[section]
        return Section ? <Reveal key={section}><Section {...invitation[section]} /></Reveal> : null
      })}
      <MusicPlayer {...invitation.music} />
      <Share names={invitation.hero.names} />
      <Reveal><Footer {...invitation.footer} /></Reveal>
    </main>
  )
}
