class PostsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize_user, only: %i[update destroy]

  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = Post.find_by!(id: params[:id])
    render json: post, status: 200
  end

  def create
    post = Post.create!(new_post_params)
    render json: post, status: 201
  end

  def update
    post = Post.find_by!(id: params[:id])

    ## include here a cross-check for the body && tickets being same as params when entered; rescue and output "nothing changed!"

    post.update!(
      body: params[:body],
      tickets: params[:tickets]
    )
    render json: post, status: 200
  end

  def destroy
    post = Post.find_by!(id: params[:id])

    post.destroy
    head :no_content
  end

  private

  def authorize_user
    unless session[:user_id] === params[:user_id]
      render json: { error: 'User not authorized to make edits!' },
             status: :unauthorized
    end
  end

  def new_post_params
    params.permit(:concert_id, :user_id, :for_sale, :tickets, :body)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { error: invalid.message }, status: :not_found
  end
end

# # original write-up for create
# def create
#   post = Post.create!(new_post_params)

#   if post.valid?
#     render json: post, status: 200
#   else
#     render json: { errors: post.errors }, status: :unprocessable_entity
#   end
# end

# def update
#   post = Post.find_by(id: params[:id])
#   user = User.find_by(id: session[:user_id])
#   if session[:user_id] === params[:user_id]
#     post.update(
#       comment_body: params[:comment_body],
#       tickets: params[:tickets]
#     )
#     render json: post, status: 200
#     end
#   end
