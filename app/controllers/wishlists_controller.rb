class WishlistsController < ApplicationController
  before_action :require_login

  def index
    @wishlists = current_user.wishlists.includes(:items)

    render inertia: "User/Profile", props: {
      wishlists: @wishlists.as_json(
        include: { items: { only: [ :id, :name, :url, :price ] } },
        methods: :cover_image_url,
        except: [ :created_at, :updated_at ]
      ),
      available_covers: Wishlist::COVER_IMAGES
    }
  end

  def create
    @wishlist = current_user.wishlists.new(wishlist_params)

    if @wishlist.save
      redirect_to wishlists_path, notice: "Wishlist created!"
    else
      redirect_to wishlists_path, errors: @wishlist.errors.full_messages
    end
  end

  def show
    @wishlist = Wishlist.find(params[:id])

    render inertia: "User/WishlistShow", props: {
      wishlist: @wishlist.as_json(
        include: { items: { only: [ :id, :name, :url, :price ] } },
        methods: :cover_image_url,
        except: [ :created_at, :updated_at ]
      )
    }
  end

  def destroy
    @wishlist = Wishlist.find(params[:id])
    @wishlist.destroy

    if @wishlist.destroy
      redirect_to profile_path, notice: "Wishlist deleted!"
    else
      redirect_to wishlists_path, errors: @wishlist.errors.full_messages
    end
  end

  private

  def wishlist_params
    params.require(:wishlist).permit(:title, :cover_image_key, items_attributes: [ :id, :name, :url, :price, :_destroy ])
  end
end
