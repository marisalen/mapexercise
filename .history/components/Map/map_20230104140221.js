import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import { polyline } from 'leaflet'

export default function Map() {

    const position = [49.28594, -123.11129];
    const purpleOption = {color: 'purple'};
    const redOption = {color: 'red'};
    const polyline = [
        [49.28594, -123.11129],
        [49.2862526257819, -123.1202039],
        [49.283438850308286, -123.11621933259502],
        [49.28013284319446, -123.11014287862584],
        [49.273318980467025, -123.10037145958005],
        [49.2627770134397, -123.06919358656506],
        [49.24841124748144, -123.055842200058],
        [49.24434236679643, -123.04542767492465],
        [49.238527289117606, -123.03180071725312],
        




    ]

    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
             <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Waterfront Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2862526257819, -123.1202039]} pathOptions={purpleOption}>
                <Popup>Burrard Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.283438850308286, -123.11621933259502]} pathOptions={purpleOption}>
                <Popup>Granville Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.28013284319446, -123.11014287862584]} pathOptions={purpleOption}>
                <Popup>Stadium-Chinatown Station<br/>Expo Line</Popup>
            </Marker>

            
            <Marker position={[49.273318980467025, -123.10037145958005]} pathOptions={purpleOption}>
                <Popup>Main Street-Science World Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.2627770134397, -123.06919358656506]} pathOptions={purpleOption}>
                <Popup>Commercial-Broadway Station<br/>Expo Line</Popup>
            </Marker>

            
            <Marker position={[49.24841124748144, -123.055842200058]} pathOptions={purpleOption}>
                <Popup>Nanaimo Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.24434236679643, -123.04542767492465]} pathOptions={purpleOption}>
                <Popup>29th Ave Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.238527289117606, -123.03180071725312]} pathOptions={purpleOption}>
                <Popup>Joyce-Collingwood Station<br/>Expo Line</Popup>
            </Marker>



            <Polyline pathOptions={purpleOption} positions={polyline}/>
        </MapContainer>
    )
}