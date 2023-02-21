class ConcertsController < ApplicationController
  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    concerts = Concert.all
    render json: concerts
  end

  def show
    concert = find_concert
    render json: concert, status: 200
  end

  def create
    concert = Concert.create!(new_concert_params)
    render json: concert, status: 201
  end

  private

def find_concert

  concert = Concert.find_by!(id: params[:id])
end

  def new_concert_params
    params.permit(:artist_id, :date, :image, :location)
  end


end
