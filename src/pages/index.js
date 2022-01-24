import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar/navbar'
import Carrousel from '../components/headfoot/Carrousel'
import Footer from '../components/headfoot/footer'

export default function Home() {
  return (
    <div className="head">
      <Head>
        <title>Murcia Turismo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mainfer'>
        <Navbar/>
        
      </div>
      <div className='container'>
        <Carrousel/>
      </div>
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














      
        <Footer/>
    </div>
  )
}
//                   <Image clasNmae="bg-white" src="/images/med.svg" alt="Vercel Logo" width={150} height={116}/>
//                <Image clasNmae="bg-white text-white" src="/images/ute.svg" alt="Vercel Logo" width={150} height={116}/>
