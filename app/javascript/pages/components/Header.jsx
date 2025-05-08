import { Link, usePage } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'

function Header(){
  const { props } = usePage()
  const currentUser = props.current_user

  const handleSignOut = (e) => {
    e.preventDefault()
    Inertia.delete('/sign_out')
  }

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link href="/" className='btn btn-ghost text-xl'>Givie</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="features">Features</Link></li>
            <li><Link href="help">Help</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {currentUser ? (
            <>
              <Link href="/profile" className='btn'>Profile</Link>
              <button
                  onClick={handleSignOut}
                  className="btn"
                  type='button'
                >
                  Sign Out
                </button>
            </>
          ) : (
            <>
              <Link href="sign_up" className='btn'>Sign Up</Link>
              <Link href="sign_in" className='btn'>Sign In</Link>
            </>
          )
          }
        </div>
      </div>
    </>
  )
}

export default Header