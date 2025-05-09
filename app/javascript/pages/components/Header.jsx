import { Link, usePage } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'
import css from './Header.module.css'

function Header(){
  const { props } = usePage()
  const currentUser = props.current_user

  const handleSignOut = (e) => {
    e.preventDefault()
    Inertia.delete('/sign_out')
  }

  return (
    <>
      <div className={`${css.dynapuff600} navbar bg-base-100 shadow-sm`}>
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-3xl">Givie</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/" className="text-xl">Home</Link></li>
            <li><Link href="/features" className="text-xl">Features</Link></li>
            <li><Link href="/help" className="text-xl">Help</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {currentUser ? (
            <>
              <Link href="/profile" className='btn text-xl'>Profile</Link>
              <button
                  onClick={handleSignOut}
                  className="btn text-xl"
                  type='button'
                >
                  Sign Out
                </button>
            </>
          ) : (
            <>
              <Link href="sign_up" className='btn text-xl'>Sign Up</Link>
              <Link href="sign_in" className='btn text-xl'>Sign In</Link>
            </>
          )
          }
        </div>
      </div>
    </>
  )
}

export default Header