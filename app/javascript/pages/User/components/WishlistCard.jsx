import { Link } from '@inertiajs/react'

function WishlistCard({wishlist}){
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <Link href={`/wishlists/${wishlist.id}`}>
        <figure>
          <img src={wishlist.cover_image_url} alt={wishlist.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{wishlist.title}</h2>
          <p>{wishlist.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default WishlistCard