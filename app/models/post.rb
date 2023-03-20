class Post < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :body, length: { minimum: 6, too_short: 'has to be %<count>s letters! Leave a phone number or price' }
  validates :tickets, numericality: { greater_than: 0, only_integer: true }


  def poster_name
    user.username
  end

  def poster_email
    user.email
  end

  def concert_image
    concert.image
  end

  def concert_location
    concert.location
  end

  def concert_date
    concert.date
  end

  def concert_artist_name
    concert.artist_name
  end

  def concert_artist_image
    concert.artist_image
  end
end
