import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';


export default function Reviews({ newinfo }) {

  const [description, setDescription]=useState('')
  const [email, setEmail]=useState('')
  const [puntuation, setPuntuation]=useState('')


  const submitComment = async ()=>{
      //preventDefault();
      let review ={
        //restaurant_id: newinfo.restaurant_id,
        description: description,
        email:email,
        puntuation: puntuation,
      }

    const response = await fetch(`http://appmurcia_codeigniter.test/rest/reviewbymailbyrestid/${newinfo.restaurant_id}`,{
        method: 'POST',
        body: JSON.stringify({review}),
        headers: {
            'Content-Type': 'application/json',
            },
        })
        console.log(response)
        const data = await response.json()
        console.log(data)
          
  }


  return (
      <>
        <div className="text-center">
            <h1 className="text-center fs-1 text-secondary">Reviews</h1>
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
        <div className='row'>
        <div class="row row-cols-3">

        {newinfo.map((newinfo, i)=>{
          return(
                <div class="card text-dark bg-light mb-3">
                    <div class="card-header bg-info text-white text-center" key={newinfo.id}></div>
                        <p class="card-text fs-4">{newinfo.description}</p>
                        <p>
                        <span className="bg-secondary fs-5">Escrito por: </span><p class="card-text">{newinfo.email}</p>
                        </p>
                        <p>
                        <span className="bg-secondary fs-5">Puntuacion: </span><p class="card-text">{newinfo.puntuation}</p>
                        <span className="text-danger fs-5">Id Restaurantes: </span><p class="card-text text-danger">{newinfo.restaurant_id}</p>
                        </p>
                    </div>


          )
        })}
        </div>
        </div>

        <div className="row-cols-2">
          <div class="col rounded-3 pt-5" >
          </div>
            <div class="mx-auto" >
            <h1 className="text-center text-white bg-secondary">Nuevo Comentario</h1>
                <div class="mb-3 text-center fs-4">
                <label for="email" class="form-label">Introduzca su email address</label>
                <input required type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="Introduzca su email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="mb-3 text-center fs-4">
                <label for="puntuation" class="form-label">Introduzca la puntuacion</label>
                <input required type="text" name="puntuation" class="form-control" id="exampleFormControlInput1" placeholder="Puntuacion del 1 al 10" onChange={(e)=>setPuntuation(e.target.value)}/>
                </div>
                <div class="mb-3 text-center fs-4">
                <label for="description">Descripcion</label>

                <textarea required class="form-control" name="description" placeholder="Dejenos su comentario" id="floatingTextarea2" onChange={(e)=>setDescription(e.target.value)} ></textarea>
                </div>
                <br></br>
                <div class="col-auto text-center">
                    <button type="submit" class="btn btn-primary mb-3" onClick={submitComment}>Enviar comentario</button>
                </div>

        </div>
        </div>


      
      
      </>


  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://appmurcia_codeigniter.test/rest/reviewrestauranteid/1`);
  const newinfo = await res.json();
  return {
    props: {
      newinfo
    }
  }
}
