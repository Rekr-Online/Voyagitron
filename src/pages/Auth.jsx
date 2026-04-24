import { supabase } from '../supabaseClient'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
function Auth() {
const [mode, setMode] = useState("connexion") 
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")     
const navigate = useNavigate()
const handleSubmit = async () => {
    if (mode === "inscription" && password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas")
        return
}
if (mode === "connexion") {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    if (!error) navigate("/")
} else {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    if (!error) alert("Inscription réussie, veuillez vérifier votre email pour confirmer votre compte")
    }
}
return(
    <div className="auth-page">
        <div className= "auth-container">
            <h1>{mode === "connexion" ? "Connexion" : "Inscription"}</h1>
        <input className = "auth-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className = "auth-input" type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className = "auth-input" type="password" placeholder="Confirmer le mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ display: mode === "inscription" ? "block" : "none" }} />
        <button className= "auth-button" onClick={handleSubmit}>
            {mode === "connexion" ? "Se connecter" : "S'inscrire"}
        </button>
        <button className= "auth-button" onClick={() => setMode(mode === "connexion" ? "inscription" : "connexion")}>
            {mode === "connexion" ? "Pas encore inscrit ?" : "Déjà inscrit ?"}
        </button>
        </div>
    </div>
    )
}
export default Auth