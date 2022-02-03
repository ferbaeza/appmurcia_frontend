import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
// import Map from "./map";
//import apikey from "./apikey";

export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/weather")
    const data = await res.json()
    console.log(data)
    return {
      props: {
        data
      }
    }
  }

export default function Restaurants({data}){
  return(
    <>
      <div className='container'>
      <div className="row row-cols-3">
        <div className="col rounded-3 pt-5" >
          <div className="card text-dark bg-light mb-3">

            <div className="card-body">
              <p className="card-text">Latitiud: {data.main}</p>
              <p className="card-text">Longitud: {data.icon}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
