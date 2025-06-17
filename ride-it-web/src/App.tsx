import { Footer } from './components/Footer';
import { HeaderNavigation } from './components/HeaderNavigation';
import { Tabs } from './components/Tabs';
import { UseHelmet } from './hooks/UseHelmet'
import { Rides } from './pages/Rides'
function App() {
  UseHelmet("Ride it");
  return (
    <>
    <HeaderNavigation />
     <div style={{
      marginLeft: 600,
      marginRight: 600,
      height: 'auto',
      padding: 20,
      border: '1px solid darkgray',
      width: 'auto',
      marginTop: 50,
      position: 'relative',
      borderRadius: '10px'
    }}>
     <Rides />
    </div>
    <div style={{
      marginLeft: 600,
      marginRight: 600,
      height: 'auto',
      padding: 20,
      border: '1px solid darkgray',
      width: 'auto',
      marginTop: 20,
      position: 'relative',
      borderRadius: '10px'
    }}>
     <div><Tabs /></div>
    </div>

    <Footer />
    </>
   
  )
}

export default App
