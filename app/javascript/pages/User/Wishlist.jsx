import { useForm, usePage } from '@inertiajs/react'
import { useState } from 'react'
import WishlistCard from './components/WishlistCard'

function Wishlist() {
  const { props } = usePage()
  const { wishlists = [], available_covers = {} } = props

  const { data, setData, post, processing, reset } = useForm({
    wishlist: {
      title: '',
      cover_image_key: Object.keys(available_covers)[0],
      items_attributes: [{ name: '' }]
    }
  })

  const [selectedCover, setSelectedCover] = useState(Object.keys(available_covers)[0])

  const addItem = () => {
    setData('wishlist.items_attributes', [...data.wishlist.items_attributes, { name: '' }])
  }

  const removeItem = (index) => {
    const newItems = [...data.wishlist.items_attributes]
    newItems.splice(index, 1)
    setData('wishlist.items_attributes', newItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/wishlists', data, {
      onSuccess: () => {
        document.getElementById('my_modal_1').close()
        reset()
      }
    })
  }

  const closeModal = () => {
    document.getElementById('my_modal_1').close()
    reset()
  }

  return (
    <div className="wishlist-content max-w-7xl mx-auto px-4 py-6" role="tabpanel">
      {/* Hero section */}
      <div className="hero bg-base-200 rounded-box mb-8">
        <div className="hero-content text-center py-10">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Your Wishlists</h1>
            <p className="py-4">Create and manage all your wishlists in one place. Share them with friends and family.</p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('my_modal_1').showModal()}
              type="button"
            >
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Create New Wishlist
            </button>
          </div>
        </div>
      </div>

      {wishlists.length > 0 ? (
        <div>          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlists.map(wishlist => (
              <WishlistCard 
                key={wishlist.id} 
                wishlist={wishlist} 
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="w-24 h-24 rounded-full bg-base-200 flex items-center justify-center mb-4">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-base-content/60">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4M12 20V4" />
              </svg>
            </div>
            <h2 className="card-title text-2xl mb-2">No wishlists yet</h2>
            <p className="mb-4">Create your first wishlist to get started tracking the things you want.</p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => document.getElementById('my_modal_1').showModal()}
              type="button"
            >
              Create Your First Wishlist
            </button>
          </div>
        </div>
      )}

      {/* Create wishlist modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button">✕</button>
          </form>
          <h3 className="font-bold text-2xl mb-6">Create New Wishlist</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-5">
              <div className="label">
                <span className="label-text text-lg font-medium">Wishlist Title</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full input-lg"
                placeholder="My Birthday Wishlist"
                value={data.wishlist.title}
                onChange={e => setData('wishlist.title', e.target.value)}
                required
              />
            </div>
            
            <div className="form-control mb-6">
              <div className="label">
                <span className="label-text text-lg font-medium">Choose a Cover</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Object.entries(available_covers).map(([key, url]) => (
                  <div 
                    key={key}
                    onClick={() => {
                      setSelectedCover(key)
                      setData('wishlist.cover_image_key', key)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedCover(key)
                        setData('wishlist.cover_image_key', key)
                      }
                    }}
                    tabIndex={0}
                    // biome-ignore lint/a11y/useSemanticElements: <explanation>
                    role="button"
                    aria-pressed={selectedCover === key}
                    className={`relative aspect-video cursor-pointer rounded-xl border-2 overflow-hidden hover:ring-2 hover:ring-primary/30 transition-all
                      ${selectedCover === key ? 'border-primary ring-4 ring-primary/20' : 'border-base-300'}`}
                  >
                    <img 
                      src={url} 
                      alt={`Cover: ${key}`}
                      className="object-cover w-full h-full"
                    />
                    {selectedCover === key && (
                      <div className="absolute top-2 right-2 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md">
                        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="form-control mb-6">
              <div className="label">
                <span className="label-text text-lg font-medium">Add Items</span>
                <span className="label-text-alt">What would you like to receive?</span>
              </div>
              
              <div className="card bg-base-100 shadow-sm border">
                <div className="card-body p-4">
                  {data.wishlist.items_attributes.map((item, index) => (
                    <div key={item.id} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        className="input input-bordered flex-1"
                        placeholder={"e.g., New headphones"}
                        value={item.name}
                        onChange={e => {
                          const newItems = [...data.wishlist.items_attributes]
                          newItems[index].name = e.target.value
                          setData('wishlist.items_attributes', newItems)
                        }}
                        required={index === 0}
                      />
                      {index > 0 && (
                        <button 
                          type="button" 
                          className="btn btn-ghost btn-sm text-error" 
                          onClick={() => removeItem(index)}
                        >
                          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                  
                  <button 
                    type="button" 
                    className="btn btn-ghost btn-sm mt-2 border-dashed border-2" 
                    onClick={addItem}
                  >
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Another Item
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-action flex justify-between mt-8">
              <button 
                type="button" 
                className="btn btn-ghost" 
                onClick={closeModal}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary btn-wide" 
                disabled={processing}
              >
                {processing ? (
                  <>
                    <span className="loading loading-spinner loading-sm mr-2"/>
                    Creating...
                  </>
                ) : (
                  'Create Wishlist'
                )}
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type='button'>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default Wishlist