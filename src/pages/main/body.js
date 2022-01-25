import Link from "next/link";

export default function Body(){
    return(
        <>
            <div class="container">
                <div class="row row-cols-3">
                    <div class="col rounded-3 pt-5" >
                        <div class="card text-dark bg-light mb-3">
                        <Link href="/stations/stations">
                            <a className="card-header bg-light text-secondary text-center list-group-item list-group-item-action">
                            <div class="fs-2 card-header bg-light text-secondary text-center">Gasolineras</div>
                            </a>
                        </Link>
                        </div>
                    </div>
                    <div class="col rounded-3 pt-5" >
                        <div class="card text-dark bg-light mb-3">
                        <Link href="/restaurants/restaurants">
                            <a className="card-header bg-light text-secondary text-center list-group-item list-group-item-action">
                            <div class="fs-2 card-header bg-light text-secondary text-center">Restaurantes</div>
                            </a>
                        </Link>
                        </div>
                    </div>
                    <div class="col rounded-3 pt-5" >
                        <div class="card text-dark bg-light mb-3">
                        <Link href="/media/media">
                            <a className="card-header bg-light text-secondary text-center list-group-item list-group-item-action">
                            <div class="fs-2 card-header bg-light text-secondary text-center">Media</div>
                            </a>
                        </Link>
                        </div>
                    </div>
                </div>
                
            </div>

        </>
    )
}