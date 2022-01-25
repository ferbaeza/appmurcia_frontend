import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../../components/navbar/navbar'
import Link from 'next/link'





const Form = ({ formId, userForm, forNewUser = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

//   const [form, setForm] = useState({
//     cd a : userForm.mail,
//     password: userForm.password
    
//   })



  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/usersapi/', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/users/atlasViews')
    } catch (error) {
      setMessage('Failed to add user')
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value =
      target.name === 'poddy_trained' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewUser ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  /* Makes sure user info is filled for user name, surname, and email */
  const formValidate = () => {
    let err = {}
    if (!form.mail) err.name = 'Mail is required'
    if (!form.password) err.surname = 'Password is required'
    return err
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Navbar/>
            <div className="back text-center">
              <h1 className="text-center text-secondary">Login</h1>
                  <Link href="/">
                      <a class="btn btn-dark">Home</a>
                  </Link>
            </div>

        <div class="container">
            <div class="w-2">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
      </div>


    </>
  );
}

export default Form

















