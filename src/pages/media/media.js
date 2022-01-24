import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";


  export async function getVideos() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/restaurants/")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } 


export default function index(){
    return(
        <>
        <Head>
            <title>Restaurantes</title>
        </Head>
        <Navbar/>
        <div className="back text-center">
            <div className="p-1 mb-7 ml-7 bg-dark text-white" id="head">
                <ul className="nav justify-content-center fs-3">
                    <li className="nav-item">
                      <Link href="/media/news">
                          <a className="nav-link text-muted" aria-current="page">Noticias</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/media/videos">
                          <a className="nav-link text-muted" aria-current="page">Videos</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/">
                          <a className="nav-link text-muted" aria-current="page">Home</a>
                      </Link>
                    </li>
                </ul>
              </div>
        </div>





        <div className="text-center">
        <h1 className="text-center fs-1 text-secondary">Media</h1>
        </div>
        <div className="text-center">
        <div id="selectmedia" className="dropdown m-3 text-white">
            <button
            className="btn btn-secondary dropdown-toggle bg-dark text-white"
            type="button"
            data-bs-toggle="dropdown"
            id="dropdownMenuButton1"
            aria-expanded="false">Media</button>                        
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <a className="dropdown-item bg-secondary text-white" href="/media/videos">Videos</a>
                </li>
                <li>
                    <a className="dropdown-item bg-secondary text-white" href="/media/news">Noticias</a>
                </li>
            </ul>
        </div>
        {/* <div class="bg-dark">
          <button class="btn btn-warning">News</button>
          <button class="btn btn-danger">Videos</button>
        </div> */}

        </div>
        <div className="container text-center mt-3">
          <p className="mt-5">Selecciona la clase de contenido que quieres consultar</p>

        </div>




        </>
    )
}