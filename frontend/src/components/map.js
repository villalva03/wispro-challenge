import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { userMapGlobal, userMap } from './util';

function Mapa({ users, user, center, zoom, caseType, ...props }) {
    return(
        <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="p-2 bg-secondary rounded">
                <MapContainer style={{ width: "68vw", height: "53vh" }} center={center} zoom={zoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
                        contributors'
                    />
                    {caseType === 'Global' ? userMapGlobal(users) : userMap(user)}
                    </MapContainer>
            </div>
        </div>
    );
}

export default Mapa;