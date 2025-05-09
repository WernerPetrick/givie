class User < ApplicationRecord
  include Clearance::User
  before_save :assign_random_avatar, if: -> { avatar_url.blank? }

  has_many :wishlists, dependent: :destroy

  private

  def assign_random_avatar
    Rails.logger.debug "🔥 assign_random_avatar called for #{self.email}"
    return if avatar_url.present?

    seed = SecureRandom.hex(8)
    self.avatar_url = "https://api.dicebear.com/7.x/fun-emoji/png?seed=#{seed}"
    Rails.logger.debug "🎨 Assigned avatar_url: #{self.avatar_url}"
  end
end
