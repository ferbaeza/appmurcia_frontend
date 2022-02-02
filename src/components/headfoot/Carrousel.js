// import Image from "next/image"
// const Carrousel=()=>{
//     return(
//         <>
//         <div className="container m-auto ">
//         <Image src="/images/m2.jpg" class="m-auto" width={1200} height={400} alt="..."/>

//         </div>
//         </>
//     )
// }
// export default Carrousel;

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class NextJsCarousel extends Component {
	render() {
		return (
			<div className="text-center col-12 caja">

			<Carousel>
				<div>
					<img src="/images/1.png" alt="image1" className='imagen'/>
					{/* <p className="legend">Image 1</p> */}

				</div>
				<div>
					<img src="/images/2.png" alt="image2" className='imagen'/>
					{/* <p className="legend">Image 2</p> */}

				</div>
				<div>
					<img src="/images/3.png" alt="image3" className='imagen'/>
					{/* <p className="legend">Image 3</p> */}

				</div>
				<div>
					<img src="/images/4.png" alt="image4" className='imagen'/>
					{/* <p className="legend">Image 4</p> */}

				</div>
                

			</Carousel>
       
			</div>
		);
	}
};
