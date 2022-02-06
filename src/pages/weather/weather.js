// import Map from "./map";
//import apikey from "./apikey";
import Image from "next/image"
import { useEffect, useState } from "react";


  export default function Weather({data}){
    let [main, setMain] = useState(null)
    let [description, setDescription] = useState(null)
    let [icon, setIcon] = useState(null)
    useEffect(async () => {
    await fetch("http://appmurcia_codeigniter.test/rest/weather")
      .then((response) => response.json())
      //.then((data) => setMain(data.main))
      .then((data) => setDescription(data.description))     
      //.then((data) => setIcon(data.icon))      
      .then((data) => console.log(data));
  });

    return(
        <>
        <div className="container">
          <div className="mx-auto">
            <h2>{description}</h2>

          </div>
        </div>
        
        </>
    )
   
}
