import './Accueil.css'
import Card from '../components/card.jsx'
function Accueil() {
  return(
    <div className="accueil-container">
    <header className="accueil-header">
      <h1>Voyagitron</h1>
              <p>Bienvenue sur Voyagitron, l'appli qui te fais voyager en vrai ! et dans la tête !</p>
    </header>
          <div className="accueil-cards">
               <Card titre="Billet" description=" grâce à notre système comparatif innovant, trouvez le billet qu'il vous faut et sauvgarder-le dans votre application Voyagitron !" lien="/billet"/>
               <Card titre="Circuits" description="Découvre nos circuits touristiques, que tu sois plutôt musée, nature ou street art, on a ce qu'il te faut !" lien="/circuits"/>
               <Card titre="Quiz" description="Tu te crois malin ou maline ? Test tes connaissances et met une raclé pacifique à tes amis avec notre quiz culturel !" lien="/quiz"/>
          </div>
          </div>
      )
}

export default Accueil