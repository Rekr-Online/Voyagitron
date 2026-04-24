import { Link } from "react-router-dom";
import './Card.css'
function Card({ titre, description, lien }) {
  return (
    <Link to={lien} className="card-link">
    <article className="card">
    <h2>{titre}</h2>
    <p>{description}</p>
    </article>
    </Link>
  )
}

export default Card;