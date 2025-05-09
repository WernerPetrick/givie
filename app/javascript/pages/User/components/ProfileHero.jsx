import { usePage } from '@inertiajs/react'
import css from '../../Custom.module.css'

function ProfileHero(){
  const { props } = usePage()
  const currentUser = props.current_user

  return (
    <>
      <div className={`${css.sourgummy700} hero bg-base-200`}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={currentUser.avatar_url}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="User Avatar"
          />
          <div>
            <h1 className="text-5xl font-bold">{currentUser.first_name} {currentUser.last_name}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileHero