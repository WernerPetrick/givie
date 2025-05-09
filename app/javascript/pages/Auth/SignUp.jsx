import { useForm } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import Header from "../components/Header"
import Footer from '../components/Footer'

function SignUp(){
  const { data, setData, post} = useForm({
    user: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/sign_up', data)
  }

  return (
    <>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign up</h1>
            <p className="py-6">Create your account to get started.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="form-control w-full">
                  <div className="label">
                    <span className="label-text">First name</span>
                  </div>
                  <input 
                    type="text" 
                    name="firstName"
                    value={data.first_name}
                    onChange={(e) => setData('user.first_name', e.target.value)}
                    placeholder="First name" 
                    className="input input-bordered" 
                    required 
                  />
                </div>
                <div className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Last name</span>
                  </div>
                  <input 
                    type="text" 
                    name="lastName"
                    value={data.last_name}
                    onChange={(e) => setData('user.last_name', e.target.value)}
                    placeholder="Last name" 
                    className="input input-bordered" 
                    required 
                  />
                </div>
              </div>
              <div className="form-control">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={data.email}
                  onChange={(e) => setData('user.email', e.target.value)}
                  placeholder="email" 
                  className="input input-bordered" 
                  required 
                />
              </div>
              <div className="form-control">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input 
                  type="password" 
                  name="password"
                  value={data.password}
                  onChange={(e) => setData('user.password', e.target.value)}
                  placeholder="password" 
                  className="input input-bordered" 
                  required 
                />
                <div className="label">
                  <Link href="/sign_up" className='label-text-alt link link-hover mt-2'>Already have an account?</Link>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignUp