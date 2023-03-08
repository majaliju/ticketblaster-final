class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  ##  gets session info
  def index
    render json: session
  end


  def show_cookies
    cookies[:cookies_tester] ||= 'Cookies work!'
    cookies[:user_id] = session[:user_id]
    render json: { cookies: cookies.to_hash }
  end

 
  def create
    user = User.find_by!(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: 'Wrong password! Try again' }, status: :unauthorized
    end
  end

  # delete the user from the session
  def destroy
    session.delete :user_id
    head :no_content
  end


end
