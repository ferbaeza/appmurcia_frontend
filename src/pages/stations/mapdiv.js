import { Component } from "react";
import Map from "./map";

class App extends Component{
    constructor(){
        super();
        this.state={
            name:React
        }
        
    };
}
const googleMapURL=`https://maps.googleapis.com/maps/api/js?v=3.exp$key=${apikey.mapsKey}`;

render(){
    return(
        <div>
            <Map
                googleMapURL= {this.props.googleMapURL}
                containerElement = "<div style={{heigh: "400px"}}/>"
                mapElement : <div style={{heigh: "100%"}}/>,
                loadingElement : <p>Cargando</p>
              />

        </div>
    );
}