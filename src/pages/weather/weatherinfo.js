// import Map from "./map";
//import apikey from "./apikey";
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"

export async function getStaticProps() {
  const res = await fetch("http://appmurcia_codeigniter.test/rest/weather/")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
} 


  export default function Weatherinfo({data}){

    const urlWeather =
    "http://openweathermap.org/img/wn/" + data.icon + "@2x.png";
    return(
      <>

        <Head>
            <title>Info Weather</title>
        </Head>
        <div className="back text-center">
            <div className="p-1 mb-7 ml-7 bg-dark text-white" id="head">
                <ul className="nav justify-content-center fs-3">
                    <li className="nav-item">
                      <Link href="/">
                          <a className="nav-link text-muted" aria-current="page">Home</a>
                      </Link>
                    </li>


                </ul>
              </div>
        </div>
        <div class="col rounded-3 pt-5 col-3 text-center m-auto" >
          <div class="card text-dark bg-light mb-3">
            <div class="card-header bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title">{data.main}</h5>
                <h2 className="card-text">{data.description}</h2>
                <h2 className="card-text"><img src={urlWeather} layout="fill" /></h2>
                

              </div>
            </div>
          </div>
        </div>
        
        </>

    )


  }
