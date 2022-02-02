import Image from "next/image";
import Link from "next/link";

export default function News({ newinfo }) {

  return (
      <>
        <div className="text-center">
            <h1 className="text-center fs-1 text-secondary">Noticias</h1>
        </div>
        <div className='container'>
            <div class="row row-cols-1">
                <div class="card text-dark bg-light mb-3">
                    <div class="card-header bg-primary text-white text-center" key={newinfo.id}>{newinfo.pubDate}</div>
                        <div class="card-body">
                            <h5>{newinfo.title}</h5>
                        </div>
                        <p class="card-text">{newinfo.description}</p>
                        <a href={newinfo.url} class="btn stretched-link">
                        <button type="button" class="btn btn-secondary rounded-circle">
                            <Image src="/images/browser.svg" width={80} height={80} alt="Youtube"/>
                        </button> 
                        </a> <span className="text-center">Abrir en la web</span>
                        <div class="card-header bg-primary text-white text-center">{newinfo.guid}</div>
                    </div>
                    <div className="back text-center">
                        <div className="p-1 mb-7 ml-7 bg-dark text-white" id="head">
                            <ul className="nav justify-content-center fs-3">
                                <li className="nav-item">
                                <Link href="/news/news">
                                    <a className="nav-link text-muted" aria-current="page">News</a>
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
  const res = await fetch(`http://appmurcia_codeigniter.test/rest/news/${params.id}`);
  const newinfo = await res.json();
  return {
    props: {
      newinfo
    }
  }
}