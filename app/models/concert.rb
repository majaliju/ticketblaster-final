class Concert < ApplicationRecord
  belongs_to :artist

  has_many :posts, dependent: :destroy
  has_many :users, -> { distinct }, through: :posts

  validates :location, presence: true
  validates :image, presence: true
  validates :date, presence: true

  def artist_name
    artist.name
  end

  def artist_image
    artist.image
  end
end
