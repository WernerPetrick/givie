class CreateWishlists < ActiveRecord::Migration[8.0]
  def change
    create_table :wishlists do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
