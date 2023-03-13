class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :user_doesnt_exist

  ## checks if the username exists
  ## then authenticates that user
  ## if successful, the user is logged in 
  ## otherwise IDEALLY we handle error messages

 ## VIA NANCY -- RENDER A PROPER USER error message
 ## not just "Couldn't find user!"
  def create
    user = User.find_by!(username: params[:username])
    # check the user find return and find_by! return (and find_by return) to see which is triggering 
    # AR:RNR exception; and which to return for this exception 
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: 'Wrong password! Try again!' }, status: :unauthorized
    end
  end

  # delete the user from the session
  def destroy
    session.delete :user_id
    head :no_content
    byebug
  end


  private

  ## gotta render the proper error message for this one SMH
  def user_doesnt_exist
    render json: { error: "Looks like you don't have an account, sign up below and make one!"}
  end

end
