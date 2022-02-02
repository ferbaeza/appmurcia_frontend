import { useState } from "react"

export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/stations")
    const data = await res.json()
	const points=[]
    return {
      props: {
        data
      }
	  
    }
	
  } 
  export default function Points({data}){
    //   const lat= {Latitude, Setlatitude}=useState
    //   const lng= {longitude, Setlongitude}=useState
    return(
        <>
             {data.map((post, i) => {
                  return (<div>
                          <p class="card-text">Latitiud: {post.latitud}</p>
                          <p class="card-text">Longitud: {post.longitud}</p>
                          </div>
                )})
            }
        </>
    )
}