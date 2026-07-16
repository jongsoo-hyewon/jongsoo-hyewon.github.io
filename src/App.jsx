import { invitation, sectionOrder } from './content/invitation'
import { sections } from './sections'
import MusicPlayer from './components/MusicPlayer'
import Reveal from './components/Reveal'
import Share from './components/Share'
import './styles/themes.css'

export default function App() {
  return (
    <main className={`invitation theme-${invitation.theme}`}>
      {sectionOrder.map((section) => {
        const Section = sections[section]
        return Section ? <Reveal key={section}><Section {...invitation[section]} /></Reveal> : null
      })}
      <MusicPlayer {...invitation.music} />
      <Share names={invitation.hero.names} />
    </main>
  )
}
