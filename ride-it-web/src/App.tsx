import { UseHelmet } from './hooks/UseHelmet'
import { Rides } from './pages/Rides'
function App() {
  UseHelmet("Ride it");
  return (
    <>
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
     <div>My Rides | Upcoming Rides | Completed Rides | Cancelled Rides</div>
    </div>
    </>
   
  )
}

export default App
