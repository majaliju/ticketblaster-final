class PostsController < ApplicationController
  before_action :authorize_user
 
 

  def show
    post = find_post
    render json: post, status: 200
  end

  def create
    user = User.find(session[:user_id])
    post = user.posts.create!(new_post_params)
    render json: post, status: 201
  end


def update
    user = User.find(session[:user_id])
    post = user.posts.find_by!(id: params[:id])
    

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
    user = User.find(session[:user_id])
    post = user.posts.find_by!(id: params[:id])
    if post
      post.destroy
      head :no_content
    else
      render json: {error: 'Post doesnt exist!'}
    end
  end

  private

  def find_post
    user = User.find(session[:user_id])
    if user 
        post = user.posts.find_by!(id: params[:id])
        render json: post
    end
  end

  def authorize_user
    user = User.find(session[:user_id])
    if !user
      render json: { error: "User isn't authorized!"},
          status: :unauthorized
    end
  #   unless session[:user_id] === params[:user_id]
  #     render json: { error: 'User not authorized to make edits!' },
  #            status: :unauthorized
  #   end
  end


 

  def new_post_params
    params.permit(:concert_id, :for_sale, :tickets, :body)
  end

end

