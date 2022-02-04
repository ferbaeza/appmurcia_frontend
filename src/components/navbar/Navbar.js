import Image from "next/image";
import Link from "next/link";
//import Weather from "../../pages/weather/weather";
//import { NoMatch } from '../../pages/weather/weather';


export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/weather/")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } 


export default function Navbar({data}){
    return(
        <>
            <header className="p-1 mb-7 ml-7 bg-dark text-white" id="head">
                <ul className="nav justify-content-center fs-3">
                    <li className="nav-item mt-2">
                    <Link href="/">
                        <a>
                        <Image src="/images/logo.png" width={90} height={50} alt="murcia"/>
                        </a>
                    </Link>
                    </li>
                    <li class="nav-item mt-2">
                        <Link href="../">
                            <a className="nav-link text-muted" aria-current="page">Murcia</a>
                        </Link>
                    </li>
                    <li className="nav-item mt-2">
                        <Link href="../stations/stations">
                            <a className="nav-link text-muted" aria-current="page">Gasolineras</a>
                        </Link>
                    </li>
                    <li className="nav-item mt-2">
                        <Link href="../restaurants/restaurants">
                            <a className="nav-link text-muted" aria-current="page">Restaurantes</a>
                        </Link>
                    </li>
                    <li class="nav-item dropdown mt-2">
                        <a class="nav-link dropdown-toggle text-secondary" href="/media/media" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Media
                        </a>
                        <ul class="dropdown-menu bg-dark text-secondary " aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item bg-dark text-secondary" href="/media/videos">Videos</a></li>
                            <li><a class="dropdown-item bg-dark text-secondary" href="/media/news">Noticias</a></li>
                        </ul>
                    </li>
                    <li>
                        
                    </li>
                    
                    <li class="nav-item dropdown mt-2">
                        <Link href="../maps/Map">
                            <a className="nav-link text-muted" aria-current="page">Mapas</a>
                        </Link>
                    </li>
                    <li class="nav-item dropdown mt-2 text-danger">
                        <Link href="../weather/weather">
                            <a className="nav-link text-danger" aria-current="page">W</a>
                        </Link>

                    </li>
                    <li class="nav-item dropdown mt-2 text-danger">
                        <Link href="../videos/Lastvideo">
                            <a className="nav-link text-danger" aria-current="page">LastVideo</a>
                        </Link>

                    </li>
                    <li class="nav-item dropdown mt-2 text-danger">
                        <Link href="../news/LastNew">
                            <a className="nav-link text-danger" aria-current="page">LastNew</a>
                        </Link>

                    </li>



                </ul>
                
        </header>
        <div>
        </div>

        </>
    )
}
