class PostSerializer < ActiveModel::Serializer
  attributes :id, :body, :for_sale, :tickets, :concert_id, :user_id, :poster_name, :poster_email

  belongs_to :user, serializer: UserSerializer
  belongs_to :concert, serializer: ConcertSerializer
end
