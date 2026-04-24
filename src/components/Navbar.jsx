import {Link} from 'react-router-dom'
import './Navbar.css'
import {useState} from 'react'
import {Menu} from 'lucide-react'
function Navbar() {
  const [position, setPosition] = useState({ bottom: 5, right: 5 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleTouchMove = (e) => {setPosition({
      bottom: window.innerHeight - e.touches[0].clientY - 25,
      right: window.innerWidth - e.touches[0].clientX - 25
    }) }
    const handleTouchEnd = () => {
      if (position.right < window.innerWidth / 2) {
        setPosition({bottom:position.bottom, right: 10})
      } else {
        setPosition({bottom:position.bottom, right: window.innerWidth - 60})
      }}
  return(
    <>
    <button onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} style={{ bottom: position.bottom + 'px', right: position.right + 'px', position: 'fixed' }} className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu /></button>      <nav className={isMenuOpen ?'navbar open' : 'navbar'}>
        <Link to="/">Accueil</Link>
        <Link to="/billet">Billet</Link>
        <Link to="/circuits">Circuits</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/profil">Profil</Link>
      </nav>
    </>
    )
  }
export default Navbar