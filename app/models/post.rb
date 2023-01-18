class Post < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :body, length: { minimum: 6, too_short: "has to be %{count} letters! Leave a phone number or price"}
  validates :tickets, numericality: { greater_than: 0, only_integer: true }

  def poster_name
    user.username
  end

  def poster_email
    user.email
  end

end
