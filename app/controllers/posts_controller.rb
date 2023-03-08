class PostsController < ApplicationController
  before_action :authorize_user, only: [:update]

  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = find_post
    render json: post, status: 200
  end

  def create
    post = Post.create!(new_post_params)
    render json: post, status: 201
  end


def update
  post = find_post

if post[:body] === params[:body] && post[:tickets] === params[:tickets]
  render json: {errors: ['Nothing was edited! Make a change at least to one of the sections here']}, status: :unprocessable_entity
else
  post.update!(
    body: params[:body],
    tickets: params[:tickets]
  )
  render json: post, status: 200
end
end


  def destroy
    post = find_post
    if session[:user_id] === post[:user_id]
    post.destroy
    head :no_content
    else
      render json: {error: 'User not allowed to delete this; the post was made by someone else'}
    end
  end

  private

  def find_post
    post = Post.find_by!(id: params[:id])
  end

  def authorize_user
    unless session[:user_id] === params[:user_id]
      render json: { error: 'User not authorized to make edits!' },
             status: :unauthorized
    end
  end

 

  def new_post_params
    params.permit(:concert_id, :user_id, :for_sale, :tickets, :body)
  end

end


