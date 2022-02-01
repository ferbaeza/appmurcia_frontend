import Image from "next/image";
import Link from "next/link";

export default function Reviews({ newinfo }) {

  return (
      <>
        <div className="text-center">
            <h1 className="text-center fs-1 text-secondary">Reviews</h1>
        </div>
        <div className='container'>
            <div class="row row-cols-1">
                <div class="card text-dark bg-light mb-3">
                    <div class="card-header bg-info text-white text-center" key={newinfo.id}></div>
                        <p class="card-text fs-4">{newinfo.description}</p>
                        <p>
                        <span className="bg-secondary fs-5">Escrito por: </span><p class="card-text">{newinfo.email}</p>
                        </p>
                        <p>
                        <span className="bg-secondary fs-5">Puntuacion: </span><p class="card-text">{newinfo.puntuation}</p>
                        </p>
                        <div class="card-header bg-info text-white text-center">{newinfo.guid}</div>
                    </div>
                    <div className="back text-center">
                        <div className="p-1 mb-7 ml-7 bg-dark text-white" id="head">
                            <ul className="nav justify-content-center fs-3">
                                <li className="nav-item">
                                <Link href="/restaurants/restaurants">
                                    <a className="nav-link text-muted" aria-current="page">Go back</a>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
      
      
      </>


  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://appmurcia_codeigniter.test/rest/reviewrestauranteid/${params.id}`);
  const newinfo = await res.json();
  return {
    props: {
      newinfo
    }
  }
}
