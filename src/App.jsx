import './App.css'
import { Routes, Route} from 'react-router-dom'
import Accueil from './pages/Accueil.jsx'
import Billet from './pages/Billet.jsx'
import Circuits from './pages/Circuits.jsx'
import Quiz from './pages/Quiz.jsx'
import Navbar from './components/Navbar.jsx'
import Auth from './pages/Auth.jsx'
import Profil from './pages/Profil.jsx'

function App() {
  return(
    <>
    <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/billet" element={<Billet />} />
          <Route path="/circuits" element={<Circuits />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profil" element={<Profil />} />
      </Routes>
      </>
  )
}

export default App
