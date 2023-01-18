class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :genre, :concert_image,
             :concert_location
  :concert_date

  has_many :concerts, serializer: ConcertSerializer
end
