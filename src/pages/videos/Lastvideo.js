import YouTube from "react-youtube";
import React from 'react';
import ReactPlayer from 'react-player'
import { useEffect, useState } from "react";



// export async function getStaticProps() {
//     const res = await fetch("http://appmurcia_codeigniter.test/rest/videos_one/")
//     const data = await res.json()
//     return {
//       props: {
//         data
//       }
//     }
//     console.log(da)
//   } 





export default function Player({data}){
  let [url, setUrl] = useState(null)
    useEffect(async () => {
    await fetch("http://appmurcia_codeigniter.test/rest/videos_one")
      .then((response) => response.json())
      .then((data) => setUrl(data.url))      
      .then((data) => console.log(data));
  });

  return(
    <>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url= {url} 
            width='1350px'
            height='800px'
            playing true
            loop true
          />
        </div>
    

    </>
  )
}  










