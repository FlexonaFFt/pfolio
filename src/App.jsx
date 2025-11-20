import './App.css'
import './App.css'
import Intro from './components/Intro'
import ScrollSection from './components/ScrollSection'

function App() {
  return (
    <div className="page-shell">
      <div className="bg-layer bg-stripes" aria-hidden="true" />
      <Intro />
      <ScrollSection />
    </div>
  )
}

export default App
