import {useState} from 'react';
import { supabase } from '../supabaseClient'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Profil.css'
function Profil() {
  const [user, setUser] = useState(null);
useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setUser(session?.user ?? null)
  })
}, [])
  return (
<div className="profil-page">
    <div className="profil-container">
      <h1>Profil</h1>
      <p>Bienvenue sur votre profil !</p>
        {user ? (
        <div>
            <p>{user.email}</p>
            <button className="profil-button" onClick={() => supabase.auth.signOut().then(() => setUser(null))}>Se déconnecter</button>
        </div>
        ) : (
        <div>
            <Link to="/auth">
                <button className="profil-button">Connexion</button>
            </Link>
            <Link to="/auth">
                <button className="profil-button">Inscription</button>
            </Link>
  </div>
)}    </div>
</div>
  );
}

export default Profil