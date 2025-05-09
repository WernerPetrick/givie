class UsersController < Clearance::UsersController
  def new
    render inertia: "Auth/SignUp"
  end

  def create
    user = User.new(user_params)
    if user.save
      sign_in(user)
      user.reload
      render inertia: "User/Profile", props: {
        user: user.as_json(only: [ :id, :email, :first_name, :last_name, :avatar_url ]),
        current_user: user.as_json(only: [ :id, :email, :first_name, :last_name, :avatar_url ])
      }
    else
      render inertia: "Auth/SignUp", props: { errors: user.errors.to_hash }
    end
  end

  def profile
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

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :avatar_url)
  end
end
