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
                      <Link href="/news/news">
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

                                    <div className="text-center">
                                        <div className="p-1 mb-1 bg-secondary text-white rounded-1">
                                            <ul className="nav justify-content-center fs-5">
                                                <li className="nav-item">
                                                    <Link href={`/videos/[id]`} as={`/videos/${post.id}`} key={post.id}>
                                                        <a className="nav-link text-white" aria-current="page">Mas Info</a>
                                                    </Link>
                                                </li>
                                            </ul>
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
