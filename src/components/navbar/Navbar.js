import Image from "next/image";
import Link from "next/link";

const Navbar=()=>{
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
                    

                </ul>
        </header>

        </>
    )
}
export default Navbar;