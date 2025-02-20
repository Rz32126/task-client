import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {toast, Toaster} from "react-hot-toast";
import { AuthContext } from './AuthProvider'

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      toast.success('Signin Successful')
      navigate('/task')
      
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  const handleSignIn = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const pass = form.password.value
    console.log({ email, pass })
    try {
      await signIn(email, pass)
      toast.success('Home Successfully')
      navigate('/')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  return (
    <div className='bg-purple-500 py-10'>
      <h1 className='text-white font-bold text-2xl text-center'>WELCOME TO TASK-BOARD </h1>
      <div className='lg:w-5/12 w-2/3 mx-auto bg-white mt-5 mb-5 rounded-2xl'>

<div className='mx-7 px-5 py-12'>

  <h1 className='text-xl text-purple-400 font-bold text-center'>Login Here</h1>

  <div
    onClick={handleGoogleSignIn}
    className='flex lg:flex-row flex-col cursor-pointer items-center justify-center mt-4 btn border border-gray-300'
  >
    <div className='px-4 py-2'>
      <svg className='w-6 h-6' viewBox='0 0 40 40'>
        <path
          d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
          fill='#FFC107'
        />
        <path
          d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
          fill='#FF3D00'
        />
        <path
          d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
          fill='#4CAF50'
        />
        <path
          d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
          fill='#1976D2'
        />
      </svg>
    </div>

    <span className='w-5/6 px-4 py-3 font-bold text-center'>
      Sign in with Google
    </span>
  </div>

  <form onSubmit={handleSignIn}>
    <div className='mt-4'>
      <label
        className='block mb-2 text-purple-500 text-sm font-medium '
      >
        Email 
      </label>
      <input
        name='email'
        type='email'
        className='block w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-lg '
      />
    </div>

    <div className='mt-4'>
      <div className='flex justify-between'>
        <label
          className='block mb-2 text-sm font-medium text-purple-500'
        >
          Password
        </label>
      </div>

      <input
        name='password'
        className='block w-full px-4 py-2 text-black bg-white border  border-gray-300 rounded-lg'
        type='password'
      />
    </div>
    <div className='mt-6'>
      <button
        type='submit'
        className='w-full px-6 py-3 text-sm font-medium text-white bg-purple-600 rounded-lg'
      >
        Login Now
      </button>
    </div>
  </form>

  <div className='flex items-center justify-center mt-4  '>
  </div>
</div>
<Toaster></Toaster>
</div>
    </div>
  )
}

export default Login



