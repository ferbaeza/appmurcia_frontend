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


        <div className="container">
          <div className="mx-auto">
            <h1>{data.main}</h1>
            <h2>{data.description}</h2>
            <h2>{data.icon}</h2>

          </div>
        </div>
        
        </>

    )


  }
