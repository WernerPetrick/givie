class AddCoverImageKeyToWishlists < ActiveRecord::Migration[8.0]
  def change
    add_column :wishlists, :cover_image_key, :string
  end
end
