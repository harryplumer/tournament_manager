class Api::TournamentsController < ApplicationController
  before_action :set_tournament, only: [:update, :destroy]

  def index
    tournaments = Tournament.all
    render json: tournaments
  end

  def create
    tournament = Tournament.create(tournament_params)
    if tournament.save
      render json: tournament
    else
      render json: { errors: tournament.errors.join(',') }, status: 422
    end

  end

  def update
    if @tournament.update(tournament_params)
      render json: @tournament
    else
      render json: { errors: @tournament.errors.join(', ')}, status: 422
    end
  end

  def destroy
    @tournament.destroy
  end

  private
  def tournament_params
    params.require(:tournament).permit(:name, :number_of_divisions)
  end

  def set_tournament
    @tournament = Tournament.find(params[:id])
  end

end
