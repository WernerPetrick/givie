class Item < ApplicationRecord
  belongs_to :wishlist
  has_one_attached :image
  validates :name, presence: true
end
