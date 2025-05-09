class CreateItems < ActiveRecord::Migration[8.0]
  def change
    create_table :items do |t|
      t.references :wishlist, null: false, foreign_key: true
      t.string :name
      t.string :url
      t.decimal :price

      t.timestamps
    end
  end
end
