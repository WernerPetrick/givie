import { useForm } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import Header from "../components/Header"

function SignIn(){
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/sign_in', {
      session: {
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign In</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
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
                  onChange={(e) => setData('password', e.target.value)}
                  placeholder="password" 
                  className="input input-bordered" 
                  required 
                />
              </div>
              <Link href="/sign_up" className='label-text-alt link link-hover mt-2'>Don't have an account?</Link>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit'>Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignIn