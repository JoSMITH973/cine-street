import * as React from 'react'
import mapboxgl from 'mapbox-gl'
import AWS from 'aws-sdk'
import { getAllFilms } from '../core/Films'

function Home() {
  const mapContainerRef = React.useRef(null)
  const popUpRef = React.useRef(new mapboxgl.Popup({ offset: 15 }))

  React.useEffect(
    () => {
      async function loadMap() {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          // See style options here: https://docs.mapbox.com/api/maps/#styles
          style: "mapbox://styles/mapbox/streets-v11",
          center: [2.35, 48.85],
          zoom: 12.5
        });      
        const films = (await getAllFilms()).slice(0, 50)
        for (let i=0; i < films.length; i++) {
            const film = films[i];
            const { titre } = film
            const {x, y} = JSON.parse(film.coords)
          
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${titre}`)
          const { results } = await response.json()

          const posterPath = (results.length > 0)
            ? `https://image.tmdb.org/t/p/w500${results[0].poster_path}`
            : 'https://www.coved.com/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png'

          new mapboxgl.Marker()
            .setLngLat([x, y])
            .setPopup(new mapboxgl.Popup({closeButton: false, offset: 25 })
            .setHTML(`<img width="80" src='${posterPath}'/><p>${titre}</p>`)) 
            .addTo(map)
        }
      }

      loadMap()
    },
    [],
  )

  return (
    <div className="map-container" ref={mapContainerRef} />
  )
}

export default Home
