import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default class HostelMap extends Component {
    render() {
        return (
            <div>
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey="AIzaSyCM4v1s2BnFzSf0Kp5lMJRH1Qbvs_Yc74I"
                >
                <GoogleMap
                    id='example-map'
                >
                  ...Your map components
                </GoogleMap>
                </LoadScript >
            </div >
        )
    }
}
