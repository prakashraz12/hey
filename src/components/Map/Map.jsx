import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import New2 from '../../components/new2.png'
const Map = () => {

    const [location, setLocation] = useState({ lat: 37.799193653119225, lng: -122.40726619122009 })

    const data = [
        {
            lat: 37.799193653119225, lng: -122.40726619122009,

            location: "nepal"
        },
        {
            lat: 38.799193653119225, lng: -123.40726619122009,
            location: "nepal2"
        },
    ]

    const Icon = L.icon({
        iconSize: [35, 40],
        iconUrl: New2
    })

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setLocation({ lat: latitude, lng: longitude })
        })
    }, [])
    return (
        <MapContainer center={[location.lat, location.lng]} zoom={14} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {
                data?.map((item, index) => (
                    <Marker position={[item.lat, item.lng]} icon={Icon} key={index}>
                        <Popup >
                            {item.location}
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}


export default Map
