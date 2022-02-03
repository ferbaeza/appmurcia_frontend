import Head from 'next/head'
import React from 'react';
import axios from 'axios';

export default class Index extends React.Component{
    
    state = {
        restaurantes: [],
        description: '',
        email: '',
        puntuation:""
    }

    nombrePastel = e => {
        this.setState({description: e.target.value})
    }

    precioPastel = e => {
        this.setState({email: e.target.value})
    }
    puntuationResta = e => {
        this.setState({precio: e.target.value})
    }


    async componentDidMount(){
        this.obtenerProductos();
    }    
    
    obtenerProductos = async () => {
        let url = `http://appmurcia_codeigniter.test/rest/restaurants/`;
        await axios.get(url)
        .then(respuesta => {
            this.setState({
                restaurantes: respuesta.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    enviarProductos = async (e) => {
        e.preventDefault(); 

        const {nombre, precio } = this.state;
        if(nombre === '' || precio === ''){
            this.setState({error: true});
            return;
        }
        this.setState({error: false})

        let url = `http://appmurcia_codeigniter.test/rest/reviewbymailbyrestid`;
        await axios.post(url,{
            title: nombre,
            precio: precio
        })
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error)
        })
        window.location = "/"
    }

    render(){
        const restaurantes = this.state.restaurantes
        return(
            <>
                <Head>
                    <title>Index Page</title>
                </Head>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <table width='100%'>
                                <tbody>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>ID</th>
                                    </tr>

                                    {restaurantes.map((resta) => (
                                        <tr key={resta.id}>
                                            <td width='40%'>{resta.name}</td>
                                            <td width='20%'>{resta.id}</td>
                                            <td width='20%'>
                                                <form onSubmit={(e) => this.borrarProducto(e, resta.id)}>
                                                    <button type='submit'>del</button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={this.enviarProductos}>
                                <div className="form-group">
                                    <label>Describe tu experiencia</label>
                                    <input onChange={this.nombrePastel} type="text" required/>
                                </div>
                                <div className="form-group">
                                    <label>Introduce tu email</label>
                                    <input onChange={this.precioPastel} type="text" required/>
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
            </>
        )
    }

}
































//   const postData = async (form) => {
//     try {
//       const res = await fetch('http://appmurcia_codeigniter.test/rest/reviewbymailbyrestid', {
//         method: 'POST',
//         headers: {
//           Accept: contentType,
//           'Content-Type': contentType,
//         },
//         body: JSON.stringify(form),
//       })

//       // Throw error with status code in case Fetch API req failed
//       if (!res.ok) {
//         throw new Error(res.status)
//       }

//       router.push('/users/atlasViews')
//     } catch (error) {
//       setMessage('Failed to add user')
//     }
//   }

//   const handleChange = (e) => {
//     e.preventDefault()

//     const target = e.target
//     const value =
//       target.name === 'poddy_trained' ? target.checked : target.value
//     const name = target.name

//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const errs = formValidate()
//     if (Object.keys(errs).length === 0) {
//       forNewUser ? postData(form) : putData(form)
//     } else {
//       setErrors({ errs })
//     }
//   }

//   /* Makes sure user info is filled for user name, surname, and email */
//   const formValidate = () => {
//     let err = {}
//     if (!form.mail) err.name = 'Mail is required'
//     if (!form.password) err.surname = 'Password is required'
//     return err
//   }

//   return (
//     <>
//       <Head>
//         <title>Login</title>
//       </Head>

//       <h1 className="text-center">New Review</h1>


//       <form
//         id={formId}
//         onSubmit={handleSubmit}
//         className="text-center flex flex-col w-40 m-auto mt-32"
//       >
//         <label htmlFor="mail">Mail</label>
//         <input
//           className=""
//           placeholder="Introduzca el mail"
//           type="text"
//           maxLength="30"
//           name="mail"
//           onChange={handleChange}
//           required
//         /><br></br>

//         <label
//           className="w-auto text-center text-2xl text-indigo-500 rounded-l rounded-r mt-4"
//           htmlFor="password"
//         >
//           Password
//         </label>
//         <input
//           className="w-auto text-white placeholder-white text-center bg-gray-400 rounded-l rounded-r mt-4"
//           placeholder="Introduzca la contrasena"
//           type="text"
//           maxLength="20"
//           name="password"
//           onChange={handleChange}
//           required
//         /><br></br>

//         <button
//           type="submit"
//           className="
//                 text-center text-3xl text-white rounded-l rounded-r bg-indigo-600 mt-9"
//         >
//           Submit
//         </button>
//       </form>
//     </>
//   );



















