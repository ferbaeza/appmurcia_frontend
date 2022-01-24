import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";

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
                <title>Restaurantes</title>
            </Head>
            <Navbar/>
            <div className="back text-center">
              <h1 className="text-center text-secondary">Gasolineras</h1>
                  <Link href="/">
                      <a class="btn btn-dark">Home</a>
                  </Link>
            </div>

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
                            <p class="card-text">Localizacion: {post.longitud} {post.latitud}</p>
                            <a href="#" class="btn btn-primary">Ver opiniones</a>
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