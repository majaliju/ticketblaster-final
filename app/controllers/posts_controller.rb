class PostsController < ApplicationController
  before_action :authorize_user, only: [:update]
 
  def word_match
#     CHALLENGE WITH BEN

# Create a custom route that takes a parameter of a single word. That route should take us to an action where we look through posts to see if any of the posts have that word in the content (doesn’t have to be a full match, case-insensitive). The action will render json of all the users that have matching posts. If there is no match render json that says so.

    # render
    # byebug
    # take a post, see if post.body matches params
    # Post.all.first.body.include?("tickets")
    word = params
    matching_users_array = []
  
posts = Post.all
matches = posts.filter {|post| post.body.include?(params[:word])}
matching_users = matches.each {|post| matching_users_array << post.user}
byebug
if matching_users_array
  render json: matching_users_array, status: 200
else
  render json: "I'm sorry, no user has a comment with this word!"
# if matching_users_array
#   render json: matching_users, status: 201
# else 
#   render json: "I'm sorry, no user has this phrase in their comment!"
end

  end

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


## have to reconfigure frontend error handling, to render this error message
# def update
#   post = find_post

# if post[:body] === params[:body] && post[:tickets] === params[:tickets]
#   render json: [{error: "Nothing was edited!"}], status: :unprocessable_entity
# else
#   post.update!(
#     body: params[:body],
#     tickets: params[:tickets]
#   )
#   render json: post, status: 200
# end
# end
