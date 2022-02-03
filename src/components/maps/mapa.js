import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
	width: '85%',
	height: '500px',

  };
  
export class MapContainer extends Component {
	constructor(props) {
		
	  super(props);
		
	  this.state = {
		stores: [
				// {latitude: 37.959423, longitude: -1.021071},
				]
	  }
	}
  
	displayMarkers = () => {
	  return this.state.stores.map((store, index) => {
		return <Marker key={index} id={index} position={{
		 lat: store.latitude,
		 lng: store.longitude
	   }}
	   onClick={() => console.log("You clicked me!")} />
	  })
	}
  
	render() {
	  return (   	
			
        <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{ lat: 37.9835, lng: -1.12989}}
        >
        {this.displayMarkers()}
        </Map>
	
	  );
	}
  }

  export default GoogleApiWrapper({
	apiKey: 'AIzaSyAKIXuse3FS3ZQ3Bi9d-W1SNSNWgmlVkXo'
  })(MapContainer);


//   export async function getStaticProps() {
//     const res = await fetch("http://appmurcia_codeigniter.test/rest/stations")
//     const data = await res.json()
// 	const points=[]
//     return {
//       props: {
//         data
//       }
	  
//     }
	
//   } 
