import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import { polyline } from 'leaflet'

export default function Map() {

    const position = [49.28594, -123.11129];
    const purpleOption = {color: 'purple'};
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
        [49.22992666226876, -123.01272618921564],
        [49.22591186740195, -123.00391564608952],
        [49.22022674217617, -122.988486726947122],
        [49.21276468206421, -122.95933430532412],
        [49.2002694713839, -122.94923127907236],
        [49.20176121342438, -122.91268977631553],
        [49.20521830518485, -122.9060229478834],
    ]

    const surreyline = [
        [49.20521830518485, -122.9060229478834],
        [49.20587142351246, -122.87435173718517],
        [49.20102097877474, -122.8508964126631],
        [49.1897209413475, -122.84797435958329],
        [49.18290999816236, -122.84478657307581],
    ]

    const lougheedline = [
        [49.20521830518485, -122.9060229478834],
        [49.22559946869088, -122.88933206544792],
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

            <Marker position={[49.22992666226876, -123.01272618921564]} pathOptions={purpleOption}>
                <Popup>Patterson Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.22591186740195, -123.00391564608952]} pathOptions={purpleOption}>
                <Popup>Metrotown Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.22022674217617, -122.988486726947122]} pathOptions={purpleOption}>
                <Popup>Royal Oak Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.21276468206421, -122.95933430532412]} pathOptions={purpleOption}>
                <Popup>Edmonds Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.2002694713839, -122.94923127907236]} pathOptions={purpleOption}>
                <Popup>22nd Street Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.20176121342438, -122.91268977631553]} pathOptions={purpleOption}>
                <Popup>New Westminster Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.20521830518485, -122.9060229478834]} pathOptions={purpleOption}>
                <Popup>Columbia Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.20521830518485, -122.9060229478834]} pathOptions={purpleOption}>
                <Popup>Columbia Station<br/>Expo Line</Popup>
            </Marker>

            

            <Marker position={[49.20587142351246, -122.87435173718517]} pathOptions={purpleOption}>
                <Popup>Scott Road Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.20102097877474, -122.8508964126631]} pathOptions={purpleOption}>
                <Popup>Gateway Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.1897209413475, -122.84797435958329]} pathOptions={purpleOption}>
                <Popup>Surrey Central Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.18290999816236, -122.84478657307581]} pathOptions={purpleOption}>
                <Popup>King George Station<br/>Expo Line</Popup>
            </Marker>

            <Marker position={[49.22559946869088, -122.88933206544792]} pathOptions={purpleOption}>
                <Popup>Sapperton Station<br/>Expo Line</Popup>
            </Marker>




            <Polyline pathOptions={purpleOption} positions={polyline}/>

            <Polyline pathOptions={purpleOption} positions={surreyline}/>

            <Polyline pathOptions={purpleOption} positions={lougheedline}/>

        </MapContainer>
    )
}