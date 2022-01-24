import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"





const Form = ({ formId, userForm, forNewUser = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

//   const [form, setForm] = useState({
//     mail: userForm.mail,
//     password: userForm.password
    
//   })



  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/users', {
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

      <main className={styles.main}>
        <h1 className="has-text-link-dark is-size-1">NextAuth</h1>
        <p className="has-text-danger">Not signed in </p>
        <br />
        <div class="main_login">
          <div class="logo">
            <img id="logo" src="./img/logo.png" />
          </div>
          <form id="formId" method="POST">
            <h1 id="signin">Please sign in</h1>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="email"
                  name="name"
                  placeholder="Email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field m-auto">
              <p class="control m-auto">
                <button class="button is-success ml-6 mr-6">Login</button>
                <button
                  className="button is-link ml-6"
                  onClick={() => signIn()}
                >
                  LoginAuth
                </button>
              </p>
            </div>
          </form>
        </div>
        <div class="backhome mt-6">
          <p id="log_p">
            <i class="fas fa-copyright"></i>2022 Fernando Baeza CodeIgniter
            Project <i class="fas fa-registered"></i>
          </p>
        </div>
      </main>

      <form
        id={formId}
        onSubmit={handleSubmit}
        className="text-center flex flex-col w-40 m-auto mt-32"
      >
        <label htmlFor="mail">Mail</label>
        <input
          className=""
          placeholder="Introduzca el mail"
          type="text"
          maxLength="30"
          name="mail"
          onChange={handleChange}
          required
        />

        <label
          className="w-auto text-center text-2xl text-indigo-500 rounded-l rounded-r mt-4"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-auto text-white placeholder-white text-center bg-gray-400 rounded-l rounded-r mt-4"
          placeholder="Introduzca la contrasena"
          type="text"
          maxLength="20"
          name="password"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="
                text-center text-3xl text-white rounded-l rounded-r bg-indigo-600 mt-9"
        >
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
}

export default Form

















