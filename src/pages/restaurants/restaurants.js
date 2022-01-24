import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";

export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/restaurants/")
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
              <h1 className="text-center fs-1 text-secondary">Restaurantes</h1>
                  <Link href="/">
                      <a class="btn btn-dark">Home</a>
                  </Link>
            </div>

               
              <div className='conatiner'>
              <div class="row row-cols-3">
                {data.map((post, i) => {
                    return (
                      <div class="col rounded-3 pt-5" >
                        <div class="card text-dark bg-light mb-3">
                          <div class="card-header bg-primary text-white" key={i}>{post.name}</div>
                          <div class="card-body">
                            <h5 class="card-title">{post.name}</h5>
                            <p class="card-text">{post.address}</p>
                            <p class="card-text">Numero de opiniones: {post.numReviews}</p>
                            <p class="card-text">Puntuacion de los clientes: {post.reviewAverage}</p>
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