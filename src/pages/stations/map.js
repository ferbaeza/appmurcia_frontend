import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"

const Map = (props)=>{
    return(
        <GoogleMap 
        defaultZoom={10}
        defaultCenter={{lat: 38.00,lng: -1.01 }}
        />
    );
}


export default withScriptjs(
    withGoogleMap(
        Map
    )
)