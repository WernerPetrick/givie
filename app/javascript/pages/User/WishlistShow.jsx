import Header from "../components/Header";
import { useForm, usePage } from '@inertiajs/react';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';

function WishlistShow() {
  const { props } = usePage();
  const { wishlist = {} } = props;
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this wishlist? This action cannot be undone.")) {
      setIsDeleting(true);
      router.delete(`/wishlists/${wishlist.id}`, {
        onSuccess: () => {
        },
        onError: () => {
          setIsDeleting(false);
          alert("There was an error deleting the wishlist.");
        }
      });
    }
  };
  
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="text-sm breadcrumbs mb-6">
          <ul>
            <li><Link href="/profile">My Wishlists</Link></li>
            <li>{wishlist.title}</li>
          </ul>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
          <figure className="lg:w-1/3">
            <img 
              src={wishlist.cover_image_url} 
              alt={wishlist.title}
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body lg:w-2/3">
            <h2 className="card-title text-3xl">{wishlist.title}</h2>
            <div className="badge badge-accent mb-4">{wishlist.items?.length || 0} items</div>
            
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-primary" type="button">
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
              <Link href={`/wishlists/${wishlist.id}/edit`} className="btn btn-outline">
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit
              </Link>
              <button 
                className="btn btn-error" 
                onClick={handleDelete}
                disabled={isDeleting}
                type="button"
              >
                {isDeleting ? (
                  <>
                    <span className="loading loading-spinner loading-xs"/>
                    Deleting...
                  </>
                ) : (
                  <>
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Items List */}
        <div className="bg-base-100 shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Wishlist Items</h3>
          
          {wishlist.items && wishlist.items.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.items.map(item => (
                    <tr key={item.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </td>
                      <td>{item.price ? `$${item.price}` : 'N/A'}</td>
                      <td>
                        {item.url ? (
                          <a 
                            href={item.url} 
                            className="btn btn-sm btn-primary"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        ) : (
                          <span className="text-gray-400">No link</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No items in this wishlist yet</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WishlistShow;