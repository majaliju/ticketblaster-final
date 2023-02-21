class User < ApplicationRecord
  has_secure_password



  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 8, maximum: 254 }
  validates_presence_of :email
  validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP

  has_many :posts
  has_many :concerts, -> { distinct }, through: :posts
end
