import YouTube from "react-youtube";
import React from 'react';


const lastStyles = {
    marginTop:'125px',
    height: '450px',
    width:'800px'
  
    };
    

export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/videos_one/")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } 


  
  class Example extends React.Component {
    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
      return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
    }
  
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }





//   export default function LastVideo({data}){
//     const ops={
//       height:'600',
//       width:'800',
//       playerVars:{
//        // "https://www.youtube.com/watch?v=-qydqkjT5Zg",
//         autoplay:1,
//       },
//       _onReady(event) {
//         // access to player in all event handlers via event.target
//         event.target.pauseVideo();
//       }
    

//     };
//     return(
//         <>
//             <div className="text-center">
//                 <h1 className="text-center fs-1 text-secondary">Ultimo Video</h1>
//             </div>
//             <div className='mx-auto'>
//                 <YouTube 
//                 style={lastStyles}
//                 opt={ops}                
//                 />
//             </div>
//              <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
//         </>
//     )   
// }
