import Header from './components/Header'
import Meme from './components/Meme'
import './style.css'

function App() {
  return(
    <>
      <Header />
      <div className='meme-section'>
        <Meme />
      </div>
    </>
  )
}

export default App
