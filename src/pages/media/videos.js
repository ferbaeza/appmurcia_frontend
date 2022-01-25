import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";
import YouTube from "react-youtube";
import Image from "next/image";


export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/videos/")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } 


  export default function Videos({data}){
    return(
        <>
        
        <Head>
            <title>Videos</title>
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
                      <Link href="/media/media">
                          <a className="nav-link text-muted" aria-current="page">Media</a>
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
            <h1 className="text-center fs-1 text-secondary">Videos</h1>
        </div>
        <div className='container'>
            <div class="row row-cols-3">
                {data.map((post, i) => {
                    return (
                      <div class="col rounded-3 pt-5" >
                            <div class="card text-dark bg-light mb-3 ">
                                <div class="card-header bg-primary text-white text-center" key={i}>{post.pubDate}</div>
                                <div class="card-body">
                                    <h5 class="card-title">{post.title}</h5>
                                    
                                    <div>
                                    <div class="modal-body fs-2">
                                            <a href={`https://www.youtube.com/watch?v=${post.guid}`} class="btn stretched-link">
                                            <button type="button" class="btn btn-danger rounded-circle">
                                                <Image src="/images/tube.svg" width={80} height={80} alt="Youtube"/>
                                            </button>
                                            </a>Ver en Youtube
                                        </div>
                                    </div>
                                    <div class="overflow-auto">{post.description}</div>
                                    
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Mas info
                                    </button>

                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">{post.title}</h5>
                                            
                                        </div>

                                        <div class="modal-body">
                                            <p class="card-text">{post.description}</p>
                                        </div>
                                        <div class="modal-body fs-2">
                                            <a href={`https://www.youtube.com/watch?v=${post.guid}`} class="btn stretched-link">
                                            <button type="button" class="btn btn-danger rounded-circle">
                                                <Image src="/images/tube.svg" width={80} height={80} alt="Youtube"/>
                                            </button>
                                            </a>Ver en Youtube
                                        </div>
                                        <div class="modal-body bg-primary text-white">
                                            <p class="card-text">guid: {post.guid}</p> 
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>










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
