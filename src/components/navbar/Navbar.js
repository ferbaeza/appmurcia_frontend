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
                    <li className="nav-item">
                        <div id="selectmedia" className="dropdown m-3 text-white">
                            <button
                            className="btn btn-info dropdown-toggle bg-dark text-secondary fs-4"
                            type="button"
                            data-bs-toggle="dropdown"
                            id="dropdownMenuButton1"
                            aria-expanded="false">Media</button>                        
                            <ul className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a className="dropdown-item bg-secondary text-white" href="/media/videos">Videos</a>
                                </li>
                                <li>
                                    <a className="dropdown-item bg-secondary text-white" href="/media/news">Noticias</a>
                                </li>
                            </ul>
                        </div>

                    </li>

                </ul>
        </header>

        </>
    )
}
export default Navbar;