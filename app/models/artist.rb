class Artist < ApplicationRecord
  has_many :concerts

  has_many :posts, through: :concerts

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :genre, presence: true

  # def concert_image
  #   concerts.image
  # end

  # def concert_location
  #   concerts.location
  # end

  # def concert_date
  #   concerts.date
  # end
end
