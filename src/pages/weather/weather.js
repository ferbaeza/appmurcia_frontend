// import Map from "./map";
//import apikey from "./apikey";
import Image from "next/image"

export async function getStaticProps() {
  const res = await fetch("http://appmurcia_codeigniter.test/rest/weather/")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
} 


  export default function Weather({data}){
    return(
        <>
        <h3>{data.main}</h3> 
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
            layout="fill"
          />
        </div>                 

        <h4>{data.description}</h4>

        


        </>
    )
   
}
