import Image from "next/image"
import Head from "next/head"
import Link from "next/link"

export async function getStaticProps() {
  const res = await fetch("http://appmurcia_codeigniter.test/rest/weather/")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
} 


  export default function Weatherinfo({data}){
    return(
      <>
      

        <Head>
            <title>Info Weather</title>
        </Head>
        <div className="back text-center">
            <div className="p-1 mb-7 ml-7 bg-dark text-white" id="head">
                <ul className="nav justify-content-center fs-3">
                    <li className="nav-item">
                      <Link href="/">
                          <a className="nav-link text-muted" aria-current="page">Home</a>
                      </Link>
                    </li>


                </ul>
              </div>
        </div>


        <div className="container">
          <div className="mx-auto">
            <h1>{data.main}</h1>
            <h2>{data.description}</h2>
            <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}/>
            {/* <Image
              src={`http://openweathermap.org/img/wn/${}@2x.png`}
              width={160}
              height={100}
            ></Image> */}

          </div>
        </div>
        
        </>

    )


  }
