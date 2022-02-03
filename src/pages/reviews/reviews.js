import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";

export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/allreviews/")
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
                <title>Reviews</title>
            </Head>
            <Navbar/>
            <div className="back text-center">
            <div className="p-1 mb-7 ml-7 bg-dark text-white" id="head">
                <ul className="nav justify-content-center fs-3">
                    <li className="nav-item">
                      <Link href="../reviews/reviews">
                          <a className="nav-link text-muted" aria-current="page">Reviews</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/">
                          <a className="nav-link text-muted" aria-current="page">Home</a>
                      </Link>
                    </li>
                </ul>
              </div>
              <h1 className="text-center fs-1 text-secondary">Reviews</h1>
            </div>

               
              <div className='conatiner'>
              <div class="row row-cols-3">
                {data.map((post, i) => {
                    return (
                      <div class="col rounded-3 pt-5" >
                        <div class="card text-dark bg-light mb-3">
                          <div class="card-header bg-primary text-white" key={i}>{post.updated_at.timezone} {post.updated_at.date}</div>
                          <div class="card-body">
                            <h5 class="card-title">{post.id}</h5>
                            <h5 class="card-title text-danger">{post.restaurant_id}</h5>
                            <p class="card-text">{post.description}</p>
                            <p class="card-text">Escrito por: <label className="text-primary">{post.email}</label></p>
                            <p class="card-text">Puntuacion de los clientes: <label className="text-primary">{post.puntuation}</label></p>
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