import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getPlacesData } from './data';


const Home = () => {
    const [data, setData] = useState()
    const [geolocation, setGeolocation] = useState({lat:27.575610, lng:85.593689})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) => {
            setGeolocation({lat: latitude, lng:longitude})
        })
    }, [])

    useEffect(() => {
        getPlacesData().then((data) => {
            setData(data)
        })
    }, [])
    
        return (
           
                <MapContainer  center={[geolocation.lat, geolocation.lng]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data?.map((item, index) => {
                        return (
                            <Marker position={[geolocation.lat, geolocation.lng]}  key={index}>
                                <Popup>
                                    Kathmandu
                                </Popup>
                            </Marker>
                        )
                    })
                }
    
            </MapContainer>
          
        
    )
}



export default Home
