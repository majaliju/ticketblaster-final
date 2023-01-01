class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


  ## logs in the user & cross-checks if the password is correct
  def create
    user = User.find_by!(username: params[:username]) 
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: ["Wrong password! Try again"] }, status: :unauthorized
      end
  end

  # delete the user from the session
  def destroy
    session.delete :user_id
    head :no_content
  end

  # def render_unprocessable_entity_response(invalid)
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unauthorized
  # end

  def render_not_found_response
    render json: { errors: ["This user doesn't exist!"] }, status: :not_found
  end
end
