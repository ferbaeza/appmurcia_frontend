import Image from "next/image"
const Carrousel=()=>{
    return(
        <>
            <div class="shadow p-3 mb-5 bg-body rounded mt-5">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner m-auto">
                        <div class="carousel-item active">
                        <Image src="/images/m1.jpg" class="d-block w-100" width={1400} height={600} alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <Image src="/images/m2.jpg" class="d-block w-100" width={1000} height={400} alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <Image src="/images/m3.jpg" class="d-block w-100" width={1000} height={400} alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <Image src="/images/m4.jpg" class="d-block w-100" width={1000} height={400} alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Carrousel;