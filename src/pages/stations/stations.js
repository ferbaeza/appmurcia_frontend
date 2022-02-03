import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";
//import ReactMapGL from "../../components/maps/mapGasStation";
// import Map from "./map";
// import apikey from "./apikey";
//import Map from '../components/maps/Map'

export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/stations")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } 
  

  export default function Restaurants({data}){
      return(
          <>
            <Head>
                <title>Gasolineras</title>
            </Head>
            <Navbar/>
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
              <h1 className="text-center fs-1 text-secondary">Gasolineras</h1>
            </div>
            <div className="container">

            </div>

            {/* <div className="container mt-4">
              <ReactMapGL />
            </div> */}

              <div className='container'>
              <div class="row row-cols-3">
                {data.map((post, i) => {
                    return (
                      <div class="col rounded-3 pt-5" >
                        <div class="card text-dark bg-light mb-3">
                          <div class="card-header bg-primary text-white text-center" key={i}>{post.label}</div>
                          <div class="card-body">
                            <h5 class="card-title">{post.label} {post.address}</h5>
                            <p class="card-text">Ideess: {post.ideess}</p>
                            <p class="card-text">Latitiud: {post.latitud}</p>
                            <p class="card-text">Longitud: {post.longitud}</p>
                            <a href="#" class="btn btn-secondary">Ver mapa</a>
                          </div>
                        </div>
                        </div>
                    )
                })}
                </div>
              </div>

          </>
      )
  }