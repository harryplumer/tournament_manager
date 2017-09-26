class Api::TournamentsController < ApplicationController
  before_action :set_tournament, only: [:update, :destroy]

  def index
    tournaments = Tournament.all
    render json: tournaments
  end

  def create
    tournament = Tournament.new
    if tournament.save(tournament_params)
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

  def destroy
    @tournament.destroy
  end

  private
  def tournament_params
    params.require(:tournament).permit(:name)
  end

  def set_tournament
    @tournament = Tournament.find(params[:id])
  end

end
