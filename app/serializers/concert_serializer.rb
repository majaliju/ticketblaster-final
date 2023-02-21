class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :image, :artist_id, :artist_name, :artist_image

  belongs_to :artist, serializer: ArtistSerializer
  has_many :posts, serializer: PostSerializer
 
  has_many :users, through: :posts, serializer: UserSerializer
end
