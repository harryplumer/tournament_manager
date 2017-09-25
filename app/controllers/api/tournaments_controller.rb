class Api::TournamentsController < ApplicationController
  def create
    tournament = Tournament.new

    if tournament.save(tournament_params)
      render json: tournament
    else
      render json: { errors: tournament.errors.join(',') }, status: 422
    end 

  end

  def update
  end

  def destroy
  end 

  private
  def tournament_params
    tournament.require(:tournament).permit(:name)
  end

end
