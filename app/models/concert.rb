class Concert < ApplicationRecord
  belongs_to :artist

  has_many :posts, dependent: :destroy
  has_many :users, -> { distinct }, through: :posts

  validates :location, presence: true
  validates :image, presence: true
  validates :date, presence: true

  validate :date_must_be_in_the_future, on: :create


  def artist_name
    artist.name
  end

  def artist_image
    artist.image
  end

  private 

def date_must_be_in_the_future
  errors.add(:date, "can't be in the past!") unless date.future?
end

  
end
