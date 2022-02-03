import Head from 'next/head'
import React, { useState } from 'react';
import axios from 'axios';



export default function NewReview(){

    const [description, setDescription]=useState('')
    const [email, setEmail]=useState('')
    const [puntuation, setPuntuation]=useState('')


    const submitComment = async ()=>{
        const response = await fetch("http://appmurcia_codeigniter.test/rest/reviewbymailbyrestid",{
            method: 'POST',
            body: JSON.stringify({description:description}),

            headers: {
                'Content-Type': 'application/json',
                },
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            
    }

    

    return(
        <>
            <Head>
                <title>New Comment Page</title>
            </Head>
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
        </>
    )
}


































/*

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.enviarProductos}>
                            <div className="form-group">
                                <label>Describe tu experiencia</label>
                                <input onChange={this.descriptionReview} type="text" required/>
                            </div>
                            <div className="form-group">
                                <label>Introduce tu email</label>
                                <input onChange={this.emailCustomer} type="text" required/>
                            </div>
                            <div className="form-group">
                                <label>Dale tu puntuation</label>
                                <input onChange={this.puntuationResta} type="text" required/>
                            </div>

                            <button type="submit">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>


*/
//   return (
//     <>
//       <Head>
//         <title>Login</title>
//       </Head>


















