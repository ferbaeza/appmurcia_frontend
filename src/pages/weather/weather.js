// import Map from "./map";
//import apikey from "./apikey";
import Image from "next/image"
import { useEffect, useState } from "react";


// export async function getStaticProps() {
//   const res = await fetch("http://appmurcia_codeigniter.test/rest/weather/")
//   const data = await res.json()
//   return {
//     props: {
//       data
//     }
//   }
// } 


  export default function Weather({data}){
    let [main, setMain] = useState(null)
    let [description, setDescription] = useState(null)
    let [icon, setIcon] = useState(null)
    useEffect(async () => {
    await fetch("http://appmurcia_codeigniter.test/rest/weather")
      .then((response) => response.json())
      //.then((data) => setMain(data.main))
      //.then((data) => setDescription(data.description))     
      .then((data) => setIcon(data.icon))      
      .then((data) => console.log(data));
  });

    return(
        <>
        <h3>{main}</h3> 
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            layout="fill"
          />
        </div>                 

        <h4>{description}</h4>

        


        </>
    )
   
}
