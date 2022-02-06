import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";
//import ReactMapGL from "../../components/maps/mapGasStation";
// import Map from "./map";
// import apikey from "./apikey";
//import Map from '../components/maps/Map'
import styles from "../../../styles/style.module.css";

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
                  let image ="";
                  if (post["label"] == "REPSOL"){image ="https://www.pta.es/wp-content/uploads/2020/04/logo-repsol.jpg";}
                  else if(post["label"] == "CEPSA") {image ="https://alastria.io/wp-content/uploads/2019/04/Logo-CEPSA-Compa%C3%B1%C3%ADa-Espa%C3%B1ola-de-Petr%C3%B3leos.png";}
                  else if(post["label"] == "CARREFOUR") {image ="https://www.bitrefill.com/content/cn/b_rgb%3AFFFFFF%2Cc_pad%2Ch_600%2Cw_1200/v1578400400/carrefour-france.jpg";}
                  else if(post["label"] == "AVIA") {image ="https://avia.ch/fileadmin/images/AVIA_HighRes-310_Mitgliedfirmen.jpg";}
                  else if(post["label"] == "CAMPSA") {image ="https://www.telefonoasistencia.net/wp-content/uploads/2019/06/telefono-campsa.jpg";}
                  else if(post["label"] == "GALP") {image ="https://www.telefonodirecto.es/wp-content/uploads/2017/07/Tel%C3%A9fono-de-Galp-Espa%C3%B1a.png";}
                  else{image ="https://cdn.pixabay.com/photo/2013/07/13/12/44/fuel-160231_640.png";}
                       
                    return (
                      <div class="col rounded-3 pt-5" >
                        <div class="card text-dark bg-light mb-3">
                          <div class="card-header text-white text-center" key={i}><img src={image}  className={styles.image}></img></div>
                          <div class="card-body">
                            <h5 class="card-title">{post.label} {post.address}</h5>
                            <p class="card-text">Ideess: {post.ideess}</p>
                            <p class="card-text">Latitiud: {post.latitud}</p>
                            <p class="card-text">Longitud: {post.longitud}</p>
                            {/* <a href="#" class="btn btn-secondary">Ver mapa</a> */}
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