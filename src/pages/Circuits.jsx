import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient";
import './Circuits.css'

const libraries = ["places"]
const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#00ff88" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a2e" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#0f3460" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#060623" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#0f3460" }] }
]

function Circuits() {
  const [marqueurs, setMarqueurs] = useState([])
  const [position, setPosition] = useState(null)
  const [circuits, setCircuits] = useState([])
  const [nomCircuits, setNomCircuits] = useState("")
  const [nomDossier, setNomDossier] = useState("")
  const [dossiers, setDossiers] = useState([])
  const [dossierSelectionne, setDossierSelectionne] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    navigator.geolocation.watchPosition((pos) => {
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude })
    })
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
  }, [])

  useEffect(() => {
    fetchCircuits()
    fetchDossiers()
  }, [])

  const fetchCircuits = async () => {
    const { data } = await supabase.from('circuits').select('*')
    setCircuits(data)
  }

  const fetchDossiers = async () => {
    const { data } = await supabase.from('dossiers').select('*')
    setDossiers(data)
  }

  const creerDossier = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    const user_id = session?.user?.id
    await supabase.from('dossiers').insert({ nom: nomDossier, user_id })
    fetchDossiers()
  }

  const supprimerDossier = async (id) => {
    await supabase.from('dossiers').delete().eq('id', id)
    fetchDossiers()
  }

  const supprimerCircuit = async (id) => {
    await supabase.from('circuits').delete().eq('id', id)
    fetchCircuits()
  }

  const sauvegarderCircuit = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    const user_id = session?.user?.id
    await supabase.from('circuits').insert({ marqueurs, nom: nomCircuits, user_id })
    fetchCircuits()
  }

  const partagerCircuits = async (id) => {
    await supabase.from('circuits').update({ partage: true }).eq('id', id)
    await navigator.share({
      title: 'Voyagitron',
      text: 'Découvre ce circuit sur Voyagitron !',
      url: `${window.location.origin}/circuit/${id}`
    })
  }

  return (
    <>
      <h1>Circuits</h1>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={libraries}>
        <GoogleMap
          options={{ styles: mapStyles }}
          mapContainerStyle={{ width: "100%", height: "400px", border: "1px solid var(--couleur-neon)", borderRadius: "10px", boxShadow: "0 0 10px var(--couleur-neon), 0 0 10px var(--couleur-neon), 0 0 20px var(--couleur-neon)" }}
          center={position ? position : { lat: 48.8566, lng: 2.3522 }}
          zoom={12}
          onClick={(e) => {
            if (e.placeId) {
              const lat = e.latLng.lat()
              const lng = e.latLng.lng()
              setMarqueurs([...marqueurs, { lat, lng, placeId: e.placeId }])
            }
          }}
        >
          {marqueurs.map((marqueur, index) => (
            <Marker key={index} position={marqueur} />
          ))}
          {position && <Marker position={position} icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" />}
        </GoogleMap>
      </LoadScript>

      <input className="circuits-input" type="text" placeholder="Nom du circuit" value={nomCircuits} onChange={(e) => setNomCircuits(e.target.value)} />
      <button className="circuits-button" onClick={sauvegarderCircuit}>Sauvegarder le circuit</button>

      <h2>Mes circuits</h2>
      {circuits.filter(circuit => circuit.user_id === user?.id).map((circuit, index) => (
        <>
          <p className="circuits-item" key={index}>{circuit.nom}</p>
          <button className="circuits-button" onClick={() => setMarqueurs(circuit.marqueurs)}>Afficher</button>
          <button className="circuits-button" onClick={() => supprimerCircuit(circuit.id)}>Supprimer</button>
          <button className="circuits-button" onClick={() => partagerCircuits(circuit.id)}>Partager</button>
        </>
      ))}

      <h2>Circuits partagés par la communauté</h2>
      {circuits.filter(circuit => circuit.partage && circuit.user_id !== user?.id).map((circuit, index) => (
        <>
          <p className="circuits-item" key={index}>{circuit.nom}</p>
          <button className="circuits-button" onClick={() => setMarqueurs(circuit.marqueurs)}>Afficher</button>
        </>
      ))}

      <input className="circuits-input" type="text" placeholder="Nom du dossier" value={nomDossier} onChange={(e) => setNomDossier(e.target.value)} />
      <button className="circuits-button" onClick={creerDossier}>Créer un dossier</button>
      {dossiers.map((dossier, index) => (
        <>
          <p className="circuits-item" key={index}>{dossier.nom}</p>
          <button className="circuits-button" onClick={() => supprimerDossier(dossier.id)}>Supprimer</button>
        </>
      ))}
    </>
  )
}

export default Circuits