import Image from "next/image";
const Navbar=()=>{
    return(
        <>
            <header className="p-1 mb-7 ml-7 bg-dark text-white" id="head">
                <ul className="nav justify-content-center fs-3">
                    <li className="nav-item">
                        <Image src="/images/logo.png" width={90} height={50} alt="murcia"/>
                    </li>
                    <li class="nav-item">
                        <p className="nav-link text-muted" aria-current="page">Murcia</p>
                    </li>

                    <li className="nav-item">
                        <p className="nav-link text-muted" href="">Gasolineras</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link text-muted">Restaurantes</p>
                    </li>
                    <li className="nav-item ">
                        <p className="nav-link text-muted"></p>
                    </li>
                    <li>
                    <div id="selectmedia" className="dropdown m-3 bg-dark text-white">
                        <button
                        className="btn btn-secondary dropdown-toggle bg-dark text-white"
                        type="button"
                        data-bs-toggle="dropdown"
                        id="dropdownMenuButton1"
                        aria-expanded="false">Media</button>                        
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item" href="#">Videos</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Noticias</a>
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