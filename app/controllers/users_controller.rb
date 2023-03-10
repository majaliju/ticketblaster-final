class UsersController < ApplicationController


## a show method that returns the user matching session[:user_id]
  def show
    user = User.find_by!(id: session[:user_id])
    render json: user, status: 200
  end


  def create
    user = User.create!(signup_user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end



  private

  def signup_user_params
    params.permit(:username, :password, :password_confirmation, :email)
  end


end
