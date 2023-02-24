import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import New2 from './components/new2.png'
const Home = () => {
    const[location, setLocation] = useState({lat:0, lng:0})
  
    const data = [
        {
            lat:51.505,
            lng:-0.09,
            location:"nepal"
        },
        {
            lat:51.509,
            lng:-0.07,
            location:"nepal2"
        },
    ]
   
   const Icon = L.icon({
    iconSize:[35, 40],
    iconUrl: New2
   })

   useEffect(()=>{
   
      navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
setLocation({lat: latitude, lng:longitude})
console.log("hey")
      })
   },[])
   console.log( location.lat)
  return (
    <MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" style={{height:'100vh', width:'100vw'}}/>
{
    data?.map((item)=>(
        <Marker position={[item.lat, item.lng]} icon={Icon}>
        <Popup >
            {item.location}
        </Popup>
            </Marker>
    ))
}
    </MapContainer>
  )
}

export default Home
