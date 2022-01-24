import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";


export async function getNews() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/news/")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } 
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
        <div className="text-center">
        <h1 className="text-center fs-1 text-secondary">Restaurantes</h1>
            <Link href="/">
                <a class="btn btn-dark">Home</a>
            </Link>
        </div>
        <div className="back text-center">

        <button class="btn btn-dark">News</button>
        </div>



        </>
    )
}