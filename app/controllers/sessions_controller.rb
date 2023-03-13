class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


  ### HERE IS WHERE WE MUST CROSS-CHECK, WITH 
  # find
  # find_by!
  # find_by
  ## to render proper errors if username doesn't exist
  def create
    user = User.find_by!(username: params[:username])
    # check the user find return and find_by! return (and find_by return) to see which is triggering 
    # AR:RNR exception; and which to return for this exception 
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
