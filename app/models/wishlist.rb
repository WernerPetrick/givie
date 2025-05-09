class Wishlist < ApplicationRecord
  belongs_to :user
  has_many :items, dependent: :destroy

  accepts_nested_attributes_for :items, allow_destroy: true

  has_one_attached :cover_image

  COVER_IMAGES = {
    "present" => "/images/wrapped-present.png",
    "wedding" => "/images/wedding-gifts.png",
    "monster" => "/images/monster-with-gift.png",
    "plane" => "/images/plane-dropping-presents.png",
    "baby_shower" => "/images/baby-shower-gifts.png",
    "christmas" => "/images/christmas-tree-with-gifts.png",
    "santa" => "/images/santa-with-presents.png",
    "book" => "/images/gift-wrapped-book.png"
  }

  attribute :cover_image_key, :string

  def cover_image_url
    COVER_IMAGES[cover_image_key] || COVER_IMAGES.values.first
  end
end
