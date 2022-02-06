import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Router from "next/router";
import { useRouter } from 'next/router';
import ReactStars from 'react-stars';


export default function Reviews({ newinfo }) {


  const router = useRouter();
  const restaid = router.query;
  const resourceType = restaid.id;
  console.log(resourceType)


  const [description, setDescription]=useState('')
  const [email, setEmail]=useState('')
  const [puntuation, setPuntuation]=useState('')

  const deleteReview= async (id)=>{
    const reviewid = id
     fetch(`http://appmurcia_codeigniter.test/rest/deletereviewid/${reviewid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewid),
    })
    Router.reload(window.location.pathname);
  };


  const ratingChanged = (newRating) => {
    console.log(newRating)
    setPuntuation(newRating)
  }
  


  const submitReview = async (event)=>{
      event.preventDefault();

      // let review ={
      //   description: description,
      //   email:email,
      //   puntuation: puntuation,
      // }

    const response = await fetch(`http://appmurcia_codeigniter.test/rest/reviewbymailbyrestid/${resourceType}`,{
        method: 'POST',
        body: JSON.stringify({description:description, email:email, puntuation:puntuation}),
        //body: JSON.stringify({review}),
        headers: {
            'Content-Type': 'application/json',
            },
        })
        Router.reload(window.location.pathname);
        console.log(response)
        const data = await response.json()
        console.log(data)
          
  }


  return (
      <>
        <div className="text-center">
            <h1 className="text-center fs-1 text-secondary">Reviews</h1>
            <h1 className="text-center fs-1 text-secondary"></h1>
            <div className="p-1 mb-7 ml-7 text-white" id="head">
              <ul className="nav justify-content-center fs-3">
                  <li className="nav-item bg-dark rounded text-white">
                    <Link href="/restaurants/restaurants">
                        <a className="nav-link text-white" aria-current="page">Go back</a>
                    </Link>
                  </li>

              </ul>
            </div>
                    

        </div>
        <div className='row mt-4'>
        <div class="row row-cols-3">

        {newinfo.map((newinfo, i)=>{

          return(
            <>
              <div class="card text-dark bg-light mb-3">
                  <div class="card-header bg-primary text-white text-center" key={newinfo.id}>
                    <button type="submit" class="btn btn-dark text-white" onClick={()=>deleteReview(newinfo.id)}>Borrar comentario</button>
                  </div>
                      <p className="fs-5 card-text fs-4">{newinfo.description}</p>
                      <p className=" fs-5">
                      <span className="fs-5">Escrito por: </span><p class="card-text">{newinfo.email}</p>
                      </p>
                      <p className=" fs-5">
                      <span className="fs-5">Puntuacion: </span><p class="card-text">{newinfo.puntuation}</p>
                      </p>
                  </div>
            </>
          )
        })}
        </div>
        </div>

        <div className="row-cols-2">
          <div class="col rounded-3 pt-5" >
          </div>
            <div class="mx-auto" >
            <h1 className="text-center text-white bg-secondary">Nuevo Comentario</h1>
              <form className="" onSubmit={submitReview}>
                <div class="mb-3 text-center fs-4">
                <label for="email" class="form-label">Introduzca su email address</label>
                <input required type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="Introduzca su email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="mb-3 text-center fs-4 ">
                <label for="puntuation" class="form-label">Introduzca la puntuacion</label>
                {/* <select class="form-select" aria-label="Default select example" onChange={(e)=>setPuntuation(e.target.value)}>
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select> */}
                <div class="d-flex flex-row justify-content-center">
                <ReactStars
                  count={10}
                  onChange={ratingChanged}
                  size={50}
                  color2={'#ffd700'} 
                />
                </div>
                </div>
                <div class="mb-3 text-center fs-4">
                <label for="description">Descripcion</label>

                <textarea required class="form-control" name="description" placeholder="Dejenos su comentario" id="floatingTextarea2" onChange={(e)=>setDescription(e.target.value)} ></textarea>
                </div>
                <br></br>
                <div class="col-auto text-center">
                    <button type="submit" class="btn btn-primary mb-3">Enviar comentario</button>
                </div>
              </form>

        </div>
        </div>


      
      
      </>


  )
}

export async function getServerSideProps({params}) {
  const res = await fetch(`http://appmurcia_codeigniter.test/rest/reviewrestauranteid/${params.id}`);
  const newinfo = await res.json();
  console.log(newinfo)

  return {
    props: {
      newinfo

    }
  }

}
