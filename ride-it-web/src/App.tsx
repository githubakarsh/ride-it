import { Footer } from './components/Footer'
import { HeaderNavigation } from './components/HeaderNavigation'
import { Tabs } from './components/Tabs'
import { UseHelmet } from './hooks/UseHelmet'
import { Rides } from './pages/Rides'

function App() {
  UseHelmet('Ride it')
  return (
    <div className="neo-layout">
      <HeaderNavigation />
      <main className="neo-main">
        <div className="neo-container" style={{ margin: '2rem auto', maxWidth: '600px' }}>
          <Rides />
        </div>
        <div className="neo-container" style={{ margin: '2rem auto', maxWidth: '600px' }}>
          <Tabs />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
